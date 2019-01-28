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
      <div class="cantainer">
        <el-table style="width: 100%;"
         :data="customerdata">
        <el-table-column label="编号" prop="code" width="">
        </el-table-column>
        <el-table-column label="客户名称" prop="name" width="">
        </el-table-column>
        <el-table-column label="国家" prop="pk_country" width="">
        </el-table-column>
        <el-table-column label="地区" prop="pk_areacl" width="">
        </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next, jumper"
          :total="customerdata.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import searchTxt from '../Util/customername'
export default {
  data () {
    return {
      customerdata: [],
      currentPage: 1,
      pagesize: 10
    }
  },
  methods: {
    fatherMethod (cusname, saleorg, psndoc) {
      this.$http.get('/api/customer').then(res => {
        res = res.body.customer
        this.customerdata = res
      })
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
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
  .customerList{
    position: absolute;
    top:80px;
    left:20px;
    right:20px;
    bottom:20px;
    overflow-y: scroll;
  }

</style>
