<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio" active-class="active">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stocks" active-class="active">Stocks</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#" @click="endDay">End Day</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle open" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="saveData" href="#">Save Data</a>
            <a class="dropdown-item" @click="loadData" href="#">Load Data</a>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="#">{{ funds | currency }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['funds', 'stockPortfolio', 'stocks']),
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds:  this.funds,
          stockPortfolio: this.stockPortfolio,
          stocks: this.stocks
        };
        this.$http.put('data.json', data)
      },
      loadData() {
        this.fetchData()
      }
    }
  }

</script>

<style>

</style>
