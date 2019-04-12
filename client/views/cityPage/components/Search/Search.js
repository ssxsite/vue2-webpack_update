import {setStore} from '../../../../service/localStorageUtil.js'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    // ...mapMutations(['changeCity']),
    handleCityClick (city) {
       // this.changeCity(city)
      setStore('currentCity',JSON.stringify(city));
       // this.$emit('cityChange')
       this.$router.push('/index')
    }

  },
  mounted () {
    // this.scroll = new Bscroll(this.$refs.search)
  }
}
