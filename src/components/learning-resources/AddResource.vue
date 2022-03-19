<template>
  <tail-card>
    <form @submit.prevent="submitData">
      <div>
        <label class="block text-sm font-medium text-gray-700" for="title">Title</label>
        <div class="mt-1">
          <input id="title"
                 ref="titleInput"
                 class="form-input shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block  sm:text-sm border-gray-300 rounded-md"
                 name="title"
                 placeholder="Enter your title"
                 type="text"/>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="description">Description</label>
        <div class="mt-1">
          <textarea id="description"
                    ref="descInput"
                    class="form-input shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-300 rounded-md"
                    name="description"
                    placeholder="Enter your description"
                    type="text"/>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700" for="link">Link</label>
        <div class="mt-1">
          <input id="link"
                 ref="linkInput"
                 class="form-input shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-300 rounded-md"
                 name="link"
                 placeholder="Enter your link"
                 type="text"/>
        </div>
      </div>
      <div>
        <tail-btn class="my-5" type="submit">Submit</tail-btn>
      </div>
    </form>
  </tail-card>
</template>

<script>
export default {
  name: "AddResource",
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },
  }
}

</script>

<style scoped>

</style>