<template>
  <span>
    <span v-if="!data.plus" class="morelinkman" @click="showlinkman">更多</span>
    <el-button type="primary" icon="el-icon-check" size="mini" circle v-if="data.plus" @click="SaveTr"></el-button>
    <el-button type="info" icon="el-icon-minus" size="mini" circle v-if="data.plus" style="margin: 5px 0 0 0" @click="deleteEmptyTr"></el-button>
  </span>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    props: ['data', 'type'],
    methods: {
      showlinkman () {
        this.$emit('openLinkman', this.data)
      },
      deletefun (e) {
        let path = e.path
        let len = path.length
        const that = this
        that.$confirm('确定要删除吗？', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          // 执行AJAX
          let data = this.data
          data.type = this.type
          this.$http.post('/test/customerVue/delteDetailProperty.jsp', data).then((res) => {
            res = res.body
            if (res.errno === 1) {
              for (let i = 0; i < len; i++) {
                let p = path[i]
                if (p.className === 'el-table__row' && p.tagName.toLowerCase() === 'tr') {
                  p.remove()
                  break
                }
              }
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            } else {
              this.$message({
                type: 'error',
                message: '删除失败，请联系管理员!'
              })
            }
          })
        }).catch(() => {})
      },
      deleteEmptyTr (e) {
        let path = e.path
        let len = path.length
        for (let i = 0; i < len; i++) {
          let p = path[i]
          if (p.className === 'el-table__row' && p.tagName.toLowerCase() === 'tr') {
            p.remove()
            break
          }
        }
      },
      SaveTr () {
        let parent = this.$parent
        while (true) {
          const classname = parent.$el.className
          if (classname.indexOf('cusDetailModel') >= 0) {
            break
          } else {
            parent = parent.$parent
          }
        }
        parent.saveTr(this.type)
      }
    }
  }
</script>
<style>
  .deleteAddButton i{
    border-radius: 50%;
    color: #fff;
    font-size: 18px;
  }
  .deleteAddButton .el-icon-check{
    background: #85ce61;
  }
</style>
