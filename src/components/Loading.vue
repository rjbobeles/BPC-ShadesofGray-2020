<template>
  <transition name="fade">
    <div v-if="loading">
      <div id="overlay">
        <div id="logo">
          <img src="../assets/images/nameplates/logo.png" alt="" width="100px" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    toggle() {
      this.loading = !this.loading
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity 1s;
}

.fade-leave-to {
  opacity: 0;
}

div#overlay {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(231, 231, 231);
  transition: 250ms opacity;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div#logo {
    opacity: 1;
    animation: opacity 2500ms infinite;
    padding-bottom: 20px;
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
