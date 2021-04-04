<template>
  <div>
    <Welcome />
    <br />
    <Carousel />
    <RequestsInfo />
  </div>
</template>

<script>
export default {
  components: {
    Carousel: () => import('../components/digital-window/Carousel'),
    Welcome: () => import('../components/digital-window/Welcome'),
    RequestsInfo: () => import('../components/digital-window/HomeRequestInfo')
  }
}
</script>
