<template>
  <section
    class="hero is-fullheight is-error-section"
    :style="
      `background: url(${$store.getters.background_image}) no-repeat 50% fixed; background-size: cover;`
    "
  >
    <div class="hero-body has-text-centered" style="justify-content: center;">
      <div class="login">
        <div class="box">
          <h1 class="title is-3">
            Ventanilla Digital
          </h1>
          <figure class="avatar">
            <router-link
              class="notification"
              tag="img"
              src="https://www.itmerida.mx/imagenes/tec.png"
              width="125px"
              alt="Logo"
              to="/"
            />
          </figure>
          <form>
            <b-field>
              <b-input
                v-model="user.email"
                placeholder="Correo"
                type="email"
                icon="account"
                required
              />
            </b-field>

            <b-field>
              <b-input
                v-model="user.password"
                required
                type="password"
                placeholder="Contraseña"
                password-reveal
                icon="lock"
                @keyup.enter="submit"
              />
            </b-field>
            <!-- <div class="field">
              <label class="checkbox">
                <input type="checkbox" />
                Recuérdame
              </label>
            </div> -->
            <button
              class="button is-block is-info is-medium is-fullwidth"
              :class="{ 'is-loading': isLoading }"
              @click.prevent="submit"
            >
              Iniciar sesión
              <i class="fa fa-sign-in" aria-hidden="true" />
            </button>
          </form>
        </div>
        <p class="has-text-white">
          ¿No tienes una cuenta?&nbsp;·&nbsp;
          <router-link tag="a" to="/register">
            Regístrate
          </router-link>
          <br>¿Olvidaste tu contraseña?&nbsp;·&nbsp;
          <router-link tag="a" to="/password-recovery">
            Recuperar contraseña
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import redirect from '@/mixins/redirect'
// import { errorSnackbar } from '@/plugins/alerts'

export default {
  // mixins: [redirect],
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      message: '',
      isLoading: false
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      try {
        this.user.email = this.user.email.toLowerCase()
        await this.$store.dispatch('users/login', this.user)
        await this.$store.dispatch('users/getUser')
        this.$router.push({
          path: '/',
          /*
          this.redirect ||
          */

          query: this.otherQuery
        })
      } catch (error) {
        console.log(error)
        if (
          error.detail === 'No active account found with the given credentials'
        ) {
          console.log('El correo o la contraseña ingresados no son correctos.')
          /*
          this.$dw.messages.errorSnackbar(
            'El correo o la contraseña ingresados no son correctos.'
          )
          */
        } else {
          console.log(error)
          /*
          this.$dw.messages.errorSnackbar(error)
          */
        }
      } finally {
        this.isLoading = false
      }
    }
  },
  head () {
    return {
      title: 'Login — Servicios escolares ITMerida'
    }
  }
}
</script>

<style scoped>
html,
body {
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: rgb(247, 247, 247);
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 0rem;
  background: white;
  border-radius: 10px;
}
.avatar {
  margin-top: 20px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 0px;
  background: white;
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.login-hr {
  border-bottom: 1px solid rgb(7, 7, 7);
}

.has-text-black {
  color: black;
}

.field {
  padding-bottom: 10px;
}

.fa {
  margin-left: 5px;
}

.button {
  background: #800000;
}

.button:hover {
  background: #d9ad26;
  color: black;
  transition: 0.6s;
}

.box h1 {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -2px;
}

.notification:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
