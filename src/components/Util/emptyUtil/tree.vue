<template>
  <div class="controls">
    <div class="probox">
      <div class="prowrapper">
        <span>{{propernamecn}}</span>
        <el-input v-model="propervalue" type="hidden" class="dn"></el-input>
        <i class="el-icon-close deletepro dn" @click="deletepro"></i>
      </div>
      <i class="el-icon-edit" @click="dialogVisible = true"></i>
    </div>
    <el-dialog
      title="选择部门"
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body="modal">
      <div class="departlist">
        <el-tree
          :data="data2"
          name="propertyname"
          show-checkbox
          node-key="id"
          default-expand-all
          :check-strictly="true"
          :default-checked-keys="[this.propervalue]"
          @check-change="checkChange"
          @node-click="nodeClick"
          ref="departlist"
          :props="defaultProps">
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectDepart">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        propervalue: '',
        propernamecn: '',
        tempvalue: '',
        dialogVisible: false,
        modal: false,
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    props: ['propertyname', 'type'],
    created () {
      this.propervalue = this.property ? this.property : '' // 主键
      this.propernamecn = this.propername ? this.propername : '' // 中文
      // http://localhost/depart.json
      // /test/customerVue/getTreeDepartment.jsp
      this.$http.get('http://localhost/depart.json').then((res) => {
        res = res.body
        this.data2 = res
      })
    },
    methods: {
      deletepro () {
        const that = this
        this.propervalue = ''
        this.propernamecn = ''
        this.$refs.departlist.setCheckedKeys([])
      },
      selectDepart () {
        this.dialogVisible = false
        var tree = this.$refs.departlist.getCheckedNodes()
        if (tree.length > 0 && this.propervalue !== tree[0].id) {
          this.propervalue = tree[0].id
          this.propernamecn = tree[0].label
        }
      },
      checkChange (item, node, self) {
        if (node === true) {
          this.$refs.departlist.setCheckedKeys([item.id])
          this.tempvalue = item.id
        }
      },
      nodeClick (item, node, self) {
        if (!(item.children && item.children.length > 0)) {
          this.$refs.departlist.setCheckedKeys([item.id])
        }
      }
    }
  }
</script>
<style>

</style>
