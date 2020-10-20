<template>
  <div class="w-screen h-screen fourofour bg-cover bg-center px-5">
    <div class="container h-full flex justify-center items-center text-center georgia">
      <div class="bg-white p-16 w-full md:w-3/4 lg:w-2/3">
        <h1 class="text-6xl md:text-7xl font-bold leading-tight mb-12">
          You've wandered too far...
        </h1>
        <a href="/" class="bg-black text-ash px-4 py-2 text-2xl gotham-light submit-button">
          Take me back
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
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
