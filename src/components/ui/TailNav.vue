<template>
  <tail-card>
    <div class="shadow py-3 px-3 bg-white">
      <h1 class="text-4xl text-center font-bold">
        <slot/>
      </h1>
    </div>
  </tail-card>
</template>

<script>
export default {
  name: "TailNav"
}
</script>

<style scoped>

</style>