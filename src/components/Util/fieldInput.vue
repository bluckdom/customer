<template>
  <div class="filedinput">
    <input class="customerinput" v-if="!type" v-model="propervalue" @change="changeInput"/>
    <el-input
      type="textarea"
      autosize
      class="mt5"
      placeholder="请输入内容"
      v-model="propervalue"
      v-if="type === 'textarea'"
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
    props: ['property', 'propertyname', 'type'],
    methods: {
      changeInput (e) {
        let value = ''
        if (!this.type) {
          e = e.target || e.srcElement
          value = e.value
        } else if (this.type === 'textarea') {
          value = e
        }
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
  .rowborder .customerinput{
    width: 100%;
    font-size: 14px;
    text-shadow: none;
    color: #000;
    border:1px solid #fff;
  }
  .customerinput{
    font-size: 16px;
    color: #999;
    text-shadow: 0 0 2px #999;
    white-space: nowrap;
    line-height: 23px;
    border:1px solid #f9f9f9;
    width: 80%;
    padding-left: 5px;
    background: none;
    border-radius: 3px;
    transition:all 0.2s ease-in-out 0s;
  }
  input:focus{
    outline: 0;
  }
  .customerinput:hover,.customerinput:focus{
    border:1px solid #ddd;
    background: #ddd;
    color: #000;
  }
  .rowborder .customerinput:hover{
    background: #fcfcfc;
  }
  .rowborder .customerinput:focus{
    border:1px solid rgba(82,168,236,0.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    background: #fff;
    outline:0;
  }
</style>
