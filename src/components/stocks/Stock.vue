<template>
  <div class="col-sm-6 col-md-6">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Цена: {{ Math.round(stock.price * discount) }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
              type="number"
              class="form-control"
              placeholder="Количество"
              v-model="quantity"
              :class="{ danger : insufficientFunds }">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)">
            {{ insufficientFunds ? 'Не хватает средст' : 'Купить'}}
          </button>
          <button class="btn btn-success" @click="buyAll" :disabled="insufficientFunds">
            {{ insufficientFunds ? 'Все куплено' : 'Купить все'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      discount() {
        return this.$store.getters.discount
      },
      funds() {
        return this.$store.getters.funds
      },
      insufficientFunds() {
        if (this.quantity) {
          return this.quantity * Math.round(this.stock.price * this.discount) > this.funds
        } else {
          return 1 * Math.round(this.stock.price * this.discount) > this.funds
        }

      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: +this.quantity
        };
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      },
      buyAll() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Math.floor(this.funds / Math.round(this.stock.price * this.discount))
        }
        this.$store.dispatch('buyStock', order)
      }
    }
  }
</script>

<style scoped lang="scss">
.danger {
  box-shadow: 0px 0px 1px 1px red;
  border: 1px solid transparent;
}
</style>
