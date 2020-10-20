<template>
  <div class="w-screen h-screen fourofour bg-cover bg-center px-5">
    <div class="container h-full flex flex-col justify-center items-center text-center georgia">
      <img src="../assets/images/sog_black_logo.png" class="mx-auto mb-3 logo" />
      <div class="bg-white p-8 md:p-16 w-full md:w-3/4 lg:w-2/3">
        <h1 class="text-6xl md:text-7xl font-bold leading-tight">Thank you.</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Thanks',
  mounted() {
    this.$emit('submitting', false)
  },
}
</script>

<style scoped lang="scss">
.logo {
  width: 200px;
}
.bg-white {
  background-color: rgba(255, 255, 255, 0.8);
}
.fourofour {
  background-image: url(../assets/images/full.png);
}
@media (max-width: 639px) {
  h1 {
    font-size: 10vw;
  }
}
</style>
