<template>
  <b-card header-tag="header" class="animated fadeInLeft">
    <template slot="header">
      <i class="iconfont icon-note"></i> &nbsp 记事板
      <b-btn size="sm" class="add" v-b-modal.modal1>添加</b-btn>
    </template>
    <b-media tag="li" v-for="(item, index) in comments" :key="index">
      <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
      <i slot="aside" class="close iconfont icon-close" @click="deleteComment(index)"></i>
      <h5 class="mt-0 mb-1">{{item.title}}</h5>
      <p>{{item.main}}</p>
    </b-media>


    <b-modal id="modal1" centered title="添加" @ok="handleOk">
      <div>

        <b-form>
  
          <b-form-group label="标题:" label-for="Input1">
            <b-form-input id="Input1" v-model="newComment.title" required placeholder="输入标题">
          </b-form-input>
          </b-form-group>
  
          <b-form-group label="内容:" label-for="Input2">
            <b-form-input id="Input2" v-model="newComment.main" required placeholder="输入内容">
            </b-form-input>
          </b-form-group>
          
        </b-form>
      </div>
    </b-modal>

    <b-modal id="modal2" centered  @ok="handleDelete">
        &nbsp &nbsp &nbsp 确定删除么？
    </b-modal>

    
  </b-card>
</template>
<script>
  export default {
    name: "Comment",
    data() {
      return {
        comments: [{
            title: "List-based media object",
            main: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.`
          },
          {
            title: "List-based media object",
            main: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.`
          },
          {
            title: "List-based media object",
            main: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.`
          }
        ],
        newComment: {
          title: "",
          main: ""
        },
        deleteIndex:""
      }
    },
    methods: {
      handleOk() {
        var comment = {
          title:"",
          main:""
        }
        comment.title = this.newComment.title
        comment.main = this.newComment.main
          this.comments.push(comment)
      },
      deleteComment(index){
        this.$root.$emit('bv::show::modal', 'modal2', '#focusThisOnClose');
        this.deleteIndex = index
      },
      handleDelete(){
        console.log(this.deleteIndex)
        this.comments.pop(this.deleteIndex)
      }
    }
  }

</script>
<style scoped>
  .media {
    border: 1px solid #CBCBCB;
    border-radius: 5px;
    padding: 0.5rem;
    position: relative;
    margin-bottom: 1rem;
  }

  .add {
    margin-left: 75%;
  }
  .close{
    position: absolute;
    right: 2%;
    top: 0;
    font-size: 2rem;
  }
  p{
    word-break: break-all;
    word-wrap: normal;
  }

</style>
