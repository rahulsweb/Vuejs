<template>
  <div class="col-8 offset-2">
    <b-card header="Programming Questions">
      <div>
        <b-list-group>
          <b-list-group-item v-for="(item, index) in items" :key="index">
            <hr>
            <b-button
              variant="primary"
              @click="redirectPath(index+1)"
              class="float-left"
              >{{ index + 1 }} </b-button
            >{{ item.title }}</b-list-group-item
          >
        </b-list-group>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "How Much is True ?",
        },
        {
          id: 2,
          title: "Single Occurence",
        },
           {
          id: 3,
          title: "A Redundant Function",
        },

      ],
    };
  },
  methods: {
    redirectPath(path) {
      this.$router.push({ path: `/list/${path}` });
    },
  },
};
</script>
<style  scoped>
</style>