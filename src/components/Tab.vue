<template>
  <div id="app">
    <b-tabs>
      <b-tab v-for="(i, index) in tabs" :key="i" :title="`Tab ${i}`">
        <div class="p-3">
          Tab {{ i }}
          <b-button @click="closeTab(index)">Close tab</b-button>
        </div>
      </b-tab>
      <template v-slot:tabs-end>
        <b-nav-item @click.prevent="newTab" href="#">
          <b>+</b>
        </b-nav-item>
      </template>
    </b-tabs>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      tabs: []
    };
  },
  methods: {
    newTab() {
      this.tabs = [...this.tabs, this.tabs.length + 1];
    },
    closeTab(index) {
      this.tabs.splice(index, 1);
    }
  }
};
</script>