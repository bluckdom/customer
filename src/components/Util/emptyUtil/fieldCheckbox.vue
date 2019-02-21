<template>
    <el-checkbox :checked="propervalue == 'Y' ? true : false" @change="changeInput" :name="propertyname"></el-checkbox>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['propertyname', 'type'],
    methods: {
      changeInput (e) {
        const val = e ? 'Y' : 'N'
        this.propervalue = val
      }
    },
    created () {
      this.propervalue = this.property ? this.property : 'N'
    }
  }
</script>
<style>
</style>
