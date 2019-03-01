<template>
  <div class="filedinput">
    <input class="customerinput" v-if="!istextares" :value="defaultValue" @change="chageInput" :name="propertyname" :disabled="readonly"/>
    <el-input
      type="textarea"
      autosize
      class="mt5"
      placeholder="请输入内容"
      :value="defaultValue"
      v-if="istextares"
      :name="propertyname"
      @change="chageInput"
      readonly="readonly"></el-input>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    props: ['propertyname', 'type', 'istextares', 'defaultValue', 'readonly'],
    methods: {
      chageInput (e) {
        let value = ''
        if (this.istextares) {
          value = e
        } else {
          e = e.srcElement || e.target
          value = e.value
        }
        this.$emit('listenInputChange', this.type, this.propertyname, value)
      }
    }
  }
</script>
<style>

</style>
