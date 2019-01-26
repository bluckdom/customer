<template>
  <div class="myCustomerWrapper">
    <div class="search_info oh">
      <div class="col-xs-12">
        <div class="row">
          <searchTxt></searchTxt>
          <div class="startsearch searchbx">
            <el-button type="primary" round>搜索</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="customerList mt30">
      显示客户列表
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import searchTxt from '../Util/customername'
export default {
  data () {
    return {
    }
  },
  components: {
    'searchTxt': searchTxt
  }
}
</script>
<style>
  .myCustomerWrapper{
    padding: 20px;
  }
  .searchbx{
    float: left;
    max-width: 250px;
    margin-left: 20px;
  }

</style>
