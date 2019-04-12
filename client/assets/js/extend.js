// 创建一个需要混入的对象
import testCom from '../../common/components/testCom/testCom.vue'
export const extendTest1 = {
  data(){
    return{
      name:'extendTest1'
    }
  }
  // components:{
  //   testCom
  // },
  // created() {
  //   this.hello();
  // },
  // methods: {
  //   hello() {
  //     console.log('mixinTest1');
  //   }
  // }
};
