<template>
  <li>
    <div class="grid grid-cols-2 gap-4 auto-cols-max place-content-between">
      <div class="col-span-1 font-bold"><h3>{{ title }}</h3></div>
      <div class="col-end-13">
        <tail-btn @click="deleteResource(id)">Delete</tail-btn>
      </div>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link" class="text-amber-500">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  name: "LearningResource",
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource']
}
</script>

<style scoped>

</style>