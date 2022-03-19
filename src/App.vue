<script>
import TheResources from "./components/learning-resources/TheResources.vue";

export default {
  components: {
    TheResources
  },
  data() {
    return {}
  }
}
</script>

<template>
  <tail-container class="bg-gray-100">
    <tail-nav>Vue Header</tail-nav>
    <tail-card>
      <TheResources/>
    </tail-card>
  </tail-container>
</template>

<style>

</style>
