<template>
  <ul class="space-y-3" role="list">
    <LearningResource v-for="res in resources" :key="res.id" :description="res.description" :link="res.link"
                      :title="res.title"
                      class="bg-white shadow overflow-hidden rounded-md px-6 py-4"/>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  name: "StoredResources",
  components: {
    LearningResource
  },
  inject: ['resources']
}
</script>

<style scoped>

</style>