<template>
  <div class="Home">
    <TitleCard />
    <About />
    <FAQ />
  </div>
</template>

<script>
import { WOW } from 'wowjs'

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
  mounted() {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    })
    this.$nextTick(() => {
      wow.init()
    })
  },
}
</script>
