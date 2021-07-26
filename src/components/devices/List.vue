<template>
<div class="container">
  
 <div class="row">

       <div class="card col-md-6">
      <div class="card-body">
        <h6 class="card-title"> Bluetooth</h6>
        <p class="card-text">Bluetooth File Transfer <b-badge pill variant="danger" >Coming soon</b-badge></p>
        <button type="button" class="btn btn-primary" @click="bluetooth">
       Connect Bluetooth
        </button>
      </div>
    </div>
 <div class="card col-md-6">
      <div class="card-body">
        <h6 class="card-title"> Tab close event</h6>
        <p class="card-text">Close <b-badge pill variant="danger" >Coming soon</b-badge></p>
        <button type="button" class="btn btn-primary" @click="tabClose">
       Tab Close
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
  
    bluetooth(){
     this.$router.push({ path: "/devices/bluetooth" });
    },
    tabClose(){
           this.$router.push({ path: "/devices/tab" });

    }

  },
}
</script>
<style  scoped>

</style>