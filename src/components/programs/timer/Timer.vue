<template>
  <div>
    <div class="vx-card col-8 offset-2 float-left">
      <div class="row">
        <!-- <p>
          time reference
          <a
            href="https://stackoverflow.com/questions/45652781/vuejs-start-a-timer-for-every-record"
            >Multiple timer</a
          >
        </p>
        <p>
          time reference in javascript
          <a
            href="https://www.codegrepper.com/code-examples/javascript/display+specific+javascript++timer+for+each+user+"
            >Multiple timer javascript</a
          >
        </p> -->
        <h2>Multiple Timers For different Users</h2>

        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title="First User Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer1')"
              >
                Timer Start
                <b-badge id="timer1" pill variant="danger"></b-badge>
              </button>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title=" Second User Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer2')"
              >
                Timer Start
                <b-badge id="timer2" pill variant="danger"></b-badge>
              </button>
            </b-card-text>
          </b-card>
        </div>
        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title=" Third User Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer3')"
              >
                Timer Start
                <b-badge id="timer3" pill variant="danger"></b-badge>
              </button>
            </b-card-text>
          </b-card>
        </div>

        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title="  Fourth User   Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer4')"
              >
                Timer Start
                <b-badge id="timer4" pill variant="danger"></b-badge>
              </button>
            </b-card-text>
          </b-card>
        </div>

        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title=" Fifth User  Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer5')"
              >
                Timer Start
                <b-badge id="timer5" pill variant="danger"></b-badge>
              </button>
            </b-card-text>
          </b-card>
        </div>

        <div class="col-md-6">
          <b-card
            bg-variant="light"
            text-variant="dark"
            title=" Sixth User  Timer"
            class="mt-10"
          >
            <b-card-text>
              <button
                type="button"
                class="btn btn-info"
                @click.once="start('timer6')"
              >
                Timer Start
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
      track: require("@/assets/audio/sent.mp3"),
    };
  },

  methods: {
    start(id) {
      var fiveMinutes = 30,
        display = document.querySelector(`#${id}`);
      display.textContent = null;
      this.startTimer(fiveMinutes, display);
    },
    startTimer(duration, display) {
      var timer = duration,
        minutes,
        seconds;
      let obj = this;
      let audio = new Audio(obj.track); // path to file

      var starter = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          display.textContent = null;
          audio.play();
          clearInterval(starter);
        }
      }, 1000);
    },
  },
};
</script>
<style  scoped>
.mt-10 {
  margin-top: 10px;
}
</style>