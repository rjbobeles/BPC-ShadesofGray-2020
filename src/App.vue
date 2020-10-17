<template>
  <div id="app">
    <Loading ref="loading" />
    <router-view />
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import SmoothScroll from './assets/js/smoothscroll'

export default {
  components: {
    Loading,
  },
  methods: {
    UpdateLax() {
      this.$lax.update(window.scrollY)
      window.requestAnimationFrame(this.UpdateLax)
    },
  },
  mounted() {
    if (!window.smoothScroll) {
      window.smoothScroll = SmoothScroll(document, 180, 20)
    }
    window.requestAnimationFrame(this.UpdateLax)
  },
  created() {
    this.$lax.setup()
  },
}
</script>
