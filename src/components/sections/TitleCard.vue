<template>
  <div class="title-card h-screen bg-parchment">
    <div class="container h-full flex flex-col justify-center items-center mx-auto">
      <img src="../../assets/images/nameplates/SOG_Logo_black.png" class="logo" />
      <h1 class="elephant text-8xl lg:text-9xl strip mb-5 leading-none normal-case">Epilogue</h1>
      <img src="../../assets/images/decor.png" class="decor" />
      <p class="text-center w-3/4 xl:w-3/5 mt-24 text-smoke">
        And so it comes; the conclusion we did not expect unfurled at the palm of our hands. We hold
        each fragment together, trying to form a whole unfinished piece. What would have happened
        had it continued? Would it have been better if certain and guaranteed? There is still so
        much to be told, yet to be resolved, however the scenes have been cut short and tied
        loosely.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleCard',
}
</script>

<style scoped lang="scss">
.title-card {
  .logo {
    width: 150px;
  }
  .decor {
    width: 150px;
  }
}

@media (max-width: 639px) {
  .title-card {
    h1 {
      font-size: 17vw;
    }
  }
}
</style>
