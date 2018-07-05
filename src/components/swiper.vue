<template>
  <h1>hello world</h1>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal' // vertical
    }
  }
}
</script>

<style scoped></style>
