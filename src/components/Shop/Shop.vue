<template>
  <div>
    <app-amplification v-for="amplification in amplifications" :amplification="amplification"></app-amplification>
  </div>
</template>

<script>
  import ShopCard from './ShopCard'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        amplifications: 'amplifications'
      })
    },
    components: {
      'app-amplification': ShopCard
    }
  }
</script>
