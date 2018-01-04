<template>
  <div class="col-sm-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Цена: {{ stock.price }} | Количество: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
              type="number"
              class="form-control"
              placeholder="Количество"
              v-model="quantity"
              :class="{ danger : insufficientQuantity }">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)">
            {{ insufficientQuantity ? 'Не хватает акций' : 'Продать' }}
          </button>
          <button class="btn btn-success" @click="sellAll">
            Продать все
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: +this.quantity
        }
        this.placeSellOrder(order)
      },
      sellAll() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.stock.quantity
        }
        this.placeSellOrder(order)
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
