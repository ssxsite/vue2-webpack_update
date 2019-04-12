<template>
    <div class="container">
        <input type="text" placeholder="接下来做什么？" class="test-input" style="width: 100%;" autocomplete="off"
        @keyup.13="addItems($event)">
        <TodoItem v-for="(item,index) in getShowItems()" v-bind:item="item" :key="index"  @del="deleteItem"></TodoItem>
        <TodoTabs @filter="filter = $event" v-bind:leftItem="getUnFinishedItemLength()" @clearAllCompleted="clearAllCompleted()"></TodoTabs>
    </div>
</template>

<script>
    import TodoItem from './todo-item.vue'
    import TodoTabs from './todo-tabs.vue'
    import {getStore,setStore} from '../../service/localStorageUtil.js'

    var items = []
export default {
      name: 'todo',
      components: {
        TodoItem,
        TodoTabs
      },
      data () {
        return {
          items: items,
          item_key: 0,
          filter: 'all'
        }
      },
      methods: {
        addItems: function (e) {
          if (this.items.length === 0) {
            this.item_key = 0
          };
          this.items.unshift({
            text: e.target.value,
            key: this.item_key++,
            completed: false
          })
          setStore('todoItems',JSON.stringify(this.items));
        },
        deleteItem: function (key) {
          console.log('key----', key)
          // this.items.splice(this.items.findIndex(item => item.key ==== key), 1);
          this.items = this.items.filter((item) => item.key !== key)
          setStore('todoItems',JSON.stringify(this.items));
        },
        getShowItems: function () {
          if (this.filter === 'all') {
            return this.items
          }
          let complete = this.filter === 'completed'
          return this.items.filter((item) => item.completed === complete)
        },
        getUnFinishedItemLength: function () {
          return this.items.filter((item) => item.completed === false).length
        },
        clearAllCompleted: function () {
          this.items = this.items.filter((item) => item.completed === false)
        },

        initData(){
          var data= JSON.parse(getStore('todoItems'));

          if(!data){
            this.items=[];
          }else {
            this.items = data
          }

        }
      },
      mounted(){
        this.initData()
      }
    }
</script>

<style scoped>
.container{
    width: 500px;
    margin: 10px auto;
    background-color: white;
    box-sizing: border-box;
}
@import '../../assets/styles/toto.scss';
</style>
