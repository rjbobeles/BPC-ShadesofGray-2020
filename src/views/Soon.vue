<template>
  <div class="w-screen h-screen fourofour bg-cover bg-center px-5">
    <div class="container h-full flex justify-center items-center text-center georgia">
      <div class="bg-white p-16 w-full md:w-3/4 lg:w-2/3">
        <img
          src="../assets/images/sog_black_logo.png"
          class="mx-auto w-1/3 lg:w-1/5 opacity-25 mb-3"
        />
        <h1 class="text-6xl md:text-7xl font-bold leading-tight">Coming soon.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Soon',
}
</script>

<style scoped lang="scss">
.fourofour {
  background-image: url(../assets/images/full.png);
}
@media (max-width: 639px) {
  h1 {
    font-size: 10vw;
  }
}
</style>
