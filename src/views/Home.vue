<template>
  <div class="Home">
    <TitleCard />
    <About />
    <FAQ />
  </div>
</template>

<script>
import TitleCard from '../sections/TitleCard.vue'
import About from '../sections/About.vue'
import FAQ from '../sections/FAQ.vue'

export default {
  name: 'Home',
  props: {
    courses: {
      default: null,
      type: Array,
    },
  },
  components: {
    TitleCard,
    About,
    FAQ,
  },
}
</script>
