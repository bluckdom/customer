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
          width="300px"
          class="add-event-dialog"
          :visible.sync="addEventdialogVisible"
          @open="getOrgs"
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
          width="300px"
          class="add-event-dialog"
          :visible.sync="PsndocdialogVisible"
          @open="getPsndoc"
          size="tiny">
          <div class="resultList">
            <div class="table">
              <el-table
                :data="psndocdata"
                @row-click="hadlePsndoc"
                style="width: 100%">
                <el-table-column
                  prop="pk"
                  label="主键">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-dialog>
      </div>
      <!--业务员-->
      <div class="input-group">
        <span class="searchTxt">业务员12312:</span>
        <span class="checkedTxt">{{Psndoccn}}<i class="deleteSalse dn glyphicon glyphicon-remove" @click="deletePsndoc()" v-if="Psndoc.length > 0"></i> </span>
        <span class="glyphicon glyphicon-search" @click="PsndocdialogVisible=true"></span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'searchTxt',
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
    },
    hadleRowClick (a) {
      this.saleorg = a.pk
      this.saleorgcn = a.name
      this.addEventdialogVisible = !this.addEventdialogVisible
    },
    getOrgs () {
      this.salesOrgs = [
        {
          name: '销售组织1',
          pk: '1111'
        },
        {
          name: '销售组织2',
          pk: '22222'
        },
        {
          name: '销售组织3',
          pk: '333333'
        },
        {
          name: '销售组织4',
          pk: '444444'
        },
        {
          name: '销售组织5',
          pk: '555555'
        }
      ]
    },
    deletePsndoc () {
      this.Psndoccn = ''
      this.Psndoc = ''
    },
    hadlePsndoc (a) {
      this.Psndoc = a.pk
      this.Psndoccn = a.name
      this.PsndocdialogVisible = !this.PsndocdialogVisible
    },
    getPsndoc () {
      this.psndocdata = [
        {
          name: '姓名1',
          pk: '1111'
        },
        {
          name: '姓名2',
          pk: '22222'
        },
        {
          name: '姓名3',
          pk: '333333'
        },
        {
          name: '姓名4',
          pk: '444444'
        },
        {
          name: '姓名5',
          pk: '555555'
        }
      ]
    }
  }
}
</script>
<style>
  .el-dialog__header,.el-dialog__body{
    border-bottom: 1px solid #ddd;
  }
  .el-pagination{
    text-align: center;
  }
  .deleteSalse{font-size: 12px;
    cursor: pointer;
    position: absolute;
    right:-5px;
    top:15px;
  }
  .searchTxt{
    font-size: 14px;
    line-height: 34px;
  }
  .glyphicon-search{
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
  }
  .checkedTxt{font-size: 14px;
    line-height: 34px;
    padding:10px 15px 10px 10px;
    position: relative;
  }
  .el-dialog__header,.el-dialog__body{
    border-bottom: 1px solid #ddd;
  }
  .el-pagination{
    text-align: center;
  }.deleteSalse{font-size: 12px;
     cursor: pointer;
     position: absolute;
     right:-5px;
     top:15px;
   }
  .searchTxt{
    font-size: 14px;
    line-height: 34px;
  }
  .glyphicon-search{
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
  }
  .checkedTxt{font-size: 14px;
    line-height: 34px;
    padding:10px 15px 10px 10px;
    position: relative;
  }
  .checkedTxt:hover  .deleteSalse{
    display: block;
  }

  .checkedTxt:hover,
  .glyphicon-search:hover{
    color: #428bca;
  }
  .el-dialog .el-table__header-wrapper{
    display: none;
  }
</style>
