<template>
  <div class="col-sm-6 col-md-4 my-4">
    <div class="card">
      <div class="card-header bg-dark text-light">
        <h4 class>{{ stock.name }}
          <small class="small">(Price: {{ stock.price }} | Quantity: {{ stock.quantity.toLocaleString() }} )</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" :class="{'is-invalid': insufficientQuantity}" v-model.number="quantity">
          <div class="invalid-feedback">
            Insufficient Quantity!
          </div>
        </div>
        <div class="float-right">
          <button type="button" class="btn btn-info" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))">Sell</button>
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>