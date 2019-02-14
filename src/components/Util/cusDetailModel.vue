<template>
    <div class="cusDetailModel" v-loading="loading">
      <div class="oh topclose mt20" v-if="!loading">
        <i class="el-icon-circle-close-outline icon" @click="closeModel"></i>
        <filedinput :property="customer.name" propertyname="name"></filedinput>
      </div>
      <div class="cusDetail" v-if="!loading">
        <el-tabs value="first">
          <el-tab-pane label="基础信息" name="first">
            <div class="container-fluid rowborder">
              <div class="row">
                  <div class="col-xs-12">
                    <div class="tr custlabel">地址：</div>
                    <div class="col-xs-8"><filedinput :property="customer.corpaddress" propertyname="corpaddress"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">联系方式：</div>
                    <div class="col-xs-8"><filedinput :property="customer.tel1" propertyname="tel1"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">创建人：</div>
                    <div class="col-xs-8">{{customer.creatorcn}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">客户类型：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.custprop" propertyname="custprop" type="base"></browser>
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
                    <div class="col-xs-8"><filedinput :property="customer.ename" propertyname="ename"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">散户：</div>
                    <div class="col-xs-8"><field-select :property="customer.isfreecust" propertyname="isfreecust" type="base"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">零售店：</div>
                    <div class="col-xs-8"><field-select :property="customer.isretailstore" propertyname="isretailstore" type="base"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">供应商：</div>
                    <div class="col-xs-8"><field-select :property="customer.issupplier" propertyname="issupplier" type="base"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">VAT注册码：</div>
                    <div class="col-xs-8"><field-select :property="customer.isvat" propertyname="isvat" type="base"></field-select></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">法人：</div>
                    <div class="col-xs-8"><filedinput :property="customer.legalbody" propertyname="ename"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">注册资金：</div>
                    <div class="col-xs-8"><filedinput :property="customer.registerfund" propertyname="registerfund"></filedinput></div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">地区分类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_areacl" propertyname="pk_areacl" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">国家地区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_country" propertyname="pk_country" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">币种：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_currtype" propertyname="pk_currtype" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">客户税类：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_custclass" propertyname="pk_custclass" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">业务单元：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_financeorg" propertyname="pk_financeorg" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">数据格式：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_format" propertyname="pk_format" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">集团：</div>
                    <div class="col-xs-8">{{customer.pk_group}}</div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">组织：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_org" propertyname="pk_org" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="tr custlabel">时区：</div>
                    <div class="col-xs-8">
                      <browser :property="customer.pk_timezone" propertyname="pk_timezone" type="base"></browser>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">WEB：</div>
                    <div class="col-xs-8"><filedinput :property="customer.url" propertyname="url"></filedinput></div>
                  </div>
                  <div class="col-xs-12">
                    <div class="tr custlabel">备注：</div>
                    <div class="col-xs-10">
                      <filedinput :property="customer.memo" propertyname="memo" type="textarea"></filedinput>
                    </div>
                  </div>
                </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="财务组织" name="second">
            <el-table class="tab-panel"
                      :data="customer.custfinance">
              <el-table-column label="所属集团" prop="pk_group" width="100">
              </el-table-column>
              <el-table-column label="所属财务组织" width="">
                <template slot-scope="props">
                  <browser :property="props.row.pk_org" propertyname="pk_org" type="custfinance"></browser>
                </template>
              </el-table-column>
              <el-table-column label="默认收款协议" width="150">
                <template slot-scope="props">
                  <browser :property="props.row.pk_payterm" propertyname="pk_payterm" type="custfinance"></browser>
                </template>
              </el-table-column>
              <el-table-column label="专管部门" width="150">
                <template slot-scope="props">
                  <departree :propername="props.row.pk_respdept1" :property="props.row.pk_respdept2" propertyname="pk_respdept1" type="custfinance"></departree>
                </template>
              </el-table-column>
              <el-table-column label="删除" width="40">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="custfinance"></delete-button>
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
                  <browser :property="props.row.pk_org" propertyname="pk_org" type="custcreditctl"></browser>
                </template>
              </el-table-column>
              <el-table-column label="信用等级" width="120">
                <template slot-scope="props">
                  <browser :property="props.row.creditlevel" propertyname="creditlevel" type="custcreditctl"></browser>
                </template>
              </el-table-column>
              <el-table-column label="免于信用额度检查" width="80">
                <template slot-scope="props">
                  <field-select :property="props.row.freeofcremnycheck" propertyname="freeofcremnycheck" type="custcreditctl"></field-select>
                </template>
              </el-table-column>
              <el-table-column label="免于帐期检查 " prop="freeofacclmtcheck" width="80">
                <template slot-scope="props">
                  <field-select :property="props.row.freeofacclmtcheck" propertyname="freeofacclmtcheck" type="custcreditctl"></field-select>
                </template>
              </el-table-column>
              <el-table-column label="删除" width="40">
                <template slot-scope="props">
                  <delete-button :data="props.row" type="custcreditctl"></delete-button>
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
        }
      },
      props: ['customerid'],
      methods: {
        closeModel () {
          this.$parent.closeDetail()
        }
      },
      watch: {
        customerid () {
          this.loading = true
          const that = this
          // test/customerVue/custinfo.jsp
          // http://localhost/custinfo.json
          this.$http.get('http://localhost/custinfo.json?pk=' + this.customerid).then((res) => {
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
      }
    }
</script>

<style>
  .cusDetailModel{
    position: fixed;
    width: 800px;
    right:-100%;
    bottom:0;
    top:80px;
    background: #f9f9f9;
    transition:all 0.5s ease-in-out 0s;
    z-index: 11;
    border-left: 1px solid #ddd;
    box-shadow: -3px 0 4px rgba(0,0,0,0.1);
  }
  .topclose{
    padding-left: 25px;
  }
  .cusDetailModel.on{
    right: 0;
  }
  .cusDetail{
    position: absolute;
    left:20px;
    right:20px;
    top:70px;
    bottom:15px;
  }
  .cusDetailModel .icon{
    font-size: 2em;
    cursor: pointer;
    margin-right:10px;
    margin-top: 2px;
    float: left;
  }
  .tab-panel{
    width: 100%;
    text-align: center;
  }
  .tab-panel .cell{
    line-height: 35px;
  }
  .tab-panel.el-table th>.cell{
    line-height: 150%;
  }
  .cusDetailModel .icon:hover{
    color:#409EFF
  }
  .rowborder .col-xs-8{
    font-size: 14px;
    line-height: 25px;
    height: 25px;
  }
  .rowborder{border:1px solid #ddd;
  border-radius: 3px;
  box-shadow: #ddd;
  background: #fff;
  }
  .custlabel{
    font-family: 'PingFangSC-Light','Hiragino Sans GB',Microsoft YaHei;
    color:#999;
    text-shadow:0 0 1px #999;
    font-size: 13px;
    width: 100px;
    float: left;
    line-height: 25px;
  }
  .cusDetail .el-tabs__content{
    position: absolute;
    top:55px;
    left: 0;
    right: 0;
    bottom: 5px;
    overflow: scroll;
  }
  .rowborder > .row > div{
    border-bottom: 1px solid #ddd;
    padding: 5px 0;
  }
</style>
