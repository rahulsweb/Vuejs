<template>
  <div>
  
      <div class="card col-md-6">
      <div class="card-body">
        <p class="card-text">Get Data</p>
        <button type="button" class="btn btn-success text-light" @click="getStates">
         Get
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        states:[]
      }
    },
    created(){
    
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      getStates(){
         const options = {
        url: 'https://api.covidtracking.com/v1/states/current.json',
        method: 'GET',
        // data: {
        //   email: 'user@example.com',
        //   password: 'pasw0rd'
        // }
      }
      //       axios.get('https://api.covidtracking.com/v1/states/current.json',{
      //           headers: {
      //     'Access-Control-Allow-Origin': '*',
          
      //  }
      //       }).then(response=>{
      //           console.log("rahul",response)
      //       }).catch(function(error){
      //           console.log('erros : ',error);
      //       })  
        this.$axios(options)
      .then((res) => {
        console.log('Login suceeded!',res)
      })
      .catch((err) => {
        console.error('Login failed.',err);
      })
    //   fetch("https://api.npms.io/v2/search?q=vue")
    // .then(response => response.json())
    // .then(data => (this.totalVuePackages = data.total));
      }
    }
  }
</script>