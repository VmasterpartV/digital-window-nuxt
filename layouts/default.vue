<template>
  <div id="app">
    <!-- ------------Authenticated---------- -->
    <template v-if="$store.state.users.isLogued">
      <nav-bar
        :user-name="
          $store.state.students.studentForm.enrollment
            ? $store.state.students.studentForm.enrollment
            : $store.state.users.user.first_name
        "
      />
      <aside-menu
        :menu="menu"
        :menu-bottom="menuBottom"
        :class="{ 'has-secondary': !!menuSecondary }"
        @menu-click="menuClick"
      />
      <aside-menu
        v-if="menuSecondary"
        :menu="menuSecondary"
        :is-secondary="true"
        :label="menuSecondaryLabel"
        :icon="menuSecondaryIcon"
        @menu-click="menuClick"
        @close="menuSecondaryCloseClick"
      />
      <nuxt />
      <aside-right />
      <footer-bar />
      <overlay />
    </template>
    <!-- ------------Public---------- -->
    <template v-else>
      <public-nav-bar />
      <nuxt />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import PublicNavBar from '@/components/digital-window/PublicNavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'
import Overlay from '@/components/Overlay'
import AsideRight from '@/components/AsideRight'
import Menu from '@/menus/students'

export default {
  name: 'App',
  components: {
    AsideRight,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    PublicNavBar
  },
  data () {
    return {
      menuSecondary: null,
      menuSecondaryLabel: null,
      menuSecondaryIcon: null
    }
  },
  computed: {
    menu () {
      return Menu
    },
    menuBottom () {
      return [
        {
          action: 'logout',
          icon: 'logout',
          label: 'Cerrar sesión',
          state: 'danger'
        }
      ]
    },
    ...mapState(['isOverlayVisible'])
  },
  watch: {
    isOverlayVisible (newValue) {
      if (!newValue) {
        this.menuSecondaryClose()
      }
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  },
  async mounted () {
    await this.$store.dispatch('users/getUser')
    if (await this.$store.state.users.isLogued) {
      document.documentElement.classList.add('has-aside-left')
      document.documentElement.classList.add('has-aside-mobile-transition')
      document.documentElement.classList.add('has-navbar-fixed-top')
    }
  },
  methods: {
    menuClick (item) {
      if (item.menuSecondary) {
        this.menuSecondary = item.menuSecondary
        this.menuSecondaryLabel = item.menuSecondaryLabel
          ? item.menuSecondaryLabel
          : null
        this.menuSecondaryIcon = item.menuSecondaryIcon
          ? item.menuSecondaryIcon
          : null

        this.$store.commit('asideActiveForcedKeyToggle', item)
        this.$store.commit('overlayToggle', true)
      } else if (item.action) {
        if (item.action === 'logout') {
          this.$buefy.toast.open({
            message: 'Log out clicked',
            type: 'is-danger',
            queue: false
          })
        } else if (item.action === 'dark-mode-toggle') {
          this.$store.commit('darkModeToggle')
        }
      }
    },
    menuSecondaryCloseClick () {
      this.$store.commit('overlayToggle', false)
    },
    menuSecondaryClose () {
      this.menuSecondary = this.menuSecondaryLabel = this.menuSecondaryIcon = null
      this.$store.commit('asideActiveForcedKeyToggle', null)
    }
  }
}
</script>
