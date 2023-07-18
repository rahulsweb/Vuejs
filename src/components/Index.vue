<template>
  <div>
    <header class="container header active" id="home">
      <div class="header-content ">
        <div class="left-header">
          <div class="h-shape"></div>
          <div class="image">
            <img :src="hero1" alt="" />
          </div>
        </div>
      
        <div class="right-header ">
          <h1 class="name">
            Hi, I'm <span>Rahul Sonawane.</span>
            A Web Developer.
          </h1>
          <Slots>
            <p>
              I'm a Web Developer, I love to create beautiful and functional
              websites.
            </p> </Slots
          >

          <div class="w-full">
          
        <div class="w-full p-2">
                   <button type="button" class=" btn btn-dark  pt-1 pb-1 mt-3 w-full" @click="downloadItem">
        <span class="btn-text">Download My CV</span>
              <span class="btn-icon text-info ml-2"><i class="fas fa-download"></i></span>
         
          </button>
                
  
        </div>
          <div class="w-full p-2">
                    <button type="button" @click="redirectMenu"  class=" btn btn-dark    pt-1 pb-1 mt-3  w-full">
          
              
              <span class="btn-text"> My Project Apps</span>
              <span class="btn-icon text-info ml-2"><i class="fas fa-user"></i></span>
 
               </button>
                   
          </div>
          <div class="w-full p-2">
              <button type="button" @click="redirectMenu"  class=" btn btn-dark    pt-1 pb-1 mt-3 w-full ">
          
              
              <span class="btn-text"> Assignments</span>
              <span class="btn-icon text-info ml-2"><i class="fas fa-calendar"></i></span>
 
               </button>
          </div>
    
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Slots from "./Slots.vue";
import Axios from 'axios';

export default {
  data() {
    return {
      // path: require("@/assets/img/"),
      hero: require("@/assets/img/hero.jpeg"),
       hero1: require("@/assets/img/hero1.jpeg"),
      //  pdf: require("@/assets/img/resume.pdf"),
        publicPath: process.env.BASE_URL
    };
  },
  components: {
    Slots,
  },

  methods: {
  downloadItem () {
    let url='rahul-sonawane.pdf';
     let label='rahul-sonawane';
     let filename = `${(label+'-'+new Date().toJSON().slice(0,10))}.pdf`

    Axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filename
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  },
    redirectMenu() {
      this.$router.push({ path: "/menu" });
    },
  },
};
</script>

<style scoped>
.w-full{
  width: 100% !important;

}
.container {
  /* display: none; */
  /* transform: translateY(-100%) scale(0);
  transition: all 0.4s ease-in-out; */
  background-color: var(--color-primary);
}
</style>