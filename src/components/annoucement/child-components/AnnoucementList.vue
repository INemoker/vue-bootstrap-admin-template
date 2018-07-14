<template>
  <b-card header-tag="header" class="animated fadeInDown">
      <template slot="header">
          <i class="iconfont icon-news1"></i> &nbsp 公告栏
        </template>
        <b-list-group>
            <b-list-group-item v-for="(item, index) in annoucements" :key="index" :href="item.href">

              <b-badge :variant="item.variant" pill class="px-3 py-2">{{item.badge}}</b-badge> 
              <span class="pl-4">{{item.title}}</span> 

            </b-list-group-item>
          </b-list-group>
  </b-card>
</template>
<script>
  export default{
    name:"AnnoucementList",
    data(){
      return {
        annoucements:[
          {href:"#",badge:"置顶",variant:"warning",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"紧急",variant:"danger",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"},
          {href:"#",badge:"普通",variant:"info",title:"《This is a list group itemThis is a list group item》"}
        ]
      }
    }
  }
</script>
<style scoped>

</style>