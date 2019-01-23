<template>
  <div class="myCustomerWrapper">
    <div class="search_info oh">
      <div class="col-xs-12">
        <div class="row">
          <searchTxt></searchTxt>
          <orgs></orgs>
          <psndoc></psndoc>
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
import orgs from '../Util/orgs'
import psndoc from '../Util/psndoc'
export default {
  data () {
    return {
    }
  },
  components: {
    'searchTxt': searchTxt,
    'orgs': orgs,
    'psndoc': psndoc
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
