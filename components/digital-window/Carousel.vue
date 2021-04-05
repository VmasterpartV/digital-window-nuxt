<template>
  <section class="container">
    <b-carousel
      :indicator="true"
      :indicator-background="true"
      :indicator-inside="false"
      indicator-mode="click"
      indicator-position="is-bottom"
      indicator-style="is-lines"
    >
      <b-carousel-item v-for="(item, i) in avisos" :key="i">
        <a class="image" :href="item.url" target="_blank">
          <img :src="item.img">
        </a>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      avisos: {
        aviso1: {
          url: 'https://www.itmerida.mx/',
          img: require('~/assets/img/welcome.jpg')
        },
        aviso2: {
          url: '',
          img: require('~/assets/img/Presentation.png')
        },
        aviso3: {
          url: 'https://aaaimx.org/digital-window/#/info',
          img: require('~/assets/img/info.jpg')
        }
      }
    }
  }
}
</script>
