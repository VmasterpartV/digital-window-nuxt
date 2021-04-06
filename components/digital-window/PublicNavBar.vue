<template>
  <b-navbar class="container is-fluid topNav" :fixed-top="true">
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="@/assets/img/logo_self_service2.png" alt="Logo ITMerida">
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link to="/register" class="button is-primary">
            <strong>Regístrate</strong>
          </nuxt-link>
          <nuxt-link to="/login" class="button is-light">
            Iniciar sesión
          </nuxt-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.topNav {
  z-index: 5;
  border-top: 5px solid #800000;
  height: 7vh;
}
</style>
