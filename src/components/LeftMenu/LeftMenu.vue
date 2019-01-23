<template>
  <div class="LeftMenu">
    <ul>
      <li><router-link to="/myCustomer">我的客户</router-link></li>
      <li><router-link to="/myFollw">我关注的客户</router-link></li>
      <li><router-link to="/myAllcus">我的全部客户</router-link></li>
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

.LeftMenu a{
  font-size: 14px;
  display: block;
  padding: 10px 0 10px 30px;
}
</style>
