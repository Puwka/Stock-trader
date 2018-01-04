<template>
  <div>
    <app-blank v-if="show"></app-blank>
    <app-stock
          v-for="stock in stocks"
          :stock="stock"
          v-else
          ></app-stock>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Stock from './Stock.vue'
  import Blank from './Blank.vue'

  export default {
    data() {
      return {
        show: false
      }
    },
    created() {
      this.stocks.length > 0 ? this.show = false : this.show = true
    },
    updated() {
      this.stocks.length > 0 ? this.show = false : this.show = true
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      'app-stock': Stock,
      'app-blank': Blank
    }
  }
</script>
