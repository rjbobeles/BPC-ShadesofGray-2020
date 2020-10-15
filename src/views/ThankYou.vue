<template>
  <div class="thankyou">Thank You</div>
</template>

<script>
export default {
  name: 'Thanks',
  mounted() {
    this.$emit('submitting', false)
  },
}
</script>
