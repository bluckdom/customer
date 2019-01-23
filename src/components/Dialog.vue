<template>

</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: Number,
      required: true
    },
    addEventdialogVisible: {
      type: Blooean,
    }
  }
}
</script>

<style scoped>

</style>
