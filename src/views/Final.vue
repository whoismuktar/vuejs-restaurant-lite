<template>
  <div>
    <banner
      :backgroundMedia="backgroundMedia"
      :text="text"
      :textDistribution="textDistribution"
      :textVerticalAlignment="textVerticalAlignment"
      :textHorizontalAlignment="textHorizontalAlignment"
    />

    <landing-screen v-if="ingredients.length" :secretIngredients="ingredients" />
    <h3 v-else>
        <span>No scecret formula for you. Be sure to have made a previosu input</span>
        <span>
            <router-link to="/meals"> here</router-link>
        </span>
    </h3>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";
import LandingScreen from "@/components/LandingScreen/LandingScreen";

export default {
  components: {
    Banner,
    LandingScreen,
  },
  data() {
    return {
      ingredients: [],
      backgroundMedia: {
        type: "image",
        src:
          "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fashion-food-poster-background-image_159294.jpg",
      },
      text: "Muktar's Restaurant",
      textDistribution: "top",
      textVerticalAlignment: "top",
      textHorizontalAlignment: "center",
    };
  },
  created() {
    const data = this.$route.params.data;

    // Redirect if params does not exist
    if (!data) {
        return this.$router.push("/meals");
    }

    // Re-structure secret formula
    for (const [key, value] of Object.entries(data)) {
      let formula = {};
      formula.name = key;
      formula.quantity = value;

      this.ingredients.push(formula);
    }
  },
};
</script>

<style></style>
