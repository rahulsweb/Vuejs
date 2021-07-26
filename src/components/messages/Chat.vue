
<template>
  <div>
    <!-- Login section -->
    <div class="col-8 offset-2" v-if="!name">
      <b-card
        class="card-chat1"
        bg-variant="dark"
        text-variant="info"
        title="Join Group"
      >
        <b-card-text>
          <h5 class="card-title">Welcome</h5>
        </b-card-text>
        <label><b>Enter Your Name</b> </label>
        <b-form-input
          :id="`name`"
          :state="true"
          class="text-success bg-light"
          :type="'text'"
          v-model="userName"
          @keyup.enter="updateUsername"
        ></b-form-input>
        <button type="button" class="btn btn-info mt-2" @click="updateUsername">
          Join Group
        </button>
      </b-card>
    </div>
    <!-- Chat section -->
    <div class="col-8 offset-2" v-else>
      <b-card
        class="card-chat"
        bg-variant="dark"
        text-variant="white"
        title="Whats App Chatting Group"
      >
        <b-card-text>
          <h5 class="card-title">
            Welcome <b-badge pill variant="danger">{{ name }}</b-badge>
          </h5>
        </b-card-text>
      </b-card>
      <b-modal
        v-model="show"
        title="Update Message"
        @show="resetModal"
        @hidden="resetModal"
        @ok="updateMessage"
      >
      
        <b-form-input
          id="name-input"
          v-model="textMessage"
          required
          ref="message"
        ></b-form-input>
      </b-modal>
      <div class="card">
        <div class="card-body">
          <div
            class="border pl-2 pt-1 ml-2 message-text mb-2"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div
              @dblclick="editMessage(message.id, message)"
              :class="[message.username == name ? activeClass : '', errorClass]"
            >
              <span class="mg-text mr-2 ml-2">{{ message.username }}</span>
              <p class="message pt-1 mr-2 ml-2">{{ message.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <input
        v-model="showMessage"
        type="text"
        class="mt-3 mr-2 pl-2 pr-2"
        @keyup.enter="sendMessage"
      />
      <button
        class="btn btn-primary mt-2"
        :disabled="!showMessage.length"
        @click="sendMessage"
      >
        Send
      </button>
      <button
        v-if="name == 'firebase'"
        type="button"
        class="btn btn-danger ml-5 mt-2"
        @click="deleteAll"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<script>
import fire from "../../fire";
import $ from "jquery";
export default {
  data() {
    return {
      flag: false,
      userName: "",
      name: null,
      showMessage: "",
      messages: [],
      activeClass: "text-light bg-dark  text-align-right",
      errorClass: "text-primary text-align-left",
      isActive: false,
      track: require("@/assets/audio/sent.mp3"),
      textMessage: "",
      submittedNames1: [],
      show: false,
    };
  },
  watch: {
    textMessage(value) {
      return value;
    },
  },
  methods: {
    resetModal() {
      this.textMessage = "";
    },

    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      if (this.showMessage.length == 0) return false;
      const message = {
        text: this.showMessage,
        username: this.name,
      };
      fire.database().ref("messages").push(message);
      this.showMessage = "";
    },
    editMessage(key, message) {
  
      if(message.username==this.name){
          this.key = key;
      this.textMessage = message.text;
      this.show = true;
      $('#name-input').val( this.textMessage);
        
      }
    return false;
    },
    updateMessage() {
      console.log( this.$refs.message)
      const itemsRef = fire.database().ref("messages");
      itemsRef.child(this.key).update({ text: this.textMessage });
      this.show = false;
    },
    deleteAll() {
      if (this.name == "firebase") {
        let db = fire.database().ref("messages");
        db.remove();
      }
    },
    displayMessage() {
      let viewMessage = this;
      const itemsRef = fire.database().ref("messages");
      itemsRef.on("value", (snapshot) => {
        let data = snapshot.val();
        let messages = [];
        let audio = new Audio(this.track); // path to file
        if (this.flag) audio.play();
        this.flag = true;

        Object.keys(data).forEach((key) => {
          if (data[key].text.length) {
            messages.push({
              id: key,
              username: data[key].username,
              text: data[key].text,
            });
          }
        });

        viewMessage.messages = messages;
      });
    },
  },
  mounted() {
    this.displayMessage();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.login {
  background: #fff;
  width: 80%;
  height: 50vh;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
.message-body {
  width: 80%;
  height: 80vh;
  margin: auto;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-body input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  height: 75vh;
  margin: auto;
}
.card-body {
  min-height: 50vh;
  overflow-x: scroll;
}
.text-align-left {
  text-align: left;
}
.text-align-right {
  text-align: right;
}
.card-chat {
  height: 20vh !important;
}
.card-chat1 {
  height: 50vh !important;
}
</style>