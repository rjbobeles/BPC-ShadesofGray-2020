<template>
  <div class="container">
    <Form :courses="courses" />
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
