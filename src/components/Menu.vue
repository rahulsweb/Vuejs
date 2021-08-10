<template>
  <div class="container">
    <div class="row">
      <b-card
        class="mb-5"
        bg-variant="dark"
        text-variant="white"
        title="Socket Programming Demo"
      >
        <b-card-text>
          <h5 class="card-title"></h5>
        </b-card-text>
        <br />

        <div class="card col-md-6">
          <div class="card-body">
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
        </div>
      </b-card>
    </div>
    <div :class="classNames">
      <ins
        :className="adsbygoogle"
        :style="{ display: 'block' }"
        :data-ad-client="googleAdId"
        :data-ad-slot="slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
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
    </div>
    <div :class="classNames">
      <ins
        :className="adsbygoogle"
        :style="{ display: 'block' }"
        :data-ad-client="googleAdId"
        :data-ad-slot="slot"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  </div>
</template>
<script>
// import printJS from 'print-js';
export default {

  data() {
    return {
      googleInit: null,
      googleAdId: "ca-pub-3717773214836704",
          timeout: 200,
    classNames: "page-top",
    slot: 394738798,
    };
  },
  mounted() {
    let timeout = 200;
    if (this.timeout) timeout = this.timeout;
    this.googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit);
  },

  methods: {
    listPrograms() {
      this.$router.push({ path: "/list" });
    },
    redirectApps() {
      this.$router.push({ path: "/menu" });
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
  },
};
</script>
<style scoped>
.radius {
  border-radius: 15px;
}
</style>