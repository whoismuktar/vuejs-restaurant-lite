<template>
  <div class="recipe-form">
    <p>Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!</p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input v-model.number="ownIngredients.eggs" class="recipe-form__form-input" type="number" name="eggs" id="recipe-eggs" />
      <label for="recipe-pasta">Pasta</label>
      <input v-model.number="ownIngredients.pasta" class="recipe-form__form-input" type="number" name="pasta" id="recipe-pasta" />
      <label for="recipe-butter">Butter</label>
      <input v-model.number="ownIngredients.butter" class="recipe-form__form-input" type="number" name="butter" id="recipe-butter" />
      <label for="recipe-milk">Milk</label>
      <input v-model.number="ownIngredients.milk" class="recipe-form__form-input" type="number" name="milk" id="recipe-milk" />
      <label for="recipe-oil">Oil</label>
      <input v-model.number="ownIngredients.oil" class="recipe-form__form-input" type="number" name="oil" id="recipe-oil" />
      <label for="recipe-bacon">Bacon</label>
      <input v-model.number="ownIngredients.bacon" class="recipe-form__form-input" type="number" name="bacon" id="recipe-bacon" />
      <button type="submit" @click="calculate">Calculate</button>
    </form>

    <div v-if="resultReady && mostingredient" class="recipe-result-wrapper">
      <h2 v-if="result > 0"><span class="recipe-result">{{ result }}</span> Meals</h2>
      <h2 v-else><span class="recipe-result">{{ result }}</span> Meal</h2>

      <em v-if="result > 0">However, you have more of {{ mostingredient }} in each meal</em>
      <p>redirecting in {{ seconds }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import './RecipeForm.scss';
</style>

<script>
export default {
  name: 'RecipeForm',
  data () {
    return {
      resultReady: false,
      seconds: 5,
      mostingredient: "",
      ownIngredients: {
        pasta: 0,
        bacon: 0,
        eggs: 0,
        milk: 0,
        butter: 0,
        oil: 0
      },
      result: 0,
      meals: 0,
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    calculate (event) {
      event.preventDefault();
      const reducer = (acc, val) => acc + val;

  // Determine Max Ingredients
      this.getMaxIngredients();

      const usersTotal = Object.values(this.ownIngredients).reduce(reducer, 0);
      const secretsTotal = Object.values(this.ingredients).reduce(reducer, 0);

      // Get total meals
      this.result = Math.trunc(usersTotal / secretsTotal) || 0;

      // Check if any unit quantity is higher than that of secret formula's
      this.beginTimer();

      // Show result
      this.resultReady = true
    },
    getMaxIngredients() {
      const obj = this.ownIngredients;

      const getMax = Object.keys(obj).filter(x => {
             return obj[x] == Math.max.apply(null, 
             Object.values(obj));
       });

      if (getMax.length === 1) {
      this.mostingredient = getMax[0];
      } else if (getMax.length === 2) {
      this.mostingredient = getMax.join(" and ");
      } else if (getMax.length > 2) {      
      this.mostingredient = getMax.slice(0, -1).join(", ") + " and " + getMax.slice(-1);
      }
    },
    beginTimer() {  
      const initiator = setInterval(()=>{
        if (this.seconds <= 1) {
          clearInterval(initiator);

          // Navigate user to final destination
          this.$router.push({name: "Final", params: {data:this.ingredients}});
        } else {
          this.seconds -= 1;
        }
      }, 1000);
    }
  }
}
</script>
