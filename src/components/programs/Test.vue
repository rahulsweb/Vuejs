<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <h2>Debugging Programms</h2>
       
      </div>
    
      <div class="row mt-10 mb-2">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
          <strong v-if="'name' in obj">
            {{obj.name}}
          </strong>
                   <strong v-if="obj.name">
            {{obj.name}}
          </strong>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj:{
       
        age:"56"
      }
    };
  },
  created(){

  },
  methods: {
   
  },
};
</script>
<style  scoped>
.mt-10 {
  margin-top: 10px;
}
</style>