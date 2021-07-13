<template>
  <div>
    <h2>{{message}}</h2>
    <div role="group" class="col-md-6">
      <label for="input-live">Name:</label>
      <b-form-input
        id="input-live"
        v-model="message"
        :state="nameState"
        aria-describedby="input-live-help input-live-feedback"
        placeholder="Enter your name"
        trim
      ></b-form-input>

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters
      </b-form-invalid-feedback>

      <!-- This is a form text block (formerly known as help block) -->
      <b-form-text id="input-live-help">Your full name.</b-form-text>
    </div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  computed: {
    nameState() {
      return this.message.length > 100 ? true : false;
    },
  },
  data() {
    return {
      connection: null,
      message: "",
    };
  },

  methods: {
    sendMessage() {
      console.log(this.connection);
      this.connection.send(this.message);
    },
  },

  created() {
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onmessage = function (event) {
      console.log(event);
    };

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };
  },
};
</script>
