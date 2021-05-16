<template>
  <div>
    <h1>Here's a glimpse to our Secret Formula</h1>
    <table class="landing_table">
      <thead>
        <th>Ingredient</th>
        <th>Quantity</th>
      </thead>

      <tbody>
        <tr v-for="(formula, index) in secretIngredients" :key="index">
          <td>{{ formula.name }}</td>
          <td>{{ formula.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss">
@import './LandingScreen.scss';
</style>

<script>
export default {
  name: 'LandingScreen',
  props: {
    secretIngredients: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    preventNav() {
      
    }
  },
}
</script>
