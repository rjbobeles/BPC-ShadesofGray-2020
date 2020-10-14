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
    toggle(status) {
      this.loading = status
    },
  },
}
</script>
