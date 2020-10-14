<template>
  <div class="mb-16 sm:mb-24 md:mb-0 faq-group__item">
    <h6 class="font-bold uppercase text-smoke text-lg mb-1">FAQ {{ number }}</h6>
    <h4 class="text-smoke mb-8">{{ question }}</h4>
    <p class="text-smoke text-sm" v-html="answer"></p>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    number: {
      type: String,
      default: null,
    },
    question: {
      type: String,
      default: null,
    },
    answer: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.faq-group__item {
  h4 {
    line-height: 3rem;
    font-family: 'Georgia', serif;
    font-weight: bold;
    font-size: 2.5rem;
  }
}

@media (max-width: 1279px) {
  .faq-group__item {
    h4 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
}

@media (max-width: 639px) {
  .faq-group__item {
    h4 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
}
</style>
