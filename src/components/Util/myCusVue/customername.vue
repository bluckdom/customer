<template>
  <div class="searchWrapper">
    <div class="searchbx">
      <el-input v-model="cusname" placeholder="客户名称"></el-input>
    </div>
    <div class="searchbx">
      <div class="dialogBox">
        <!--弹窗组件-->
        <el-dialog
          title="销售组织"
          width="400px"
          class="add-event-dialog"
          :visible.sync="addEventdialogVisible"
          size="tiny">
          <div class="resultList">
            <div class="table">
              <el-table
                :data="salesOrgs"
                @row-click="hadleRowClick"
                style="width: 100%">
                <el-table-column
                  prop="pk"
                  label="主键">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="组织">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-dialog>
      </div>
      <!--销售组织-->
      <div class="input-group">
        <span class="searchTxt">销售组织:</span>
        <span class="checkedTxt">{{saleorgcn}}<i class="deleteSalse dn glyphicon glyphicon-remove" @click="deleteSalseorg()" v-if="saleorg.length > 0"></i> </span>
        <span class="glyphicon glyphicon-search" @click="addEventdialogVisible=true"></span>
      </div>
    </div>
    <div class="startsearch searchbx">
      <el-button type="primary" round @click="startsearch">搜索</el-button>
    </div>
    <addCowork></addCowork>
  </div>
</template>
<script type="text/ecmascript-6">
import addCowork from '../addCoWork'
export default {
  name: 'searchTxt',
  created () {
    // /test/customerVue/orgs.jsp
    // http://localhost/orgs.json
    this.$http.get('/test/customerVue/orgs.jsp').then(res => {
      res = res.body
      this.salesOrgs = res
    })
  },
  components: {
    'addCowork': addCowork
  },
  data () {
    return {
      cusname: '',
      salseorgShow: false,
      saleorg: '',
      saleorgcn: '',
      addEventdialogVisible: false,
      salesOrgs: []
    }
  },
  methods: {
    deleteSalseorg () {
      this.saleorgcn = ''
      this.saleorg = ''
      this.$parent.fatherMethod(this.cusname, this.saleorg)
    },
    hadleRowClick (a) {
      this.saleorg = a.pk
      this.saleorgcn = a.name
      this.addEventdialogVisible = !this.addEventdialogVisible
      this.$parent.fatherMethod(this.cusname, this.saleorg)
    },
    startsearch () {
      this.$parent.fatherMethod(this.cusname, this.saleorg)
    }
  }
}
</script>
<style>

</style>
