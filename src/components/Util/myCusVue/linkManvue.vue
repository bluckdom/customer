<template>
  <div class="linkman mt10" v-if="linkman">
    <div class="topcusname"><filedinput :property="linkman.name" propertyname="name" type="linkman" :prikey="linkman.pk_linkman"></filedinput></div>
    <div class="mt20 linkmanbase oh">
      <div class="col-xs-6 mt5">
        <label class="labelti">手机</label>
        <filedinput :property="linkman.cell" propertyname="cell" type="linkman" :prikey="linkman.pk_linkman"></filedinput>
      </div>
      <div class="col-xs-6 mt5">
        <label class="labelti">电话</label>
        <filedinput :property="linkman.phone" propertyname="phone" type="linkman" :prikey="linkman.pk_linkman"></filedinput>
      </div>
      <div class="col-xs-6 mt5">
        <label class="labelti">传真</label>
        <filedinput :property="linkman.fax" propertyname="fax" type="linkman" :prikey="linkman.pk_linkman"></filedinput>
      </div>
      <div class="col-xs-6 mt5">
        <label class="labelti">邮件</label>
        <filedinput :property="linkman.mail" propertyname="mail" type="linkman" :prikey="linkman.pk_linkman"></filedinput>
      </div>
      <div class="col-xs-6 mt5">
        <label class="labelti">职位</label>
        <filedinput :property="linkman.vjob" propertyname="vjob" type="linkman" :prikey="linkman.pk_linkman"></filedinput>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import filedinput from './fieldInput'
  export default {
    data () {
      return {
        linkman: {},
        contact: [],
        contactcontent: '',
        nextdate: ''
      }
    },
    components: {
      'filedinput': filedinput
    },
    props: ['pklinkman'],
    methods: {
      getlinkinfo () {
        // /test/customerVue/linkman/getLinman.jsp
        // http://localhost/linkman.json
        this.$http.get('/test/customerVue/linkman/getLinman.jsp?pk=' + this.pklinkman).then((res) => {
          res = res.body
          if (res.errno === 1) {
            this.linkman = res.linkman
          } else {
            this.$message({
              type: 'error',
              message: res.txt
            })
          }
        })
      }
    },
    created () {
      this.getlinkinfo()
    },
    watch: {
      pklinkman () {
        this.getlinkinfo()
      }
    }
  }
</script>
<style>

</style>
