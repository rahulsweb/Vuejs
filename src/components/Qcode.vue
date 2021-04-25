<template>
<div>
         <div class="row ">
           <div class="card col-md-6 offset-md-3 offset-lg-3 col-lg-6 col-sm-12 col-xs-12">
      <div class="card-body">
     
        <button type="button" class="btn btn-primary" @click="redirect">
         Back
        </button>
      </div>

      <vue-qrcode value="https://rahuls7.netlify.app" tag="svg" :options="{ width: 148,type:'image/png',maskPattern:7,quality:1,color:{ dark: '#32a852', light: '#ffffffff' } }"></vue-qrcode>

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
      scan(){
          VueQrcode.toDataURL('I am a pony!')
  .then(url => {
    console.log(url)
    alert(url)
  })
  .catch(err => {
    console.error(err)
  })
      },
        redirect() {
      this.$router.push({ path: "/scan" });
    },
  }
}
</script>