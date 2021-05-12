<template>
  <div>
      <banner
        :backgroundMedia="backgroundMedia"
        :text="text"
        :textDistribution="textDistribution"
        :textVerticalAlignment="textVerticalAlignment"
        :textHorizontalAlignment="textHorizontalAlignment"
       />
      <h1>Welcome</h1>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner"

export default {
    components: {
        Banner
    },
    data () {
        return {
            backgroundMedia: {
                type: "image",
                src: "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fashion-food-poster-background-image_159294.jpg"
            },
            text: "Muktar's Restaurant",
            textDistribution: "top",
            textVerticalAlignment: "top",
            textHorizontalAlignment: "center",
        }
    }

}
</script>

<style>

</style>