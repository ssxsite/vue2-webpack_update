import {Timer} from "../../../service/timer.js"

export default {
  name: "timeBox",
  props: ['endTime'],
  data(){
    return{
      state: 0,
      time: [],
      seftEndTime:this.endTime
    }
  },
  methods:{
    //倒计时
    timer() {
      var that = this
      setInterval(() => {
          let beginTime = new Date()
          that.time =  Timer.timeInit(this.seftEndTime,beginTime)
        }, 1000)
    },
  },
  watch: {
    endTime(val) {
      this.seftEndTime = val;
    }
  },
  mounted(){
    this.timer();
  }
}

