<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a
        :title="toggleTooltip"
        class="navbar-item is-desktop-icon-only is-hidden-touch"
        @click.prevent="menuToggle"
      >
        <b-icon :icon="menuToggleIcon" />
      </a>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="@/assets/img/logo_self_service2.png" alt="Logo ITMerida">
      </b-navbar-item>
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="menuToggleMobile"
      >
        <b-icon :icon="menuToggleMobileIcon" />
      </a>
      <!--<div class="navbar-item no-left-space">
        <div class="control">
          <input class="input" placeholder="Search everywhere..." />
        </div>
      </div>-->
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="updatesToggle"
      >
        <b-icon icon="bell" custom-size="default" />
      </a>
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuNavBarToggle"
      >
        <b-icon :icon="menuNavBarToggleIcon" custom-size="default" />
      </a>
    </div>
    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuNavBarActive }"
    >
      <div class="navbar-end">
        <nav-bar-menu class="has-divider has-user-avatar">
          <user-avatar />
          <div class="is-user-name">
            <span class="has-text-primary">{{ userName }}</span>
          </div>

          <div slot="dropdown" class="navbar-dropdown">
            <nuxt-link
              to="/solicitudes"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon custom-size="default" icon="file-document" />&nbsp;
              <span>Solicitudes</span>
            </nuxt-link>
            <nuxt-link
              to="/profile"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon icon="account" custom-size="default" />
              <span>Perfil</span>
            </nuxt-link>
            <nuxt-link
              to="/info"
              class="navbar-item"
              exact-active-class="is-active"
            >
              <b-icon
                custom-size="default"
                icon="help-circle-outline"
                exact-active-class="is-active"
              /><span>FAQ</span>
            </nuxt-link>
            <hr class="navbar-divider">
            <a class="navbar-item" @click="logout">
              <b-icon icon="logout" type="is-danger" custom-size="default" />
              <span class="has-text-danger">Cerrar Sesión</span>
            </a>
          </div>
        </nav-bar-menu>
        <!--<a
          class="navbar-item has-divider is-desktop-icon-only"
          title="Dark mode"
          @click="darkModeToggle"
        >
          <b-icon :icon="darkModeToggleIcon" custom-size="default" />
          <span>Modo Oscuro</span>
        </a>-->
        <a
          class="navbar-item has-divider is-hidden-mobile is-desktop-icon-only"
          :class="{ 'is-active': isAsideRightVisible }"
          title="Updates"
          @click.prevent="updatesToggle"
        >
          <b-icon
            icon="bell"
            custom-size="default"
            :class="{ 'has-update-mark': hasUpdates }"
          />
        </a>
        <nuxt-link
          to="/info"
          class="navbar-item has-divider is-hidden-mobile is-desktop-icon-only"
          exact-active-class="is-active"
          title="FAQ"
        >
          <b-icon
            custom-size="default"
            icon="help-circle-outline"
            exact-active-class="is-active"
          />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavBarMenu from '@/components/NavBarMenu'
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'NavBar',
  components: {
    UserAvatar,
    NavBarMenu
  },
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isMenuNavBarActive: false
    }
  },
  mounted () {
    // console.log(this.userName)
  },
  computed: {
    menuNavBarToggleIcon () {
      return this.isMenuNavBarActive ? 'close' : 'dots-vertical'
    },
    menuToggleMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    menuToggleIcon () {
      return this.isAsideExpanded ? 'backburger' : 'forwardburger'
    },
    toggleTooltip () {
      return this.isAsideExpanded ? 'Collapse' : 'Expand'
    },
    darkModeToggleIcon () {
      return this.isDarkModeActive ? 'white-balance-sunny' : 'weather-night'
    },
    ...mapState([
      'isNavBarVisible',
      'isAsideExpanded',
      'isAsideMobileExpanded',
      'isAsideRightVisible',
      'isDarkModeActive',
      'hasUpdates'
    ])
  },
  methods: {
    menuToggle () {
      this.$store.commit('asideStateToggle')
    },
    menuToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    menuNavBarToggle () {
      this.isMenuNavBarActive = !this.isMenuNavBarActive
    },
    updatesToggle () {
      this.$store.commit('asideRightToggle')
    },
    darkModeToggle () {
      this.$store.commit('darkModeToggle')
    },
    logout () {
      this.$buefy.snackbar.open({
        message: 'Log out clicked',
        queue: false
      })
    }
  }
}
</script>
