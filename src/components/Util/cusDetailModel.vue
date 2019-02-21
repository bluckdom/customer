<template>
    <div class="cusDetailModel" v-loading="loading">
      <div class="oh topclose mt20" v-if="!loading">
        <i class="el-icon-circle-close-outline icon" @click="closeModel"></i>
        <div class="topcusname"><filedinput :property="customer.name" propertyname="name" :data="customer"></filedinput></div>
      </div>
      <div class="cusDetail" v-if="!loading">
        <el-tabs value="first">
          <el-tab-pane label="基础信息" name="first">
            <div class="container-fluid rowborder">
              <div class="row">
                  <div class="col-xs-12">
                    <div class="tr custlabel">地址：</div>
                    <div class="col-xs-8"><filedinput :property="customer.corpaddress" propertyname="corpaddress" :data="customer" ></filedinput></div>
                  </div>
                    <div class="col-xs-6">
                    <div class="tr custlabel">联系方式：</div>
                    <div class="col-xs-8"><filedinput :property="customer.tel1" propertyname="tel1" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">创建人：</div>
                    <div class="col-xs-8">{{customer.creatorcn}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">客户类型：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.custprop" propertyname="custprop" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">客户状态：</div>
                    <div class="col-xs-8">
                      {{customer.custstate}}
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">分布式：</div>
                    <div class="col-xs-8">{{customer.dataoriginflag}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">启用状态：</div>
                    <div class="col-xs-8">{{customer.enablestate}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">英文名称：</div>
                    <div class="col-xs-8"><filedinput :property="customer.ename" propertyname="ename" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">散户：</div>
                    <div class="col-xs-8"><field-select :property="customer.isfreecust" propertyname="isfreecust" type="base" :data="customer"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">零售店：</div>
                    <div class="col-xs-8"><field-select :property="customer.isretailstore" propertyname="isretailstore" type="base" :data="customer"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">供应商：</div>
                    <div class="col-xs-8"><field-select :property="customer.issupplier" propertyname="issupplier" type="base" :data="customer"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">VAT注册码：</div>
                    <div class="col-xs-8"><field-select :property="customer.isvat" propertyname="isvat" type="base" :data="customer"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">法人：</div>
                    <div class="col-xs-8"><filedinput :property="customer.legalbody" propertyname="legalbody" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">注册资金：</div>
                    <div class="col-xs-8"><filedinput :property="customer.registerfund" propertyname="registerfund" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">地区分类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_areacl" propertyname="pk_areacl" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">国家地区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_country" propertyname="pk_country" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">币种：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_currtype" propertyname="pk_currtype" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">客户税类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_custclass" propertyname="pk_custclass" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">业务单元：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_financeorg" propertyname="pk_financeorg" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">数据格式：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_format" propertyname="pk_format" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">集团：</div>
                    <div class="col-xs-8">{{customer.pk_group}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">组织：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_org" propertyname="pk_org" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">时区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_timezone" propertyname="pk_timezone" type="base" :data="customer"></browser>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">WEB：</div>
                    <div class="col-xs-8"><filedinput :property="customer.url" propertyname="url" :data="customer"></filedinput></div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">备注：</div>
                    <div class="col-xs-10">
                      <filedinput :property="customer.memo" propertyname="memo" istextares="true" :data="customer" type="base"></filedinput>
                    </div>
                  </div>
                </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="销售组织" name="five">
            <el-table class="tab-panel"
                      :data="customer.custsale">
              <el-table-column label="所属集团" prop="pk_group" width="100">
              </el-table-column>
              <el-table-column label="所属销售组织" width="250">
                <template slot-scope="props">
                  <browser :property="props.row.pk_org" propertyname="pk_org" type="custsale" ref="pk_org" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="结算财务组织" width="250">
                <template slot-scope="props">
                  <browser :property="props.row.pk_financeorg" propertyname="pk_financeorg" type="custsale" ref="pk_financeorg" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="利润中心" width="250" v-if="customer.showmore">
                <template slot-scope="props">
                  <browser :property="props.row.pk_liabilitycenter" propertyname="pk_liabilitycenter" type="custsale" ref="pk_liabilitycenter" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="专管业务员" width="150" v-if="customer.showmore">
                <template slot-scope="props">
                  <browser :property="props.row.respperson" propertyname="respperson" type="custsale" ref="respperson" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="" width="150" v-if="!customer.showmore">
                <template slot-scope="props">
                  <a @click="customer.showmore = true">显示更多</a>
                </template>
              </el-table-column>
              <el-table-column width="40" :render-header="addRowClickSale">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="custsale" ref="button"></delete-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="财务组织" name="second">
            <el-table class="tab-panel"
                      :data="customer.custfinance">
              <el-table-column label="所属集团" prop="pk_group" width="100">
              </el-table-column>
              <el-table-column label="所属财务组织" width="">
                <template slot-scope="props">
                  <browser :property="props.row.pk_org" propertyname="pk_org" type="custfinance" ref="pk_org" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="默认收款协议" width="200">
                <template slot-scope="props">
                  <browser :property="props.row.pk_payterm" propertyname="pk_payterm" type="custfinance" ref="pk_payterm" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="专管部门" width="150">
                <template slot-scope="props">
                  <departree :propername="props.row.pk_respdept1" :property="props.row.pk_respdept2" propertyname="pk_respdept1" type="custfinance" :pk_org="props.row.pk_orgkey" ref="pk_respdept1" :data="props.row"></departree>
                </template>
              </el-table-column>
              <el-table-column width="40" :render-header="addRowClick">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="custfinance" ref="button"></delete-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="信用控制" name="third">
            <el-table class="tab-panel"
                      :data="customer.custcreditctl">
              <el-table-column label="所属集团 " prop="pk_group" width="100">
              </el-table-column>
              <el-table-column label="所属信用控制域" width="">
                <template slot-scope="props">
                  <browser :property="props.row.pk_org" propertyname="pk_org" type="custcreditctl" ref="ctl_pk_org" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="信用等级" width="120">
                <template slot-scope="props">
                  <browser :property="props.row.creditlevel" propertyname="creditlevel" ref="creditlevel" type="custcreditctl" :data="props.row"></browser>
                </template>
              </el-table-column>
              <el-table-column label="免于信用额度检查" width="80">
                <template slot-scope="props">
                  <field-select :property="props.row.freeofcremnycheck" propertyname="freeofcremnycheck" ref="freeofcremnycheck" type="custcreditctl" :data="props.row"></field-select>
                </template>
              </el-table-column>
              <el-table-column label="免于帐期检查 " prop="freeofacclmtcheck" width="80">
                <template slot-scope="props">
                  <field-select :property="props.row.freeofacclmtcheck" propertyname="freeofacclmtcheck" ref="freeofacclmtcheck" type="custcreditctl" :data="props.row"></field-select>
                </template>
              </el-table-column>
              <el-table-column  :render-header="addRowClickCredit" width="40">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="custcreditctl"></delete-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="联系人" name="fourth">
            <el-table class="tab-panel"
                      :data="customer.linkman">
              <el-table-column label="名称" width="80">
                <template slot-scope="props">
                  <filedinput :property="props.row.name" propertyname="name" ref="name" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="手机" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.cell" propertyname="cell" ref="cell" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="电话" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.phone" propertyname="phone" ref="phone" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="传真" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.fax" propertyname="fax" ref="fax" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="邮件" width="">
                <template slot-scope="props">
                  <filedinput :property="props.row.email" propertyname="email" ref="email" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column label="职位" width="80">
                <template slot-scope="props">
                  <filedinput :property="props.row.vjob" propertyname="vjob" ref="vjob" :data="props.row" type="linkman"></filedinput>
                </template>
              </el-table-column>
              <el-table-column  :render-header="addRowClickLinkman" width="40">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="linkman"></delete-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    import browser from './browser'
    import filedinput from './fieldInput'
    import fieldCheckbox from './fieldCheckbox'
    import deleteButton from './deleteButton'
    import departree from './tree'
    import 'static/css/mycustomer.css'
    export default {
      data () {
        return {
          loading: false,
          customer: {},
          temp: 'Y'
        }
      },
      components: {
        'browser': browser,
        'filedinput': filedinput,
        'fieldSelect': fieldCheckbox,
        'deleteButton': deleteButton,
        'departree': departree
      },
      created () {
        const that = this
        document.body.onclick = function (e) {
          e = e.target || e.srcElement
          let parent = e
          let closemodel = false
          try {
            while (true) {
              const tagname = parent.tagName
              const classname = parent.getAttribute('class')
              parent = parent.parentNode
              if (tagname === 'BODY') break
              if (classname == null) continue
              if (classname.indexOf('customerWrapper') >= 0 || classname.indexOf('el-message-box__wrapper') >= 0 || classname.indexOf('el-autocomplete-suggestion') >= 0) {
                closemodel = true
                break
              }
            }
            if (!closemodel && that.$parent.cusDetailModelVisable) {
              that.$parent.closeDetail()
            }
          } catch (e) {
          }
        }
      },
      props: ['customerid'],
      methods: {
        addRowClick (h, {column}) {
          const that = this
          return h('el-button', {
            class: 'el-icon-plus el-button el-button--primary el-button--mini is-circle',
            style: 'color:#fff;',
            on: {
              click () {
                const list = {
                  plus: true
                }
                that.customer.custfinance.push(list)
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
                const list = {
                  plus: true
                }
                that.customer.linkman.push(list)
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
                const list = {
                  plus: true
                }
                that.customer.custcreditctl.push(list)
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
              const list = {
                plus: true
              }
              that.customer.custsale.push(list)
            }
          }
        })
      },
        closeModel () {
          this.$parent.closeDetail()
        },
        saveTr (type) {
          let data = {}
          if (type === 'custfinance') {
            data = {
              pk_org: this.$refs.pk_org.pk,
              pk_payterm: this.$refs.pk_payterm.pk,
              pk_respdept1: this.$refs.pk_respdept1.propervalue
            }
          } else if (type === 'custcreditctl') {
            data = {
              pk_org: this.$refs.ctl_pk_org.pk,
              creditlevel: this.$refs.creditlevel.pk,
              freeofcremnycheck: this.$refs.freeofcremnycheck.propervalue,
              freeofacclmtcheck: this.$refs.freeofacclmtcheck.propervalue
            }
          } else if (type === 'linkman') {
            data = {
              name: this.$refs.name.propervalue,
              cell: this.$refs.cell.propervalue,
              phone: this.$refs.phone.propervalue,
              fax: this.$refs.fax.propervalue,
              email: this.$refs.email.propervalue,
              vjob: this.$refs.vjob.propervalue
            }
          } else if (type === 'custsale') {
            data = {
              pk_org: this.$refs.pk_org.pk,
              pk_financeorg: this.$refs.pk_financeorg.pk,
              pk_liabilitycenter: this.$refs.pk_liabilitycenter.pk,
              respperson: this.$refs.respperson.pk
            }
          }
          data.type = type
          data.pk_customer = this.customerid
          this.$http.post('/test/customerVue/addProperty.jsp', data).then((res) => {
            res = res.body
            if (res.errno === 1) {
              this.$message({
                type: 'success',
                message: '修改成功!'
              })
              this.getCustomer()
            } else {
              this.$message({
                type: 'error',
                message: '删除失败，请联系管理员!'
              })
            }
          })
        },
        getCustomer () {
          this.loading = true
          const that = this
          // /test/customerVue/custinfo.jsp
          // http://localhost/custinfo.json
          this.$http.get('/test/customerVue/custinfo.jsp?pk=' + this.customerid).then((res) => {
            res = res.body
            const errno = res.errno
            if (errno === 1) {
              that.customer = res
            } else {
              that.$message.error(res.txt);
            }
            that.loading = false
          })
        }
      },
      watch: {
        customerid () {
          this.getCustomer()
        }
      }
    }
</script>

<style>

</style>
