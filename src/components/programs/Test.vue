<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <p>
          time reference <a href="https://stackoverflow.com/questions/45652781/vuejs-start-a-timer-for-every-record">Multiple timer</a>
        </p>
        <h2>Debugging Programms</h2>
       
    
    
      <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
             @click="start('timer1')"            >
              Timer
              <b-badge id="timer1" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>
            <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
                 @click="start('timer2')"  
            >
              Timer
              <b-badge id="timer2" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>
                  <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
                 @click="start('timer3')"  
            >
              Timer
              <b-badge id="timer3" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>

            <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
                 @click="start('timer4')"  
            >
              Timer
              <b-badge id="timer4" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>

            <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
                 @click="start('timer5')"  
            >
              Timer
              <b-badge id="timer5" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>

            <div class="col-6">
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Decscription"
          class="mt-10"
        >
          <b-card-text>
               <button
              type="button"
              class="btn btn-info"
                 @click="start('timer6')"  
            >
              Timer
              <b-badge id="timer6" pill variant="danger"></b-badge>
            </button>
          </b-card-text>
        </b-card>
      </div>
    
        </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      obj:{
       
        age:"56"
      }
    };
  },

  methods: {
    start(id){
         var fiveMinutes = 60 * 5,
        display = document.querySelector(`#${id}`);
    this.startTimer(fiveMinutes, display);
    },
    startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
  },
};
</script>
<style  scoped>
.mt-10 {
  margin-top: 10px;
}
</style>