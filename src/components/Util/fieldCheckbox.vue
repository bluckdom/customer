<template>
    <el-checkbox :checked="propervalue == 'Y' ? true : false" @change="changeInput"></el-checkbox>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['property', 'propertyname', 'type'],
    methods: {
      changeInput (e) {
        const val = e ? 'Y' : 'N'
        this.$message({
          type: 'success',
          message: this.propertyname + '修改成功!' + this.type
        });
      }
    },
    created () {
      this.propervalue = this.property
    }
  }
</script>
<style>
</style>
