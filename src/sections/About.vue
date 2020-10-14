<template>
  <div class="about bg-white w-screen">
    <div class="container mx-auto h-full flex flex-col justify-center items-center pt-16">
      <img src="../assets/images/decor.png" class="decor" />
      <p class="text-smoke w-4/5 md:w-2/3 lg:w-1/2 mt-12">
        <span class="first-letter">I</span>
        n this year’s Shades of Gray, the official literary folio of the students of De La
        Salle-College of Saint Benilde, we’re inviting you to finish sketching portraits that have
        never been told; might it be because it ended abruptly or have yet to come. Share with us
        what lived before it suddenly collapsed, how it reached its peak only to end, and how you
        want it to have continued.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
.about {
  height: 90vh;
  max-height: 768px;
  .decor {
    width: 150px;
  }
  .first-letter {
    float: left;
    font-size: 75px;
    line-height: 60px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-weight: bold;
  }
}
</style>
