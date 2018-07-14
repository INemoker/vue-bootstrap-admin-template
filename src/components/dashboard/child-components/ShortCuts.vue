<template>
  <b-card header-tag="header" class="animated fadeInRight">
    
    <template slot="header">
      <i class="iconfont icon-bookmark"></i> &nbsp 快捷链接
    </template>

    <b-row>
      <b-col v-for="(item, index) in line1" :key="index">
          <router-link :to='item.path'>
            <div>
              <i :class="item.iconclass"></i>
            </div>
            <span>{{item.msg}}</span>
          </router-link>
      </b-col>
    </b-row>

    <b-row>
        <b-col v-for="(item, index) in line2" :key="index">
            <router-link :to='item.path'>
              <div>
                <i :class="item.iconclass"></i>
              </div>
              <span>{{item.msg}}</span>
            </router-link>
        </b-col>
    </b-row>

  </b-card>
</template>
<script>
  export default {
    name: "ShortCuts",
    data() {
      return {
        line1:[
          {iconclass:"iconfont icon-bookmark",msg:"Bookmark",path:""},
          {iconclass:"iconfont icon-note",msg:"Note",path:""},
          {iconclass:"iconfont icon-comment",msg:"Comment",path:""},
          {iconclass:"iconfont icon-cc-chart",msg:"Chart",path:""}
        ],
        line2:[
          {iconclass:"iconfont icon-tag",msg:"Tag",path:""},
          {iconclass:"iconfont icon-photo",msg:"Photo",path:""},
          {iconclass:"iconfont icon-user",msg:"User",path:""},
          {iconclass:"iconfont icon-listalt",msg:"Listalt",path:""}
        ]
      }
    }
  }

</script>
<style scoped>

  .col{
    height: 5.5rem;
    background-color: #F9F6F1;
    margin: 0.3rem;
    border-radius: 10px;
    text-align: center;
    padding: 0.5rem;
    color: #545454;
  }
  i{
    color: #545454;
  }
  .col i{
    font-size: 2rem; 
  }
  .col:hover{
    background-color: #00BA8B;
    color: white;
  }
  .col:hover i,.col:hover span{
    color: white;
  }
  span{
    font-size: 12px;
  }

</style>
