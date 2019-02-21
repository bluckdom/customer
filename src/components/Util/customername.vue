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
    <div class="searchbx">
      <div class="dialogBox">
        <!--弹窗组件-->
        <el-dialog
          title="业务员"
          width="400px"
          class="add-event-dialog"
          :visible.sync="PsndocdialogVisible"
          size="tiny">
          <div class="resultList">
            <div class="table">
              <el-table
                :data="psndocdata"
                @row-click="hadlePsndoc"
                style="width: 100%">
                <el-table-column
                  prop="cuserid"
                  label="主键"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="user_name"
                  label="姓名"
                  width="">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-dialog>
      </div>
      <!--业务员-->
      <div class="input-group">
        <span class="searchTxt">业务员:</span>
        <span class="checkedTxt">{{Psndoccn}}<i class="deleteSalse glyphicon glyphicon-remove dn" @click="deletePsndoc()" v-if="Psndoc.length > 0"></i> </span>
        <span class="glyphicon glyphicon-search" @click="PsndocdialogVisible=true"></span>
      </div>
    </div>
    <div class="startsearch searchbx">
      <el-button type="primary" round @click="startsearch">搜索</el-button>
    </div>
    <a href="/cowork/CoworkMain.jsp?layout=1&mainid=&typeid=9&type=all&jointype=&labelid=&name=&coworkid=" target="_blank" class="customertl mt10">客户功能讨论 <i class="el-icon-question"></i></a>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'searchTxt',
  created () {
    this.$http.get('/test/customerVue/orgs.jsp').then(res => {
      res = res.body
      this.salesOrgs = res
    })
    this.$http.get('/test/customerVue/psndoc.jsp').then(res => {
      res = res.body
      this.psndocdata = res
    })
  },
  data () {
    return {
      cusname: '',
      salseorgShow: false,
      saleorg: '',
      saleorgcn: '',
      addEventdialogVisible: false,
      salesOrgs: [],
      PsndocShow: false,
      Psndoc: '',
      Psndoccn: '',
      PsndocdialogVisible: false,
      psndocdata: []
    }
  },
  methods: {
    deleteSalseorg () {
      this.saleorgcn = ''
      this.saleorg = ''
      this.$parent.fatherMethod(this.cusname, this.saleorg, this.Psndoc)
    },
    hadleRowClick (a) {
      this.saleorg = a.pk
      this.saleorgcn = a.name
      this.addEventdialogVisible = !this.addEventdialogVisible
      this.$parent.fatherMethod(this.cusname, this.saleorg, this.Psndoc)
    },
    deletePsndoc () {
      this.Psndoccn = ''
      this.Psndoc = ''
    },
    hadlePsndoc (a) {
      this.Psndoc = a.cuserid
      this.Psndoccn = a.user_name
      this.PsndocdialogVisible = !this.PsndocdialogVisible
    },
    startsearch () {
      this.$parent.fatherMethod(this.cusname, this.saleorg, this.Psndoc)
    }
  }
}
</script>
<style>

</style>
