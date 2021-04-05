<template>
  <div class="card box cta">
    <div class="card-image">
      <figure class="image img">
        <img :src="request.img" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <h1 class="title is-4">
            {{ request.label }}
          </h1>
          <p>
            {{ request.description }}
          </p>

          <!--<a
            class="button is-primary"
            @click="show_form(true)"
            v-if="$store.state.users.isLogued"
          >
            <strong>Solicitar</strong>
          </a>
          <nuxt-link v-else tag="a" to="/info" class="button is-primary">
            <strong>Info.</strong>
          </nuxt-link>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestInfoCard',
  props: {
    request: {
      type: Object,
      default: null
    }
  },
  methods: {
    show_form (value) {
      this.$store.commit('users/SHOW_FORM', value)
    }
  }
}
</script>

<style scoped>
.card {
  height: 15vw;
  background: #262626;
  overflow: hidden;
}
.card .card-image,
.card .card-content {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  transition: 0.5s;
}
.card .card-image {
  top: 0;
  left: 0;
}
.card:hover .card-image {
  top: 0;
  left: -100%;
}
.card .card-image img {
  width: 100%;
}
.card .card-content {
  background: #262626;
  top: 0;
  left: 100%;
}
.card:hover .card-content {
  top: 0;
  left: 0%;
}

.media-content p {
  margin: 0.85vh 0 0;
  color: #fff;
  font-size: 0.9vw;
  padding-bottom: 2%;
}

.media-content h1 {
  margin: 0.85vh 0 0;
  color: #fff;
  font-size: 1.4vw;
  padding-bottom: 2%;
}

.media-content a {
  margin: 0.85vh 0 0;
  color: #fff;
  width: 5vw;
  height: 2vw;
}

.media-content .button strong {
  font-size: 0.9vw;
}

@media screen and (max-width: 768px) {
  .card {
    height: 50vw;
  }

  .media-content p {
    font-size: 3vw;
  }

  .media-content h1 {
    font-size: 4vw;
  }

  .media-content a {
    width: 15vw;
    height: 6vw;
  }

  .media-content .button strong {
    font-size: 3vw;
  }
}
</style>
