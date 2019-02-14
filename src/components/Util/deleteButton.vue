<template>
  <el-button type="danger" icon="el-icon-minus" size="mini" circle @click="deletefun"></el-button>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    props: ['data', 'type'],
    methods: {
      deletefun () {
        const that = this
        that.$confirm('确定要删除吗？', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log(this.data)
          console.log(this.type)
          that.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }
    }
  }
</script>
<style>

</style>
