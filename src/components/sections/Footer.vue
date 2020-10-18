<template>
  <div class="footer bg-parchment">
    <div class="container mx-auto px-5">
      <div class="w-full flex justify-center items-center text-center">
        <div class="end pt-48 pb-24 text-smoke text-xl">
          This is the page of the end and the end of the page, the epilogue. The end awaits for you
          and you await for the end.
        </div>
      </div>
      <div class="w-full flex flex-col sm:flex-row py-24 flex-wrap xl:flex-no-wrap justify-around">
        <div class="w-full xl:w-1/3 pb-8 sm:pb-16 xl:pb-0 flex sm:justify-center xl:justify-start">
          <div>
            <img src="../../assets/images/nameplates/SOG_Logo_black.png" class="logo" />
            <h1 class="elephant text-8xl lg:text-7xl strip mb-5 leading-none normal-case">
              Epilogue
            </h1>
          </div>
        </div>
        <div class="w-full sm:w-2/5 lg:w-1/3 georgia text-sm text-smoke pb-12 sm:pb-0">
          Shades of Gray is the official literary folio of the students of De La Salle-College of
          Saint Benilde. In this year’s Shades of Gray, we’re inviting you to share untold stories,
          might it be because it ended abruptly or have yet to come, through literature.
          <br /><br /><br />
          The Benildean Press Corps © 2020. All rights reserved.
        </div>
        <div class="w-full sm:w-2/5 lg:w-1/3 georgia text-sm text-smoke xl:pl-16">
          STAY CONNECTED.
          <br /><br />
          Address <br />
          2/F Br. Miguel Febres Cordero Building, Taft Campus, De La Salle-College of Saint Benilde,
          Taft Avenue, Manila, Philippines
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
.footer {
  .end {
    font-family: 'Georgia', serif;
    font-weight: bold;
    width: 680px;
  }
  .logo {
    width: 150px;
    position: relative;
    left: -10px;
  }
}

@media (max-width: 639px) {
  .footer {
    .elephant {
      font-size: 18vw;
    }
  }
}
</style>
