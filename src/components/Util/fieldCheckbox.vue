<template>
    <el-checkbox :checked="propervalue == 'Y' ? true : false" @change="changeInput" :disabled="readonly"></el-checkbox>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['property', 'propertyname', 'type', 'data', 'readonly'],
    methods: {
      changeInput (e) {
        const val = e ? 'Y' : 'N'
        this.propervalue = val
        if (this.data && !this.data.plus) {
          this.saveCheck(val, this.type)
        }
        if (!this.data) {
          this.saveCheck(val, this.type)
        }
      },
      saveCheck (val, type) {
        let data = {
          customer_pk: this.data.pk_customer,
          value: val,
          name: this.propertyname,
          type: this.type
        }
        if (this.data.pk_custcreditctl) {
          data.pk_custcreditctl = this.data.pk_custcreditctl
        }
        this.$http.post('/test/customerVue/editProperty.jsp', data).then((res) => {
          res = res.body
          if (res.errno === 1) {
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
            this.propervalue = val
          }
        })
      }
    },
    created () {
      this.propervalue = this.property ? this.property : 'N'
    }
  }
</script>
<style>
</style>
