<template>
  <div class="col-sm-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ amplification.name }}
          <small>(Цена: {{ amplification.price }} | Количество: {{ amplification.quantity || 0}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <p>{{ amplification.description }}</p>
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @mousedown="amplificate" :disabled="insufficientFunds || maximum">
            {{ insufficientFunds? 'Не хватает средст' : 'Купить'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    props: ['amplification'],
    computed: {
      funds() {
        return this.$store.getters.funds
      },
      insufficientFunds() {
        return this.amplification.price > this.funds
      },
      maximum() {
        return this.amplification.quantity >= this.amplification.maxQuantity
      }
    },
    methods: {
      amplificate() {
        const order = {
          amplificationId: this.amplification.id,
          amplificationPrice: this.amplification.pirce
        }
        this.$store.dispatch('buyAmplification', order)
      }
    }
  }
</script>
