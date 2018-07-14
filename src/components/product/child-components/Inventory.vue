<template>
  <b-card header-tag="header" class="animated fadeInDown">
    <template slot="header">
      <i class="iconfont icon-similarproduct"></i> &nbsp 库存商品
    </template>
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="查找" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="点击输入" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">清空</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="排序" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- 无 --</option>
              </b-form-select>
              <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                <option :value="false">升序</option>
                <option :value="true">降序</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="排序" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortDirection" slot="append">
                <option value="asc">升序</option>
                <option value="desc">降序</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="条/页" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table 
        show-empty 
        striped
        stacked="md" 
        :items="items" 
        :fields="fields" 
        :current-page="currentPage" 
        :per-page="perPage" 
        :filter="filter"
        :sort-by.sync="sortBy" 
        :sort-desc.sync="sortDesc" 
        :sort-direction="sortDirection" 
        @filtered="onFiltered">
        <template slot="name" slot-scope="row">{{row.value}}</template>
        <template slot="code" slot-scope="row">{{row.value}}</template>
        <template slot="actions" slot-scope="row">
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <!-- <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)" class="mr-1">
              Info modal
            </b-button> -->
          <b-button size="sm" @click.stop="row.toggleDetails">
            {{ row.detailsShowing ? '隐藏' : '显示' }}详情
          </b-button>
        </template>
        <template slot="row-details" slot-scope="row">
          <b-media class="animated fadeIn">
            <img :src="row.item.img" slot="aside" width="128" height="128">
            <ul>
              <li>产品代码: {{row.item.code}}</li>
              <li>产品名称: {{row.item.code}}</li>
              <li>库存数量: {{row.item.num}}</li>
              <li>产品介绍:
                <p>
                  &nbsp &nbsp {{row.item.description}}
                </p>
              </li>
            </ul>
          </b-media>
        </template>
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>

      <!-- Info modal -->
      <!-- <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
          <pre>{{ modalInfo.content }}</pre>
        </b-modal> -->

    </b-container>
  </b-card>
</template>
<script>
  const items = [{
      code: 'AB15687924',
      num: 40,
      name: 'DickersonMacdonald',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img: require('../../../assets/img/1.png')
    },
    {
      code: 'XY89654713',
      num: 21,
      name: 'LarsenShaw',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img: require('../../../assets/img/2.png')
    },
    {
      code: 'XY89654713',
      num: 9,
      name: 'MiniNavarro',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/3.png')
    },
    {
      code: 'XY89654713',
      num: 89,
      name: 'GenevaWilson',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/4.png')
    },
    {
      code: 'AB15687924',
      num: 38,
      name: 'JamiCarney',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/5.png')
    },
    {
      code: 'XY89654713',
      num: 27,
      name: 'EssieDunlap',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/6.png')
    },
    {
      code: 'AB15687924',
      num: 40,
      name: 'ThorMacdonald',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/7.png')
    },
    {
      code: 'AB15687924',
      num: 87,
      name: 'LarsenShaw',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/8.png')
    },
    {
      code: 'XY89654713',
      num: 26,
      name: 'MitziNavarro',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/10.png')
    },
    {
      code: 'XY89654713',
      num: 22,
      name: 'GenevieveWilson',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/9.png')
    },
    {
      code: 'AB15687924',
      num: 38,
      name: 'JohnCarney',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/10.png')
    },
    {
      code: 'XY89654713',
      num: 29,
      name: 'DickDunlap',
      description: "可以说产品概念是企业想要注入顾客脑中关于产品的一种主观意念，就是用消费者的语言来描述你的产品，即如何向老百姓简单明白地介绍产品。一般用文字来表达或用图片来描述产品概念。通常一个完整的产品概念由四部分组成",
      img:require('../../../assets/img/9.png')
    }
  ]

  export default {
    name: "Inventory",
    data() {
      return {
        items: items,
        fields: [{
            key: 'code',
            label: '产品代码',
            sortable: true,
            sortDirection: 'desc'
          },
          {
            key: 'name',
            label: '产品名称',
            sortable: true
          },
          {
            key: 'num',
            label: '库存数量',
            class: 'text-center',
            sortable: true
          },
          {
            key: 'actions',
            label: '详细信息'
          }
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: {
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {
              text: f.label,
              value: f.key
            }
          })
      }
    },
    methods: {
      info(item, index, button) {
        this.modalInfo.title = `Row index: ${index}`
        this.modalInfo.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }

</script>
<style scoped>
  .media {
    border: 1px solid #ddd;
    padding: 0.5rem 2rem;
    border-radius: 10px;
  }

  .icon-shangpin {
    font-size: 5rem;
  }

</style>
