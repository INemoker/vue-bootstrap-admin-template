<template>
    <b-card header-tag="header" class="animated fadeInDown">
        <template slot="header">
          <i class="iconfont icon-news1"></i> &nbsp 公告发布
        </template>
        <script id="editor" type="text/plain"></script>
        <b-btn class="mt-2" v-b-modal.modal1>提交审核</b-btn>

        <b-modal id="modal1" centered>
            &nbsp &nbsp &nbsp 公告已提交上级审核。
        </b-modal>
    </b-card>
</template>
<script>
  export default{
    name:"NewAnnoucement",
    data(){
      return {
        editor: null,
        config:{
           initialFrameWidth: null,
           initialFrameHeight: 500
        },
        defaultMsg:"编辑公告内容"
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
<style scoped>

</style>