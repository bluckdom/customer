<template>
    <input class="customerinput linkinput" v-model="propervalue" @change="changeInput"/>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['property', 'propertyname', 'type', 'prikey'],
    methods: {
      changeInput (e) {
        let data = {}
        if (this.type === 'linkman') {
          data = {
            name: this.propertyname,
            pk_linkman: this.prikey,
            type: this.type,
            value: this.propervalue
          }
        }
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
    },
    created () {
      this.propervalue = this.property ? this.property : ''
    },
    watch: {
      property () {
        this.propervalue = this.property ? this.property : ''
      }
    }
  }
</script>
<style>
</style>
