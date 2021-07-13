<template>
  <div class="col-8 offset-2"> 
    <b-card header="Programming Questions">
      <div  >
        <b-list-group>
          <b-list-group-item v-for="(item, index) in items" :key="index">    <b-button variant="primary" @click="redirectPath(item.path)"  class="float-left">{{index+1}}
</b-button>{{
            item.title
            
          }}</b-list-group-item>
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
          path:"first"
        },
      ],
    };
  },
  methods:{
    redirectPath(path){
this.$router.push({ path: `/${path}` });
    }
  }
};
</script>
<style  scoped>
</style>