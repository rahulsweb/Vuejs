<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <h2>Single Occurence</h2>
        <b-card bg-variant="dark" text-variant="white" title="Note">
          <b-card-text> The function will not be case sensitive. </b-card-text>
        </b-card>
      </div>
    
      <div class="row mt-10 mb-2">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
            <p>
              Write a function redundant that takes in a string str and returns
              a function that returns str.
            </p>
            <strong>
              Example
              <br />
              const f1 = redundant("apple") f1() ➞ "apple"
              <br />
              const f2 = redundant("pear") f2() ➞ "pear"
              <br />
              const f3 = redundant("") f3() ➞ ""
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
      
    };
  },
  created(){
      let fun=function redundant(name){
       return name;
   }
      alert(fun("rahul"));
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