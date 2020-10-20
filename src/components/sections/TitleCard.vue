<template>
  <div class="title-card h-screen bg-cover bg-center">
    <div
      class="container h-full flex flex-col justify-center items-center mx-auto relative"
      ref="title"
      data-lax-preset="eager-150"
    >
      <img
        src="../../assets/images/sog_white_logo.png"
        class="w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4"
      />
      <p class="text-center w-3/4 xl:w-3/5 mt-8 text-white">
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
  mounted() {
    this.$lax.addElement(this.$refs.title)
  },
  beforeDestroy() {
    this.$lax.addElement(this.$refs.title)
  },
}
</script>

<style scoped lang="scss">
.title-card {
  background-image: url('../../assets/images/SOG_WEBSITE_HEADER.png');
  .logo {
    width: 150px;
  }
  .decor {
    width: 150px;
  }
}

.title-card > div {
  top: 5%;
}
</style>
