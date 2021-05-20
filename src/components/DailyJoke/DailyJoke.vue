<template>
  <div v-if="jod" class="jod_wrapper">
      <span class="jod_label">Joke of The Day:</span>
      <marquee direction="left" class="jod_marquee">
        {{ jod }}
      </marquee>
  </div>
</template>

<style lang="scss">
@import '~@/components/DailyJoke/DailyJoke.scss';
</style>

<script>
import dailyJoke from "@/assets/js/dailyJoke";

export default {
    data() {
        return {
            jod: "",
        }
    },
    methods: {
        async getJOD() {
            this.jod = await dailyJoke()
         }
    },
    created() {
        this.getJOD();
    }
}
</script>

<style>

</style>