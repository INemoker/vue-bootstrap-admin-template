<template>
    <b-card header-tag="header" class="animated fadeInDown">
        <template slot="header">
          <i class="iconfont icon-similarproduct"></i> &nbsp 新增商品
        </template>
        <b-form-group horizontal
          breakpoint="lg"
          label="填写产品信息"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0">
          <b-form-group horizontal
              label="产品代码:"
              label-class="text-sm-right"
              label-for="nestedCode">
            <b-form-input id="nestedCode"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
              label="产品名称:"
              label-class="text-sm-right"
              label-for="nestedName">
            <b-form-input id="nestedName"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
              label="库存数量:"
              label-class="text-sm-right"
              label-for="nestedNum">
            <b-form-input id="nestedNum"></b-form-input>
          </b-form-group>
          <b-form-group horizontal
              label="产品介绍:"
              label-class="text-sm-right"
              label-for="nestedDescription">
                <b-form-textarea id="nestedDescription"
                  placeholder=""
                  :rows="6"
                  :max-rows="8">
                </b-form-textarea>
          </b-form-group>
          <b-form-group horizontal
          label="产品配图:"
          label-class="text-sm-right"
          label-for="nestedimg">
        
            <b-form-file 
              v-model="file" 
              :state="Boolean(file)" 
              placeholder="选择文件"></b-form-file>
              <div class="mt-3">已选文件: {{file && file.name}}</div>          
              <b-btn class="mt-2">提交</b-btn>
          </b-form-group>
        </b-form-group>
    </b-card>
</template>
<script>
  export default{
    name:"NewProduct",
    data(){
      return {
        file:""
      }
    }
  }
</script>