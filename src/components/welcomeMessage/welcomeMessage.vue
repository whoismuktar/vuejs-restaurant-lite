<template>
  <div class="welcomeMessage">
      <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import dayjs from "dayjs";
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

export default {
  name: 'WelcomeMessage',
  data () {
    return {
      currentTime2: dayjs().format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome! Your local time iss: ' + this.currentTime2;
    }
  },
  mounted() {
    const setTimer = () => setTimeout(() => {
      this.currentTime = dayjs().format('dddd, MMMM Do YYYY, h:mm:ss a');
      setTimer();
    }, 1000);
    setTimer();
  }
}
</script>

<style>

</style>