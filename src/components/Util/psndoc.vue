<template>
  <div class="searchbx">
    <div class="dialogBox">
      <!--弹窗组件-->
      <el-dialog
        title="业务员"
        width="300px"
        class="add-event-dialog"
        :visible.sync="addEventdialogVisible"
        @open="getPsndoc"
        size="tiny">
        <div class="resultList">
          <div class="table">
            <el-table
              :data="psndocdata"
              @row-click="hadleRowClick"
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
      <span class="searchTxt">业务员:</span>
      <span class="checkedTxt">{{Psndoccn}}<i class="deleteSalse dn glyphicon glyphicon-remove" @click="deletePsndoc()" v-if="Psndoc.length > 0"></i> </span>
      <span class="glyphicon glyphicon-search" @click="addEventdialogVisible=true"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'orgs',
  data () {
    return {
      PsndocShow: false,
      Psndoc: '',
      Psndoccn: '',
      addEventdialogVisible: false,
      psndocdata: []
    }
  },
  methods: {
    deletePsndoc () {
      this.Psndoccn = ''
      this.Psndoc = ''
    },
    hadleRowClick (a) {
      this.Psndoc = a.pk
      this.Psndoccn = a.name
      this.addEventdialogVisible = !this.addEventdialogVisible
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

</style>
