<template>
  <div class="pr-6 pl-6 newComponents">
    <b-card header-tag="header" class="animated fadeInDown">
      <template slot="header">
        <i class="iconfont icon-setting"></i> &nbsp 设置
      </template>
      
      <b-row class="d-flex justify-content-center mt-3">
        <b-col cols="1" class="text-left pt-2">旧密码:</b-col> <b-col cols="4"><b-form-input type="password"></b-form-input></b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-3">
        <b-col cols="1" class="text-left pt-2">新密码:</b-col> <b-col cols="4"><b-form-input type="password"></b-form-input></b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-3">
        <b-col cols="1" class="text-left pt-2">确认密码:</b-col> <b-col cols="4"><b-form-input type="password"></b-form-input></b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-3">
          <b-col cols="1" class="text-left pt-2">权限:</b-col><b-col cols="4"><b-form-radio-group class="pt-2" :options="['游客', '普通', '高级']" /></b-col>
      </b-row>
      <b-row class="d-flex justify-content-center mt-3">
          <b-col cols="5" class="d-flex justify-content-end"><b-btn>确认</b-btn></b-col>
      </b-row>






    </b-card>
  </div>
</template>
<script>
  export default{
    name:"Settings",
    data(){
      return {

      }
    }
  }
</script>
<style scoped>

</style>