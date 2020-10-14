<template>
  <div class="Home">
    <TitleCard />
    <About />
    <FAQ />
    <Submit :courses="courses" />
  </div>
</template>

<script>
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
}
</script>
