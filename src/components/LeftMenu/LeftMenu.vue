<template>
  <div class="LeftMenu">
    <ul>
      <li><router-link to="/myCustomer">所有客户</router-link></li>
      <li><router-link to="/newCustomer">新建客户</router-link></li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'LeftMenu'
}
</script>
<style>
  .LeftMenu{
    padding-top: 20px;
  }
.LeftMenu a.router-link-active{
  color: #428bca;
  border-right: 2px solid #428bca;
}
.LeftMenu a{
  font-size: 14px;
  display: block;
  padding: 10px 0 10px 30px;
}
</style>
