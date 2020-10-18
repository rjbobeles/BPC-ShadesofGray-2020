<template>
  <div class="submit bg-white">
    <div class="container mx-auto">
      <div class="flex w-full divider">
        <hr />
        <img src="../../assets/images/decor.png" class="decor mx-8" />
        <hr />
      </div>
      <div class="w-full flex flex-col md:flex-row justify-center items-stretch py-24 px-5 md:px-8">
        <div
          class="w-full md:w-1/5 lg:w-1/3 xl:w-2/5 flex md:justify-end items-start header h-full"
        >
          <h2 class="text-7xl georgia text-smoke font-bold rotate-90 mb-8 md:mb-0">Submit</h2>
        </div>
        <div class="w-full md:w-4/5 lg:w-2/3 xl:w-3/5">
          <div class="w-full lg:w-11/12 xl:w-3/4">
            <Form :courses="courses" v-on:submitting="$emit('submitting', $event)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '../Form.vue'

export default {
  name: 'Submit',
  props: {
    courses: {
      default: null,
      type: Array,
    },
  },
  components: {
    Form,
  },
}
</script>

<style scoped lang="scss">
.submit {
  .divider {
    padding-right: 10px;
    padding-left: 10px;
    hr {
      border-top: 1px solid rgba(185, 185, 185, 0.733);
      width: 50%;
      margin-top: 15px;
    }
    .decor {
      width: 150px;
    }
  }

  .header > h2 {
    position: relative;
    right: -50px;
    top: 90px;
    transform: rotate(90deg);
  }
}

@media (max-width: 1023px) {
  .submit {
    .header > h2 {
      right: -75px;
    }
  }
}

@media (max-width: 767px) {
  .submit {
    .header > h2 {
      transform: rotate(0);
      right: 0;
      top: 0;
    }
  }
}

@media (max-width: 639px) {
  .submit {
    .header > h2 {
      font-size: 18vw;
    }
  }
}
</style>
