<template>
  <div class="col-sm-6 col-md-4 my-4">
    <div class="card">
      <div class="card-header bg-dark text-light">
        <h4 class>{{ stock.name }}
          <small class="text-white">(Price: {{ stock.price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" :class="{'is-invalid': insufficientFunds}" v-model.number="quantity">
          <div class="invalid-feedback">
            Insufficient Funds!
          </div>
        </div>
        <div class="float-right">
          <button type="button" class="btn btn-dark" @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))">Buy</button>
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
        quantity: ""
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('buyStock', order)
        this.quantity = 0;
      }
    }
  }

</script>

<style>

</style>
