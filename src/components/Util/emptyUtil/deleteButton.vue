<template>
  <span>
    <el-button type="danger" icon="el-icon-minus" size="mini" circle @click="deletefun" :disabled="readonly"></el-button>
  </span>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    props: ['data', 'type', 'readonly'],
    methods: {
      deletefun (e) {
        let path = e.path
        let len = path.length
        for (let i = 0; i < len; i++) {
          let p = path[i]
          if (p.className === 'el-table__row' && p.tagName.toLowerCase() === 'tr') {
            p.remove()
            break
          }
        }
      }
    }
  }
</script>
<style>
</style>
