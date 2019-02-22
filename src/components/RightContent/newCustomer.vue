<template>
  <div class='newCuswrapper'>
    <div class='mt20'>
      <el-button type='primary' round @click='saveCus'>保存</el-button>
    </div>
    <div class='oh topclose'>
      <div class='input-label'><span>客户名称：</span></div>
      <div class='inputwrapper'><filedinput propertyname='name' id='name'></filedinput></div>
    </div>
    <div class='newDetail'>
      <el-tabs value='first'>
        <el-tab-pane label='基础信息' name='first'>
          <div class='container-fluid rowborder'>
            <div class='row'>
              <div class='col-xs-12'>
                <div class='input-label'>地址：</div>
                <div class='inputwrapper'><filedinput propertyname='def2' id='def2'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>纳税识别号：</div>
                <div class='inputwrapper'><filedinput propertyname='taxpayerid' id='taxpayerid'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>联系方式：</div>
                <div class='inputwrapper'><filedinput propertyname='tel1' id='tel1'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>客户类型：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='custprop' id='custprop'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>英文名称：</div>
                <div class='inputwrapper'><filedinput propertyname='ename' id='ename'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>法人：</div>
                <div class='inputwrapper'><filedinput  propertyname='legalbody' id='legalbody'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>注册资金：</div>
                <div class='inputwrapper'><filedinput propertyname='registerfund' id='registerfund'></filedinput></div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>地区分类：</div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_areacl' id='pk_areacl'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>国家地区：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_country' id='pk_country'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>币种：</div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_currtype' id='pk_currtype'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>客户基本分类：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_custclass' id='pk_custclass'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>业务单元：</div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_financeorg' id='pk_financeorg'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>数据格式：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_format' id='pk_format'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>所属组织：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_org' id='pk_org'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'><span>时区：</span></div>
                <div class='inputwrapper'>
                  <browser type='base' propertyname='pk_timezone' id='pk_timezone'></browser>
                </div>
              </div>
              <div class='col-xs-6'>
                <div class='input-label'>WEB：</div>
                <div class='inputwrapper'><filedinput propertyname='url' id='url'></filedinput></div>
              </div>
              <div class='col-xs-12'>
                <div class='input-label'>备注：</div>
                <div class='inputwrapper'>
                  <filedinput  propertyname='memo' istextares='true' id='memo'></filedinput>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label='销售组织' name='five'>
          <el-table class='tab-panel'
                    :data='custsale'
                    id='custsale'>
            <el-table-column label='所属销售组织' width=''>
              <template slot-scope='props'>
                <browser propertyname='pk_org' type='custsale' ref='pk_org'></browser>
              </template>
            </el-table-column>
            <el-table-column label='结算财务组织' width=''>
              <template slot-scope='props'>
                <browser propertyname='pk_financeorg' type='custsale' ref='pk_financeorg'></browser>
              </template>
            </el-table-column>
            <el-table-column label='利润中心' width=''>
              <template slot-scope='props'>
                <browser  propertyname='pk_liabilitycenter' type='custsale' ref='pk_liabilitycenter'></browser>
              </template>
            </el-table-column>
            <el-table-column label='专管业务员' width=''>
              <template slot-scope='props'>
                <browser propertyname='respperson' type='custsale' ref='respperson'></browser>
              </template>
            </el-table-column>
            <el-table-column width='40' :render-header='addRowClickSale'>
              <template slot-scope='props'>
                <delete-button type='custsale' ref='button'></delete-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label='财务组织' name='second'>
          <el-table class='tab-panel'
                    :data='custfinance'
                    id='custfinance'>
            <el-table-column label='所属财务组织' width=''>
              <template slot-scope='props'>
                <browser  propertyname='pk_org' type='custfinance' ref='pk_org'></browser>
              </template>
            </el-table-column>
            <el-table-column label='默认收款协议'>
              <template slot-scope='props'>
                <browser propertyname='pk_payterm' type='custfinance' ref='pk_payterm'></browser>
              </template>
            </el-table-column>
            <el-table-column label='专管部门'>
              <template slot-scope='props'>
                <departree propertyname='pk_respdept1' type='custfinance' ref='pk_respdept1'></departree>
              </template>
            </el-table-column>
            <el-table-column width='40' :render-header='addRowClickcustfinance'>
              <template slot-scope='props'>
                <delete-button type='custfinance' ref='button'></delete-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label='信用控制' name='third'>
          <el-table class='tab-panel'
                    :data='custcreditctl'
                    id='custcreditctl'>
            <el-table-column label='所属信用控制域' width=''>
              <template slot-scope='props'>
                <browser  propertyname='pk_org' type='custcreditctl' ref='ctl_pk_org'></browser>
              </template>
            </el-table-column>
            <el-table-column label='信用等级' width=''>
              <template slot-scope='props'>
                <browser  propertyname='creditlevel' ref='creditlevel' type='custcreditctl'></browser>
              </template>
            </el-table-column>
            <el-table-column label='免于信用额度检查' width=''>
              <template slot-scope='props'>
                <field-select propertyname='freeofcremnycheck' ref='freeofcremnycheck' type='custcreditctl'></field-select>
              </template>
            </el-table-column>
            <el-table-column label='免于帐期检查 ' prop='freeofacclmtcheck' width=''>
              <template slot-scope='props'>
                <field-select propertyname='freeofacclmtcheck' ref='freeofacclmtcheck' type='custcreditctl'></field-select>
              </template>
            </el-table-column>
            <el-table-column  :render-header='addRowClickCredit' width='40'>
              <template slot-scope='props'>
                <delete-button type='custcreditctl'></delete-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label='联系人' name='fourth'>
          <el-table class='tab-panel'
                    :data='linkman'
                    id='linkman'>
            <el-table-column label='名称' width='180'>
              <template slot-scope='props'>
                <filedinput  propertyname='name' ref='name' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='手机' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='cell' ref='cell' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='电话' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='phone' ref='phone' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='传真' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='fax' ref='fax' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='邮件' width=''>
              <template slot-scope='props'>
                <filedinput propertyname='email' ref='email' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column label='职位' width='180'>
              <template slot-scope='props'>
                <filedinput propertyname='vjob' ref='vjob' type='linkman'></filedinput>
              </template>
            </el-table-column>
            <el-table-column  :render-header='addRowClickLinkman' width='40'>
              <template slot-scope='props'>
                <delete-button type='linkman'></delete-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import browser from '../Util/emptyUtil/browser'
  import filedinput from '../Util/emptyUtil/fieldInput'
  import fieldCheckbox from '../Util/emptyUtil/fieldCheckbox'
  import deleteButton from '../Util/emptyUtil/deleteButton'
  import departree from '../Util/emptyUtil/tree'
  import 'static/css/newcus.css'
  import $ from 'jquery'
