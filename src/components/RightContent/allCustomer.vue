<template>
  <div class="myCustomerWrapper">
    <div class="createcut" @click="centerDialogVisible = !centerDialogVisible">
      <i class="el-icon-plus"></i>
    </div>
    <el-dialog title="客户添加" :visible.sync="centerDialogVisible" width="80%" center>
      <newCustomer :pk_org = "saleorg"> </newCustomer>
    </el-dialog>
    <div class="search_info oh">
      <div class="col-xs-12">
        <div class="row">
          <searchTxt ref="searchpro"></searchTxt>
        </div>
      </div>
    </div>
    <div class="customerList">
      <customerList :customerdata = "customerdata" :currentPage = "currentPage" :Listloading = "Listloading" :count = "count" ref="customerList"></customerList>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import searchTxt from '../Util/customername'
  import customerList from '../Util/customerList'
  import newCustomer from './newCustomer'
export default {
  data () {
    return {
      centerDialogVisible: false,
      customerdata: [],
      cusname: '',
      saleorg: '',
      psndoc: '',
      currentPage: 1,
      Listloading: false,
      count: 0
    }
  },
  created () {
    this.search(1)
  },
  methods: {
    fatherMethod (cusname, saleorg, psndoc) {
      this.cusname = cusname;
      this.saleorg = saleorg;
      this.psndoc = psndoc;
      this.search(1);
    },
    search (page) {
      this.Listloading = true
      this.currentPage = page
      // /test/customerVue/customerList.jsp
      // http://localhost/List.json
      this.$http.get('/test/customerVue/customerList.jsp?page=' + page + '&name=' + this.cusname + '&org=' + this.saleorg + '&psndoc=' + this.psndoc).then(res => {
        const that = this
        this.count = res.body.num
        res = res.body.cust
        this.customerdata = res
        this.Listloading = false
      })
    }
  },
  components: {
    'searchTxt': searchTxt,
    'customerList': customerList,
    'newCustomer': newCustomer
  }
}
</script>
<style>
</style>
