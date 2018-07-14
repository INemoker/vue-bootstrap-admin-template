<template>
  <b-card header-tag="header" class="animated fadeInRight">
      <template slot="header">
          <i class="iconfont icon-list"></i> &nbsp 资源下载
        </template>
        <b-table striped hover :items="resources">
            <template slot="详细信息" slot-scope="row">
                <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
                <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
                 {{ row.detailsShowing ? '隐藏' : '显示'}}详细信息
                </b-button>
              </template>
              <template slot="row-details" slot-scope="row">
                  <b-card class="animated fadeIn">
                    复制地址到下载器
                  </b-card>
                </template>
        </b-table>
  </b-card>
</template>
<script>
  export default{
    name:"Table",
    data(){
      return {
        resources:[
          { 资源名称: "产品资料", 下载地址: "www.baidu.com",详细信息:""},
          { 资源名称: "产品资料", 下载地址: "www.baidu.com",详细信息:""},
          { 资源名称: "产品资料", 下载地址: "www.baidu.com",详细信息:""},
          { 资源名称: "产品资料", 下载地址: "www.baidu.com",详细信息:""}
        ]
      }
    }
  }
</script>
<style scoped>
  .card{
    margin: 0;
  }
</style>