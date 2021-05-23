<template>
  <div>
    <div class="container">
      <b-jumbotron
        bg-variant="info"
        text-variant="white"
        border-variant="white"
      >
        <template #header>Age Calculator</template>

        <template #lead>
          <b-container fluid>
            <b-row>
              <b-col sm="2"> </b-col>
              <b-col sm="4">
                <label :for="`date`"
                  ><b>Today Date</b>
                </label>
                <b-form-input
                  :id="`date`"
                  :state="true"
                  class="text-success bg-light"
                  :type="'text'"
                  readonly
                  v-model="value"
                ></b-form-input>
              </b-col>

              <b-col sm="4">
                <label :for="`date`"> Choose Birthday Date:</label>
                <b-calendar
                  block
                  class="text-danger bg-light border rounded p-2 w-100"
                  v-model="birth"
                  :activeYMD="value"
                  locale="en"
                 :date-disabled-fn="dateDisabled"
                ></b-calendar>
              </b-col>
            </b-row>
          </b-container>
        </template>

        <button
          type="button"
          size="large"
          class="btn btn-primary pl-2 pr-2 m-2"
          @click="calculate"
        >
          Calculate
        </button>
        <button
          type="button"
          size="large"
          class="btn btn-danger pl-2 pr-2 m-2"
          @click="reset"
        >
          Reset
        </button>
        <b-row v-if="birth.length && flag">
          <b-col sm="4"> </b-col>
          <b-col sm="4">
            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-primary w-100 p-4">
                  <strong>
                    {{
                      "The age is " +
                      years +
                      " years " +
                      months +
                      " months " +
                      days +
                      " days "
                    }}</strong
                  >
                </button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      value: "",
      flag: false,
      birth: "",
      years: "",
      months: "",
      days: "",
    };
  },
  created() {
    this.value = moment().format("LLLL");
  },
  methods: {
    calculate() {
      var a = moment(this.birth);
      var b = moment(this.value);
      // var b = moment('{dem_pat_birthyear}', 'MM-YYYY');
      var age = moment.duration(b.diff(a));
      var years = age.years();
      var months = age.months();
      var days = age.days();
      this.years = years; // 1
      this.months = months; // 1
      this.days = days; // 1
      this.flag = true;
    },
    reset() {
      this.flag = false;
      this.birth = "";
    },
    //  dateDisabled(ymd, date) {
    //     // Disable weekends (Sunday = `0`, Saturday = `6`) and
    //     // disable days that fall on the 13th of the month
    //     // const weekday = date.getDay()
    //     // const day = date.getDate()
    //     // Return `true` if the date should be disabled
    //     return true;
    //   }
  },
};
</script>
<style scoped>
.br-20 {
  border-radius: 20px;
}
</style>