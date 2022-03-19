<template>
  <button
      :class="mode"
      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:text-white hover:bg-amber-500"
      type="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "TailBtn",
  props: ['mode']
}
</script>

<style scoped>

</style>