<template>
  <div id="app">
    <Loading :loading="loading" />
    <router-view v-on:submitting="toggle($event)" />
  </div>
</template>

<script>
import Loading from './components/Loading.vue'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Loading,
  },
  methods: {
    UpdateLax() {
      this.$lax.update(window.scrollY)
      window.requestAnimationFrame(this.UpdateLax)
    },
    toggle(status) {
      this.loading = status
    },
  },
  mounted() {
    window.requestAnimationFrame(this.UpdateLax)
  },
  created() {
    this.$lax.setup()
  },
}
</script>
