<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList :stores="stores" />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import StoreList from '@/components/StoreList/StoreList';
import stores from "@/assets/stores/stores";

var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

export default {
  name: 'Stores',
  components: {
    StoreList
  },
  data () {
    return {
      currentTime: dayjs().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      stores: []
    }
  },
  methods: {
    getStores() {
        this.stores = stores();
      }
  },
  created() {
    this.getStores();
  },
  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list! Your local time is: ' + this.currentTime;
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
