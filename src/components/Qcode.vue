<template>
<div>
         <div class="row ">
           <div class="card col-md-6 offset-md-3 offset-lg-3 col-lg-6 col-sm-12 col-xs-12">
      <div class="card-body">
     
        <button type="button" class="btn btn-primary" @click="redirect">
         Back
        </button>
      </div>
    <vue-qrcode value="https://www.1stg.me" />

    </div>
     </div>
       

</div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
 
export default {
  components: {
    VueQrcode,
  },
  methods:{
        redirect() {
      this.$router.push({ path: "/scan" });
    },
  }
}
</script>