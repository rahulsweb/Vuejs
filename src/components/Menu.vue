<template>
<div class="container">
  
 <div class="row">

       <div class="card col-md-6">
      <div class="card-body">
        <h6 class="card-title"> Other Apps</h6>
        <p class="card-text">Multiple Apps Demo <b-badge pill variant="danger" >check here</b-badge></p>
        <button type="button" class="btn btn-primary" @click="redirectApps">
       Apps
        </button>
      </div>
    </div>


     <div class="card col-md-6">
      <div class="card-body">
        <h5 class="card-title">Logical Questions For Programming</h5>
        <p class="card-text">Problems</p>
        <button type="button" class="btn btn-primary" @click="listPrograms">
       List of Logical Programs
        </button>
      </div>
    </div>
  </div>
</div>
 
</template>
<script>
// import printJS from 'print-js';
export default {
  data() {
    return {};
  },

  methods: {
  
    listPrograms(){
     this.$router.push({ path: "/list" });
    },
    redirectApps() {
      this.$router.push({ path: "/menu" });
    },

  },
};
</script>
<style scoped>
.radius{
  border-radius :15px;
}
</style>