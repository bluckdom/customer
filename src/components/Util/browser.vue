<template>
  <div class="controls">
    <div class="probox" v-show="!showEdit">
      <div class="prowrapper">
        <span>{{propervalue}}</span>
        <i class="el-icon-close deletepro dn" @click="deletepro" v-if="propervalue && propervalue.length > 0"></i>
      </div>
      <i class="el-icon-edit dn" @click="openBrowser"></i>
    </div>
    <div class="proecidtbrower" v-show="showEdit">
      <el-tooltip content="请选择相应类别" placement="right">
        <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
        @blur="closeBrowser"
        ref="browserinput"
      >
      </el-autocomplete>
      </el-tooltip>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        showdelete: false,
        propervalue: '',
        showEdit: false,
        restaurants: [],
        state1: ''
      }
    },
    props: ['property', 'propertyname', 'type'],
    methods: {
      deletepro () {
        const that = this
        that.$confirm('确定要删除吗？', '确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log('删除执行AJAX')
          that.$message({
            type: 'success',
            message: '删除成功!'
          });
          that.propervalue = ''
        })
      },
      querySearch (queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        console.log(results)
        cb(results);
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0);
        };
      },
      handleSelect (item) {
        this.showEdit = false
        this.state1 = item.value
        this.propervalue = item.value
        this.$message({
          type: 'success',
          message: '修改成功!' + item.pk_key + this.type
        });
      },
      openBrowser () {
        this.$http.get('/test/customerVue/getBaseproperty.jsp?type=' + this.type + '&name=' + this.propertyname).then((res) => {
          res = res.body
          this.restaurants = res
          this.showEdit = true
          this.state1 = ''
          this.$nextTick(function () {
            this.$refs.browserinput.focus();
          });
        })
      },
      closeBrowser (e) {
        e = e.target || e.srcElement
      }
    },
    created () {
      this.propervalue = this.property
    }
  }
</script>
<style>

  .probox{
    display: inline-block;
    line-height: normal;
    position: relative;
  }
  .prowrapper{
    display: inline-block;
    position: relative;
    padding-right: 20px;
  }
  .prowrapper .deletepro{
    display: none;
    position: absolute;
    right: 0;
    top:4px
  }
  .prowrapper:hover .deletepro{
    display: inline-block;
  }
  .prowrapper:hover{
    color:#108ee9;
    cursor: pointer;
  }
  .controls:hover .el-icon-edit {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 102%;
  }
  .controls .el-icon-edit:hover{
    border-color:#108ee9 ;
    color:#108ee9 ;
  }
  .controls .el-icon-edit{
    display: none;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
    border:1px solid #ddd;
    color: #ddd;
    cursor: pointer;
  }
  .name{
    line-height: 20px;
  }
  .pk_key{
    font-size: 12px;
    color: #999;
  }
  body .el-autocomplete-suggestion li{
    line-height: 30px;
    border-bottom: 1px dashed #ddd;
  }
  .proecidtbrower .el-input__inner{
    height: 30px;
    line-height: 30px;
  }
</style>
