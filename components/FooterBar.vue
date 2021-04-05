<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            &copy;&nbsp; <b>{{ $store.getters.owner }}</b>&nbsp; {{ $store.getters.department }}.
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a target="_blank" :href="$store.getters.logo_redirect">
                <img :src="$store.getters.logo" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'

export default {
  name: 'FooterBar',
  computed: {
    year () {
      return dayjs().year()
    },
    ...mapState(['isFooterBarVisible'])
  }
}
</script>
