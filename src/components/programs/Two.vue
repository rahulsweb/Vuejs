<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <h2>Single Occurence</h2>
        <b-card bg-variant="dark" text-variant="white" title="Note">
          <b-card-text> The function will not be case sensitive. </b-card-text>
        </b-card>
        <div class="mt-10">
          <b-form-group
            label="Text input with formatter (on input)"
            label-for="input-formatter"
            description="We will convert your name to lowercase instantly"
            class="mb-0"
          >
            <b-form-input
              id="input-formatter"
              v-model="text1"
              placeholder="Enter your name"
              :formatter="formatter"
              class="col-6 offset-3"
            ></b-form-input>
          </b-form-group>
          <p><b>Value:</b> {{ text1 }}</p>
        </div>
      </div>
      <div class="mt-3">
        <button type="button" size="lg" class="btn btn-primary" @click="add">
          Add
        </button>
        <button
          type="button"
          size="lg"
          class="btn btn-danger ml-2 pr-2"
          @click="reset"
        >
          Reset
        </button>
      </div>
      <div class="row mt-10">
        <p class="mt-2">Single Occurence ={{ single }}</p>
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
              Create a function that, given a string str, finds a letter that
              has a single occurrence. Return the letter in uppercase. If the
              input is empty, return an empty string "".
            </p>
            <strong>
              Example
              <br />
              singleOccurrence("EFFEAABbc") ➞ "C"
              <br />
              singleOccurrence("AAAAVNNNNSS") ➞ "V"
              <br />
              singleOccurrence("S") ➞ "S"
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
      text1: "",
      single: "No Occurence Found in your string",
    };
  },
  methods: {
    add() {
      this.single="";
      let str = this.text1;
     
      let upper = str.toUpperCase();
      // var array = JSON.parse("[" + upper + "]");
      // alert(array)
     let array= upper.split('');
      let temp = array;
      array.map((el) => {
        this.singleOccurence(el,temp)
      });

    },
    reset() {
      this.single="";
      this.text1="";
    },
    singleOccurence(value,arr){
      let count=0;
      arr.map(el=>{
        (el==value) ? count++:''; 
      })
      if(count==1){
          this.single+=value+"-";
      }
     
       
    },
    formatter(value) {
      return value;
      // return value.toLowerCase()
    },
  },
};
</script>
<style  scoped>
.mt-10 {
  margin-top: 10px;
}
</style>