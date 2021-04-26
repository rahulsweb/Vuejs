<template>
<div>
         <div class="row ">
           <div class="card col-md-6 offset-md-3 offset-lg-3 col-lg-6 col-sm-12 col-xs-12">
      <div class="card-body">
     
        <button type="button" class="btn btn-primary" @click="redirect">
         Back
        </button>
        <br>
          <vue-qrcode text="Rahul App" value="https://rahuls7.netlify.app" path="https://rahuls7.netlify.app" :options="{errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark:'#010599FF',
    light:'#FFBF60FF'
  } }"></vue-qrcode>
      </div>


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