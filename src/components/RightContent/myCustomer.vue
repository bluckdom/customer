<template>
  <div class="myCustomerWrapper">
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
export default {
  data () {
    return {
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
    'customerList': customerList
  }
}
</script>
<style>
  .myCustomerWrapper{
    padding: 20px;
  }
  .searchbx{
    float: left;
    max-width: 350px;
    margin-left: 20px;
  }
  .customerList{
    position: absolute;
    top:80px;
    left:20px;
    right:20px;
    bottom:20px;
    overflow-y: scroll;
  }

</style>
