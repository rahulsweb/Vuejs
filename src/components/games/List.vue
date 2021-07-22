<template>
<div class="container">
  
 <div class="row">

       <div class="card col-md-6">
      <div class="card-body">
        <h6 class="card-title"> Chess Game</h6>
        <p class="card-text">Play Chess game <b-badge pill variant="danger" >Coming soon</b-badge></p>
        <button type="button" class="btn btn-primary" @click="chess">
      play here
        </button>
      </div>
    </div>



  </div>
</div>
</template>
<script>
export default {
      data() {
    return {};
  },

      methods: {
  
    chess(){
     this.$router.push({ path: "/games/chess" });
    },

  },
}
</script>
<style  scoped>

</style>