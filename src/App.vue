<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
    <theme-mode />
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/styles.scss';
</style>
<script>
import Header from '@/components/Header/Header';
import themeMode from '@/components/theme/themeMode';

export default {
  name: 'App',
  components: {
    Header,
    themeMode
  }
}
</script>
