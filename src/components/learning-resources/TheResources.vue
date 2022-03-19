<template>
  <tail-card>
    <tail-btn :mode="storedResBtnMode"
              @click="onTabChange('StoredResources')">
      Stored Resources
    </tail-btn>
    <tail-btn :mode="addResBtnMode"
              @click="onTabChange('AddResource')">Add
      Resource
    </tail-btn>
  </tail-card>
  <keep-alive>
    <component :is="selectedTab"/>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  name: "TheResources",
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js Documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Official Google',
          description: 'The Official Google',
          link: 'https://google.com'
        },
      ]
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'StoredResources' ? 'bg-amber-500 text-white' : null;
    },
    addResBtnMode() {
      return this.selectedTab === 'AddResource' ? 'bg-amber-500 text-white' : null;
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
  methods: {
    onTabChange(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource);
      this.selectedTab = "StoredResources";
    }
  }
}
</script>

<style scoped>

</style>