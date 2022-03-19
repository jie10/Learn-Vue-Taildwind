<template>
  <tail-card>
    <form>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="title">Title</label>
        <div class="mt-1">
          <input id="title"
                 class="form-input shadow-sm focus:ring-indigo-500 md:w-full sm:w-full xl:w-72 focus:border-indigo-500 block  sm:text-sm border-gray-300 rounded-md"
                 name="title"
                 placeholder="Enter your title"
                 type="text"/>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="description">Description</label>
        <div class="mt-1">
          <input id="description"
                 class="form-input shadow-sm focus:ring-indigo-500 sm:w-full focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-300 rounded-md"
                 name="description"
                 placeholder="Enter your description"
                 type="text"/>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="link">Link</label>
        <div class="mt-1">
          <input id="link"
                 class="form-input shadow-sm focus:ring-indigo-500 sm:w-full focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-300 rounded-md"
                 name="link"
                 placeholder="Enter your link"
                 type="text"/>
        </div>
      </div>
      <div>
        <tail-btn class="my-5">Submit</tail-btn>
      </div>
    </form>
  </tail-card>
</template>

<script>
export default {
  name: "AddResource"
}
</script>

<style scoped>

</style>