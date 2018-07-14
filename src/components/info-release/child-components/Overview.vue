<template>
    <b-card header-tag="header" class="animated fadeInDown">
        <template slot="header">
          <i class="iconfont icon-company"></i> &nbsp 基本信息
        </template>



        <!-- 概述 -->
        <b-card>
          <b-form-group horizontal
              label="公司概述:"
              label-class="font-weight-bold pt-0"
              label-size="lg"
              label-for="overview">
                <b-form-textarea id="overview"
                  placeholder=""
                  :rows="6"
                  :max-rows="8">
                </b-form-textarea>
                <b-btn class="mt-2">确定</b-btn>
          </b-form-group>
        </b-card>




        <!-- 联系方式 -->
        <b-card>
          <b-form-group horizontal
          breakpoint="lg"
          label="联系方式"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0">
              <b-form-group horizontal
              label="电话:"
              label-class="text-sm-right"
              label-for="telephone">
                <b-form-input id="telephone"></b-form-input>
              </b-form-group>
              <b-form-group horizontal
                label="邮箱:"
                label-class="text-sm-right"
                label-for="email">
                  <b-form-input id="email"></b-form-input>
              </b-form-group>
              <b-form-group horizontal
                label="微信:"
                label-class="text-sm-right"
                label-for="wechat">
                  <b-form-input id="wechat"></b-form-input>
              </b-form-group>
              <b-form-group horizontal
              label="二维码:"
              label-class="text-sm-right"
              label-for="qrcode">
            
                <b-form-file 
                  id="qrcode"
                  v-model="file" 
                  :state="Boolean(file)" 
                  placeholder="选择文件"></b-form-file>
                <div class="mt-3">已选文件: {{file && file.name}}</div>
                </b-form-group>
                <b-btn class="mt-2">确定</b-btn>
          </b-form-group>
          </b-card>
        <!-- 最近新闻 -->
        <b-card>
          <b-form-group horizontal
            breakpoint="lg"
            label="最近新闻"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0">
                <b-form-group horizontal
                label="题目:"
                label-class="text-sm-right"
                label-for="newsTitle">
                  <b-form-input id="newsTitle"></b-form-input>
                </b-form-group>
                <b-form-group horizontal
                label="内容:"
                label-class="text-sm-right"
                label-for="newsContent">
                    <b-form-textarea id="newsContent"
                    placeholder=""
                    :rows="6"
                    :max-rows="8">
                  </b-form-textarea>
                </b-form-group>
                <b-btn class="mt-2">确定</b-btn>
              </b-form-group>
        </b-card>

        <!-- 招聘信息 -->
        <b-card>
            <b-form-group horizontal
              breakpoint="lg"
              label="人才招聘"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0">
                  <b-form-group horizontal
                  label="岗位名称:"
                  label-class="text-sm-right"
                  label-for="newsTitle">
                    <b-form-input id="newsTitle"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal
                  label="招聘要求:"
                  label-class="text-sm-right"
                  label-for="newsContent">
                      <b-form-textarea id="newsContent"
                      placeholder=""
                      :rows="6"
                      :max-rows="8">
                    </b-form-textarea>
                  </b-form-group>
                  <b-form-group horizontal
                  label="联络人:"
                  label-class="text-sm-right"
                  label-for="newsTitle">
                    <b-form-input id="newsTitle"></b-form-input>
                  </b-form-group>
                  <b-btn class="mt-2">确定</b-btn>
                </b-form-group>
          </b-card>
    </b-card>
</template>
<script>
  export default{
    name:"Overview",
    data(){
      return {
        file:""
      }
    }
  }
</script>
<style scoped>
  button{
    margin-left: 90%;
  }
</style>