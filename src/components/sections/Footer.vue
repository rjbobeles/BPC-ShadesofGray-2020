<template>
  <div class="footer text-white">
    <div class="w-full flex justify-center items-center text-center quote bg-center bg-cover">
      <div class="end relative py-56 text-smoke text-xl" ref="quote" data-lax-preset="eager">
        This is the page of the end and the end of the page, the epilogue. The end awaits for you
        and you await for the end.
      </div>
    </div>
    <div class="fot w-full bg-top bg-cover">
      <div class="container mx-auto px-5">
        <div
          class="w-full flex flex-col sm:flex-row py-32 flex-wrap xl:flex-no-wrap justify-around items-center"
        >
          <div
            class="w-full xl:w-1/3 pb-8 sm:pb-16 xl:pb-0 flex sm:justify-center xl:justify-start xl:pr-24"
          >
            <img
              src="../../assets/images/sog_cream_logo.png"
              class="logo sm:w-1/2 lg:w-1/3 xl:w-full"
            />
          </div>
          <div class="w-full sm:w-2/5 lg:w-1/3 georgia text-sm pb-12 sm:pb-0">
            Shades of Gray is the official literary folio of the students of De La Salle-College of
            Saint Benilde. In this year’s Shades of Gray, we’re inviting you to share untold
            stories, might it be because it ended abruptly or have yet to come, through literature.
            <br /><br /><br />
            Benildean Press Corps © 2020. All rights reserved.
          </div>
          <div class="w-full sm:w-2/5 lg:w-1/3 georgia text-sm xl:pl-16">
            STAY CONNECTED.
            <br /><br />
            Address <br />
            2/F Br. Miguel Febres Cordero Building, Taft Campus, De La Salle-College of Saint
            Benilde, Taft Avenue, Manila, Philippines
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    this.$lax.addElement(this.$refs.quote)
  },
  beforeDestroy() {
    this.$lax.addElement(this.$refs.quote)
  },
}
</script>

<style scoped lang="scss">
.footer {
  .quote {
    background-image: url(../../assets/images/SOG_WEBSITE_FOOTER.png);
  }
  .end {
    font-family: 'Georgia', serif;
    font-weight: bold;
    width: 680px;
    top: 75px;
  }
  .fot {
    background-image: url(../../assets/images/footer-bg.png);
  }
}

@media (max-width: 639px) {
  .footer {
    .elephant {
      font-size: 18vw;
    }
    .logo {
      width: 240px;
    }
  }
}
</style>
