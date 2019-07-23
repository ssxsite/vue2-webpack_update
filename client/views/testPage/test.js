import {mixinTest1} from '../../assets/js/mixin';
import {extendTest1} from '../../assets/js/extend.js';
import testComTwo from '../../common/components/testComTwo/testComTwo.vue'
import testInput from './components/input.vue'
import testData from './data'
export default {
  name: "test",
  components : {
    testComTwo,
    testInput
  },
  mixins:[mixinTest1],
  extends:extendTest1,
  data () {
    return {
      runAnimation:false,
      scrollList:[
        {
          title:'A',
          list:[1,2,3]
        },
        {
          title:'B',
          list:[1,2,3,4]
        },
        {
          title:'C',
          list:[1,2,3,5]
        },
      ],
      list: [
        { id: 1, name: '李斯' },
        { id: 2, name: '吕不韦' },
        { id: 3, name: '嬴政' }
      ],
      counter:0,
      // name:'',
      newId: 3,
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: '',
      titles:[],
      tempVal:0,
      discList:[]
    }
  },
  methods: {
    onShortcutTouchStart(){
      this.$refs.listGroup[anchorIndex]
    },
    prevent(e){
      console.log("2222")
       e.preventDefault()
      e.stopPropagation()
    },
    progation(){
      console.log("parent")
    },
    test(e){
      console.log("li",e.target.innerHTML)
      console.log("li2",e.currentTarget)
    },
    addCounter(){
      for(let i = 0; i< 100; i++){
        this.counter++
      }
      // this.counter++
    },
    add() {
      //注意这里是unshift
      this.list.unshift({ id: ++this.newId, name: this.name })
      this.name = ''
    },
    changeMsg() {
      this.msg = "Hello world."
      this.msg1 = this.$refs.msgDiv.innerHTML
      // this.$nextTick(() => {
      //   this.msg2 = this.$refs.msgDiv.innerHTML
      // })
      setTimeout(()=>{
        this.msg2 = this.$refs.msgDiv.innerHTML
      },0)
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
    hello() {
      console.log('test');
    },
    addTitle(val){
      console.log("this.titles",this.titles)
      this.titles.push(val)
      console.log("this.titles",this.titles)
    },
    addTest(){
      for(let i = 0; i < 100; i++){
        this.tempVal += i
      }
    }
  },
  computed:{
    leftList(){
      return  this.scrollList.map((group)=>{
        return group.title.substr(0,1)
      })
    }
  },
  watch:{
    counter(){
      console.log("counter change-----",this.counter)
    }
  },
  mounted : function(){
    console.log("leftList--",this.leftList)

    this.discList = testData.data.list
  },

}
