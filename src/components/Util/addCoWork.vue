<template>
  <div class="addwork">
    <el-dialog title="新建协作" :visible.sync="addCowork" width="80%" height="800">
      <iframe id="addiframe" :src="addwork" frameborder="0" width="100%" height="560"></iframe>
    </el-dialog>
    <div class="customertl mt10">
      <a href="#" @click="openaddwork">新增协作</a>
      |
      <a href="/cowork/CoworkMain.jsp?layout=1&mainid=&typeid=9&type=all&jointype=&labelid=&name=&coworkid=" target="_blank">客户功能讨论 <i class="el-icon-question"></i></a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'addCoWork',
    data () {
      return {
        addCowork: false,
        addwork: '/cowork/AddCoWork_other.jsp?from=other&typeid=9'
      }
    },
    methods: {
      openaddwork () {
        this.addCowork = true
        $('#addiframe').attr('src', this.addwork)
      }
    }
  }
</script>
