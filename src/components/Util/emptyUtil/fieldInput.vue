<template>
  <div class="filedinput">
    <input class="customerinput" v-if="!istextares" v-model="propervalue" :name="propertyname"/>
    <el-input
      type="textarea"
      autosize
      class="mt5"
      placeholder="请输入内容"
      v-model="propervalue"
      v-if="istextares"
      :name="propertyname"></el-input>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: ''
      }
    },
    props: ['propertyname', 'type', 'istextares'],
    created () {
      this.propervalue = ''
    }
  }
</script>
<style>

</style>
