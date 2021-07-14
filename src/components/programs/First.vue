<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <h2>How Much is True?</h2>
        <b-card bg-variant="dark" text-variant="white" title="Note">
          <b-card-text>
            Return 0 if given an empty array.
            <br />
            All array items are of the type bool (true or false).
          </b-card-text>
        </b-card>
        <div class="mt-10">
          <b-form-radio-group
            id="btn-radios-2"
            v-model="value"
            :options="options"
            button-variant="outline-info"
            size="lg"
            class=" mt-10 check"
            name="radio-btn-outline"
            buttons
          ></b-form-radio-group>
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
      <div class="row mt-10" v-if="trues.length">
        <p class="mt-5">Your Array->{{ trues }}</p>
  
        <p class="mt-2">True ={{ count }}</p>
        <p class="mt-2">False ={{ trues.length - count }}</p>
      </div>
      <div class="row mt-10">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
            <p>
              Create a function which returns the number of true values there
              are in an array.
            </p>
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
      trues: [],
      value: "",
      options: [
        { text: `True`, value: true },
        { text: "False", value: false },
      ],
    };
  },
  methods: {
    add() {
      if (this.trues.length < 8 && this.value !== "")
        this.trues.push(this.value);
      let arr = this.trues.filter((el) => {
        if (el) return el;
      });
      this.count = arr.length;
    },
    reset() {
      this.trues = [];
    },
  },
};
</script>
<style  scoped>
.mt-10 {
  margin-top: 10px;
}
</style>