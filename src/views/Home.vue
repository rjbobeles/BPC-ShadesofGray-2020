<template>
  <div class="Home">
    <TitleCard />
    <About />
    <FAQ />
    <Submit :courses="courses" v-on:submitting="$emit('submitting', $event)" />
  </div>
</template>

<script>
import { WOW } from 'wowjs'

import TitleCard from '../components/sections/TitleCard.vue'
import About from '../components/sections/About.vue'
import FAQ from '../components/sections/FAQ.vue'
import Submit from '../components/sections/Submit.vue'

export default {
  name: 'Home',
  props: {
    courses: {
      default: null,
      type: Array,
    },
    closeTime: {
      default: 'Nan',
      type: String,
    },
    openTime: {
      default: 'NaN',
      type: String,
    },
  },
  components: {
    TitleCard,
    About,
    FAQ,
    Submit,
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
