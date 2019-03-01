<template>
  <div class="filedinput">
    <input class="customerinput" v-if="!istextares" v-model="propervalue" @change="changeInput" :disabled="readonly"/>
    <el-input
      type="textarea"
      :autosize="{ minRows: 3}"
      class="mt5"
      resize="none"
      placeholder="请输入内容"
      v-model="propervalue"
      v-if="istextares"
      @change="changeInput"></el-input>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['property', 'propertyname', 'type', 'data', 'istextares', 'readonly'],
    methods: {
      changeInput (e) {
        let value = ''
        if (this.istextares) {
          value = e
        } else {
          e = e.target || e.srcElement
          value = e.value
        }
        let type = !this.type ? 'base' : this.type
        let data = {
          customer_pk: this.data.pk_customer,
          value: value,
          name: this.propertyname,
          type: type
        }
        if (type === 'linkman') {
          data.pk_linkman = this.data.pk_linkman
        }
        if (!this.data.plus) {
          this.$http.post('/test/customerVue/editProperty.jsp', data).then((res) => {
            res = res.body
            if (res.errno === 1) {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
            }
          })
        }
      }
    },
    created () {
      this.propervalue = this.property ? this.property : ''
    }
  }
</script>
<style>
</style>
