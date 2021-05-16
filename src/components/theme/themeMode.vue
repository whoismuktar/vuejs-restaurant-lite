<template>
  <div class="theme light_dark_mode">
      <label class="switchTheme">
        <input v-model="isDarkMode" @change="handleThemeChange" type="checkbox" id="switchInput">
        <div class="slider round">

         <span v-if="isDarkMode" class="toggle_label dark">Dark</span>
         <span v-else class="toggle_label light">Light</span>

        </div>
      </label>
  </div>
</template>

<style lang="scss">
@import '~@/components/theme//themeMode.scss';
</style>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    }
  },
  methods: {
    handleThemeChange() {
      localStorage.setItem("isDarkMode", this.isDarkMode)
      const current = JSON.parse(localStorage.getItem("isDarkMode"));
      this.isDarkMode = current;

      // switch colors
      this.setColors(current);
    },
    setColors(current) {
      if (current) {
        document.body.style.setProperty("--color-light-dark", "black");

        // alternate shade
        document.body.style.setProperty("--color-black", "white");
        document.body.style.color = "white";
      } else if (!current) {
        document.body.style.setProperty("--color-light-dark", "white");

        // revert shade
        document.body.style.setProperty("--color-black", "black");
        document.body.style.color = "black";
      }
    }
  },
  created() {
    // Get dark mode status
    let isDarkMode = localStorage.getItem("isDarkMode");
    let getTypeOf;
    if (isDarkMode == "true" || isDarkMode == "false") {
      isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
      getTypeOf = typeof isDarkMode;
    }

    
    if (isDarkMode == null) { // register event in localStorage
      localStorage.setItem("isDarkMode", false)
    } else if (isDarkMode == true) { // set retrieved data
      this.isDarkMode = isDarkMode;

      // auto set colors
      this.setColors(isDarkMode);
    } else if (typeof isDarkMode != getTypeOf ) { // fallback to false i.e light mode
      localStorage.setItem("isDarkMode", false)
      this.isDarkMode = false;
    }
  }
}
</script>