export default {
    data () {
      return {
        custfinance: [],
        linkman: [],
        custcreditctl: [],
        custsale: []
      }
    },
  name: 'allCustomer',
  methods: {
    saveCus () {
      const that = this
      if (this.G('name') === '' || this.G('custprop') === '' || this.G('pk_country') === '' || this.G('pk_custclass') === '' || this.G('pk_format') === '' || this.G('pk_org') === '' || this.G('pk_timezone') === '') {
        that.$message({
          type: 'error',
          message: '红色标题为必填项!'
        })
        return false
      }
      let data = {
        name: this.G('name'),
        def2: this.G('def2'),
        taxpayerid: this.G('taxpayerid'),
        tel1: this.G('tel1'),
        custprop: this.G('custprop'),
        ename: this.G('ename'),
        legalbody: this.G('legalbody'),
        registerfund: this.G('registerfund'),
        pk_areacl: this.G('pk_areacl'),
        pk_country: this.G('pk_country'),
        pk_currtype: this.G('pk_currtype'),
        pk_custclass: this.G('pk_custclass'),
        pk_financeorg: this.G('pk_financeorg'),
        pk_format: this.G('pk_format'),
        pk_org: this.G('pk_org'),
        pk_timezone: this.G('pk_timezone'),
        url: this.G('url'),
        memo: $('#memo').find('textarea').val()
      }
      let custsale = []
      let custsaleBoolean = false
      $('#custsale tbody tr').each(function () {
        let $t = $(this)
        let $td = $t.children('td')
        let pkorg = $td.eq(0).find('input').val()
        let pkfinanceorg = $td.eq(1).find('input').val()
        let pkliabilitycenter = $td.eq(2).find('input').val()
        let respperson = $td.eq(3).find('input').val()
        if (pkorg === '') {
          custsaleBoolean = true
          return false
        }
        custsale.push({
          pk_org: pkorg,
          pk_financeorg: pkfinanceorg,
          pk_liabilitycenter: pkliabilitycenter,
          respperson: respperson
        })
      })
      if (custsaleBoolean) {
        that.$message({
          type: 'error',
          message: '请选择"销售组织"选项卡内的所属销售组织!'
        })
        return false
      }
      data.custsale = custsale

      let custfinance = []
      let custfinanceBoolean = false
      $('#custfinance tbody tr').each(function () {
        let $t = $(this)
        let $td = $t.children('td')
        let pkorg = $td.eq(0).find('input').val()
        let pkpayterm = $td.eq(1).find('input').val()
        let pkrespdept1 = $td.eq(2).find('input').val()
        if (pkorg === '') {
          custfinanceBoolean = true
          return false
        }
        custfinance.push({
          pk_org: pkorg,
          pk_payterm: pkpayterm,
          pk_respdept1: pkrespdept1
        })
      })
      if (custfinanceBoolean) {
        that.$message({
          type: 'error',
          message: '请选择"财务组织"选项卡内的所属财务组织!'
        })
        return false
      }
      data.custfinance = custfinance

      let custcreditctl = []
      let custcreditctlBoolean = false
      $('#custcreditctl tbody tr').each(function () {
        let $t = $(this)
        let $td = $t.children('td')
        let ctlpkorg = $td.eq(0).find('input').val()
        let creditlevel = $td.eq(1).find('input').val()
        let freeofcremnycheck = $td.eq(2).find('input')[0].checked ? 'Y' : 'N'
        let freeofacclmtcheck = $td.eq(3).find('input')[0].checked ? 'Y' : 'N'
        if (ctlpkorg === '') {
          custcreditctlBoolean = true
          return false
        }
        custcreditctl.push({
          pk_org: ctlpkorg,
          creditlevel: creditlevel,
          freeofcremnycheck: freeofcremnycheck,
          freeofacclmtcheck: freeofacclmtcheck
        })
      })
      if (custcreditctlBoolean) {
        that.$message({
          type: 'error',
          message: '请选择"信用控制"选项卡内的所属信用控制域!'
        })
        return false
      }
      data.custcreditctl = custcreditctl

      // 联系人
      let linkman = []
      let linkmanBoolean = false
      $('#linkman tbody tr').each(function () {
        let $t = $(this)
        let $td = $t.children('td')
        let name = $td.eq(0).find('input').val()
        let cell = $td.eq(1).find('input').val()
        let phone = $td.eq(2).find('input').val()
        let fax = $td.eq(3).find('input').val()
        let email = $td.eq(4).find('input').val()
        let vjob = $td.eq(5).find('input').val()

        if (name === '') {
          linkmanBoolean = true
          return false
        }
        linkman.push({
          name: name,
          cell: cell,
          phone: phone,
          fax: fax,
          email: email,
          vjob: vjob
        })
      })
      if (linkmanBoolean) {
        that.$message({
          type: 'error',
          message: '请填写"联系人"选项卡内的姓名!'
        })
        return false
      }
      data.linkman = linkman
      this.$http.post('/test/customerVue/addCus.jsp', data).then((res) => {
        res = res.body
        const errno = res.errno
        let type = 'error'
        let txt = res.txt
        if (errno === '1') {
          type = 'success'
          txt += 'pk:' + res.pk
        }
        that.$message({
          type: type,
          message: txt
        })
        if (errno === '1') {
          window.location.reload()
        }
      }).catch(function () {
        that.$message({
          type: 'error',
          message: '系统错误,请联系管理员处理!'
        })
      })
    },
    G (id) {
     return $('#' + id).find('input').val()
    },
    addRowClickcustfinance (h, {column}) {
      const that = this
      return h('el-button', {
        class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
        style: 'color:#fff;',
        on: {
          click () {
            that.custfinance.push({})
          }
        }
      })
    },
    addRowClickSale (h, {column}) {
      const that = this
      return h('el-button', {
        class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
        style: 'color:#fff;',
        on: {
          click () {
            that.custsale.push({})
          }
        }
      })
    },
    addRowClickLinkman (h, {column}) {
      const that = this
      return h('el-button', {
        class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
        style: 'color:#fff;',
        on: {
          click () {
            that.linkman.push({})
          }
        }
      })
    },
    addRowClickCredit (h, {column}) {
      const that = this
      return h('el-button', {
        class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
        style: 'color:#fff;',
        on: {
          click () {
            that.custcreditctl.push({})
          }
        }
      })
    }
  },
  components: {
    'browser': browser,
    'filedinput': filedinput,
    'fieldSelect': fieldCheckbox,
    'deleteButton': deleteButton,
    'departree': departree
  }
}
</script>
<style>

</style>
