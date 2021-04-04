<template>
  <div id="app">
    <nav-bar />
    <aside-menu
      :menu="menu"
      :menu-bottom="menuBottom"
      :class="{'has-secondary':!!menuSecondary}"
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'
import Overlay from '@/components/Overlay'
import AsideRight from '@/components/AsideRight'

export default {
  name: 'App',
  components: {
    AsideRight,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
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
      return [
        'General',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Dashboard'
          }
        ],
        'Examples',
        [
          {
            action: 'dark-mode-toggle',
            label: 'Dark / White',
            icon: 'weather-night'
          },
          {
            to: '/tables',
            label: 'Tables',
            icon: 'table',
            updateMark: true
          },
          {
            to: '/forms',
            label: 'Forms',
            icon: 'square-edit-outline'
          },
          {
            to: '/profile',
            label: 'Profile',
            icon: 'account-circle'
          },
          {
            label: 'Dropdown',
            icon: 'arrow-down-bold-circle',
            menu: [
              {
                href: '#void',
                label: 'Sub-item One'
              },
              {
                href: '#void',
                label: 'Sub-item Two'
              }
            ]
          },
          {
            label: 'Submenus',
            icon: 'view-list',
            menuSecondaryKey: 'submenu-1',
            menuSecondaryIcon: 'view-list',
            menuSecondaryLabel: 'Example',
            menuSecondary: [
              'Something',
              [
                {
                  icon: 'view-list',
                  href: '#void',
                  label: 'Sub-item One'
                },
                {
                  icon: 'view-list',
                  href: '#void',
                  label: 'Sub-item Two'
                }
              ],
              'Dropdown',
              [
                {
                  label: 'Submenus',
                  icon: 'view-list',
                  menu: [
                    {
                      href: '#void',
                      label: 'Sub-item One'
                    },
                    {
                      href: '#void',
                      label: 'Sub-item Two'
                    }
                  ]
                }
              ]
            ]
          }
        ],
        'Other',
        [
          {
            to: '/full-page/login',
            label: 'Login',
            icon: 'lock'
          },
          {
            to: '/full-page/error',
            label: 'Error v.1',
            icon: 'power-plug'
          },
          {
            to: '/full-page/error-copy',
            label: 'Error v.2',
            icon: 'alert-decagram'
          },
          {
            to: '/full-page/lock-screen',
            label: 'Lock Screen',
            icon: 'lock-reset'
          }
        ],
        'About',
        [
          {
            href: 'https://justboil.me/bulma-admin-template/null-nuxt',
            label: 'About',
            icon: 'help-circle'
          }
        ]
      ]
    },
    menuBottom () {
      return [
        {
          action: 'logout',
          icon: 'logout',
          label: 'Log out',
          state: 'info'
        }
      ]
    },
    ...mapState([
      'isOverlayVisible'
    ])
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
  mounted () {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
  },
  methods: {
    menuClick (item) {
      if (item.menuSecondary) {
        this.menuSecondary = item.menuSecondary
        this.menuSecondaryLabel = item.menuSecondaryLabel ? item.menuSecondaryLabel : null
        this.menuSecondaryIcon = item.menuSecondaryIcon ? item.menuSecondaryIcon : null

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
