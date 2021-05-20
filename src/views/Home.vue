<template>
  <div class="page page__home">
    <welcome-message></welcome-message>
  </div>
</template>

<script>
import welcomeMessage from "@/components/welcomeMessage/welcomeMessage";

export default {
  name: 'Home',
  components: {
    welcomeMessage
  }
}
</script>
