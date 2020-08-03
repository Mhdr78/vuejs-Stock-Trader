<template>
  <div class="ml-3 mt-3">
    <h1>Trade or View your Portfolio</h1>
    <h6>you may Save & Load your Data</h6>
    <h6>click on 'End Day' to begin a New Day!</h6>
    <hr>
    <p>Your Funds is: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style>

</style>