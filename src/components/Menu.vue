<template>
  <div class="container">
    <div class="row">
      <b-card
        class="mb-5"
        bg-variant="dark"
        text-variant="light"
        title="Socket Programming Demo"
      >
        <b-card-text>
          <h5 class="card-title"></h5>
        </b-card-text>
        <br />

        <div class="row ">
          <div class="card " >
            <div class="card-body ">
              <div class="w-full">
            <h5 class="card-title text-dark">File Upload And Download</h5>
            <p class="card-text text-dark">Uploading and Downloading</p>
            <button
              type="button"
              class="btn btn-info"
              @click="redirectUpload"
            >
             Upload Files
              <b-badge pill variant="success">new</b-badge>
            </button>
          </div>
          <br>
         <div class="w-full">
            <h5 class="card-title text-dark">Chat message</h5>
            <p class="card-text text-dark">Message send to Your Friend</p>
            <button
              type="button"
              class="btn btn-info"
              @click="redirectMessages"
            >
              Chat Application
              <b-badge pill variant="danger">coming soon</b-badge>
            </button>
          </div>
          <br>
          <div class="w-full">
            <h5 class="card-title text-dark">Campare Sites</h5>
            <p class="card-text text-dark">Enter your product</p>
            <button type="button" class="btn btn-info" @click="redirectCampare">
              Compare Products
              <b-badge pill variant="success">Check here</b-badge>
            </button>
          </div>


            </div>
          </div>
 
        </div>
      </b-card>
    </div>

    <div class="row">
      <div class="card col-md-6">
        <div class="card-body">
          <h6 class="card-title">Other Apps</h6>
          <p class="card-text">
            Multiple Apps Demo
            <b-badge pill variant="danger">check here</b-badge>
          </p>
          <button type="button" class="btn btn-primary" @click="redirectApps">
            Apps
          </button>
        </div>
      </div>

      <div class="card col-md-6">
        <div class="card-body">
          <h5 class="card-title">Logical Questions For Programming</h5>
          <p class="card-text">Problems</p>
          <button type="button" class="btn btn-primary" @click="listPrograms">
            List of Logical Programs
          </button>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-body">
          <h5 class="card-title">Device Embeded</h5>
          <p class="card-text">Devices Demos</p>
          <button
            type="button"
            class="btn btn-primary"
            @click="redirectDevices"
          >
            Devices
          </button>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-body">
          <h5 class="card-title">Play Games</h5>
          <p class="card-text">Games For entertainment</p>
          <button type="button" class="btn btn-primary" @click="redirectGames">
            Games Apps
          </button>
        </div>
      </div>
      <div class="card col-md-6">
        <div class="card-body">
          <h5 class="card-title">Timer Demo</h5>
          <p class="card-text">Timer related demos</p>
          <button type="button" class="btn btn-primary" @click="redirectTimer">
            Multiple Timer
          </button>
        </div>
      </div>
         <div class="card col-md-6">
        <div class="card-body">
          <h5 class="card-title">Pusher</h5>
          <p class="card-text">Pusher plugin</p>
          <button type="button" class="btn btn-primary" @click="redirectPusher">
            Pusher plugin programming
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import printJS from 'print-js';
export default {
  data() {
    return {};
  },
  methods: {
    listPrograms() {
      this.$router.push({ path: "/list" });
    },
    redirectApps() {
      this.$router.push({ path: "/apps" });
    },
    redirectDevices() {
      this.$router.push({ path: "/devices" });
    },
    redirectGames() {
      this.$router.push({ path: "/games" });
    },
    redirectMessages() {
      this.$router.push({ path: "/messages" });
    },
    redirectUpload() {
      this.$router.push({ path: "/upload" });
    },
    redirectTimer() {
      this.$router.push({ path: "/timer" });
    },
    redirectCampare() {
      this.$router.push({ path: "/campare" });
    },
     redirectPusher() {
      this.$router.push({ path: "/pusher" });
    },
  },
};
</script>
<style scoped>
.flex-inline{
  display: flex;
}
.radius {
  border-radius: 15px;
}
</style>