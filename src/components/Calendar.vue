<template>
  <div>
    <div v-if="!showFullCalendar">
          <div class="authentification">
      <h2>Google Calendar event import/export</h2>

      <button
        v-if="!authorized"
        class="btn btn-primary"
        @click="handleAuthClick"
      >
        Sign In
      </button>
      <button
        v-if="authorized"
        class="btn btn-primary"
        @click="handleSignoutClick"
      >
        Sign Out
      </button>
    </div>
    <hr />
    <div v-if="authorized" class="row">
      <div class="card-body col-md-6">
        <button class="btn btn-primary float-right" @click="addEvent">
          Add Events
        </button>
      </div>
      <div v-if="authorized" class="card-body col-md-6">
        <button class="btn btn-primary float-left" @click="exportEvents">
          Export Events
        </button>
      </div>
    </div>

    <div v-if="authorized" class="card-body">
      <p class="card-text">Events list</p>
      <button class="btn btn-primary" @click="getData">Get Data</button>
    </div>


    <div id="events"  v-if="authorized && items">
      <!-- <pre v-html="items"></pre> -->
      <div v-if="items.length">
              <div  v-for="(item, index) in items" :key="index" class="card-body">
        <span>Title</span>=<strong>{{ item.summary }}</strong>
        <br />
        <span>URL</span>=<a :href="item.htmlLink">Event Link</a>
        <br />
        <span>Email</span>=<strong>{{ item.organizer.email }}</strong>
        <br />
        <span>Event Date</span>=<strong>{{ dateFormat(item.start) }}</strong>
      </div>
      </div>
      <div v-else>
        <strong class="text-danger">Events Not Found</strong>
      </div>

    </div>
    </div>

    <div class="card-body w-full">
      <div class="row">
        <div class="card col-md-6">
          <div class="card-body">
            <p class="card-text">Calendar Display</p>
            <button
              class="btn btn-success"
              @click="showFullCalendar = !showFullCalendar"
            >
              {{ showFullCalendar ? "Hide" : "Display" }} Calendar
            </button>
          </div>
        </div>
        <div class="card col-md-6"   v-if="showFullCalendar">
          <div class="card-body">
            <p class="card-text">Get Events From Google Calendar</p>
            <button
            
              class="btn btn-success ml-5"
              @click="syncGoogle"
            >
              Sync Google
            </button>
          </div>
        </div>
            <div class="card offset-3 col-md-6"    v-if="showFullCalendar">
          <div class="card-body">
            <p class="card-text">Remove All Events From Calendar</p>
        <button
     
        class="btn btn-success ml-5"
        @click="removeEvents"
      >
        Remove Google Events
      </button>
          </div>
        </div>
      </div>

     
    </div>
    <div v-if="showFullCalendar" class="card-body w-full">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
// Client ID and API key from the Developer Console
const CLIENT_ID =
  "404149809856-huhpm4nrkdalfiq9772ob01ftck9qa2g.apps.googleusercontent.com";
const API_KEY = "AIzaSyA_6a682yi-FOWpbyvrzRtmk53VZd6PSdU";
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      items: undefined,
      api: undefined,
      authorized: false,
      showFullCalendar: false,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
          timeGridPlugin,
        ],
        googleCalendarApiKey: "AIzaSyDEAnqdvwyMVhFgLnr8UUVKcT8alowkd1w",
        eventSources: [],
        initialView: "timeGridWeek",
        headerToolbar: {
          right: "prev,next",
          tight: "title",
          center: "timeGridDay,timeGridWeek,dayGridMonth",
        },
        contentHeight: "auto",
              editable: true,
              eventDisplay:"list-item",
        selectable: true,
        selectMirror: false,
        dayMaxEvents: true,
        weekends: true,
        eventResizableFromStart:true,
        eventStartEditable:true,

      },
    };
  },

  created() {
    this.api = window.gapi;
    this.handleClientLoad();
  },

  methods: {
    syncGoogle() {
       this.calendarOptions.eventSources = [];
      let events = {
        googleCalendarId: "rahulsonawanen@gmail.com",
      };
      this.calendarOptions.eventSources.push(events);
    },
    removeEvents() {
      // let events=    {
      //     googleCalendarId: ''
      //   };
      this.calendarOptions.eventSources = [];
    },
    dateFormat(dateObject) {
      return moment(dateObject.dateTime).format("ddd, DD MMM YYYY");
    },
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    handleClientLoad() {
      this.api.load("client:auth2", this.initClient);
    },

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    initClient() {
      let vm = this;

      vm.api.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then((res) => {
          console.log("initClient", res);
          // Listen for sign-in state changes.
          vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
        });
    },
    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    exportEvents() {},
    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */

    addEvent() {
      var events = [
        {
          summary: "Rahul First Event",
          location: "Pune",
          description: "My First Event Added",
          start: {
            dateTime: "2021-07-31T09:00:00-01:00",
          },
          end: {
            dateTime: "2021-07-31T09:00:00-01:00",
          },
        },
        {
          summary: "Neosoft",
          location: "Pune",
          description: "Neosoft Appointment",
          start: {
            dateTime: "2021-07-29T09:00:00-01:00",
          },
          end: {
            dateTime: "2021-07-29T09:00:00-01:00",
          },
        },
        {
          summary: "Today Is My Session",
          location: "Pune",
          description: "Session  Today",
          start: {
            dateTime: "2021-07-28T09:00:00-01:00",
          },
          end: {
            dateTime: "2021-07-28T09:00:00-01:00",
          },
        },
      ];
      // let obj=this;
      console.log("rahul calendar", this.api.client.calendar);
      // var request = this.api.client.calendar.events.insert({
      //   'calendarId': 'primary',
      //   'resource': event
      // });
      let batch = this.api.client.newBatch();
      events.map((el) => {
        batch.add(
          this.api.client.calendar.events.insert({
            calendarId: "primary",
            resource: el,
          })
        );
      });

      // batch.add(this.api.client.calendar.events.insert({
      //     'calendarId': 'primary',
      //     'resource': events[1]
      // }));
      // batch.add(this.api.client.calendar.events.insert({
      //     'calendarId': 'primary',
      //     'resource': events[2]
      // }));

      batch.then(function () {
        alert("your event added successfully");
        console.log("all jobs done!!!");
      });

      // request.execute(function(event) {

      //   obj.appendPre('Event created: ' + event.htmlLink);
      // });
    },
    listEvents() {
      let obj = this;
      this.api.client.calendar.events
        .list({
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "startTime",
        })
        .then(function (response) {
          var events = response.result.items;
          obj.appendPre("Upcoming events:");

          if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              obj.appendPre(event.summary + " (" + when + ")");
            }
          } else {
            obj.appendPre("No upcoming events found.");
          }
        });
    },
    appendPre(message) {
      var pre = document.getElementById("content");
      var textContent = document.createTextNode(message + "\n");
      pre.appendChild(textContent);
    },
    /**
     *  Sign in the user upon button click.
     */
    handleAuthClick(event) {
      console.log("handleAuthClick event", event);
      Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then((res) => {
        console.log("handleAuthClick res", res);
        this.authorized = true;
      });
    },

    /**
     *  Sign out the user upon button click.
     */
    handleSignoutClick(event) {
      console.log("handleSignoutClick event", event);

      Promise.resolve(this.api.auth2.getAuthInstance().signOut()).then(
        (res) => {
          console.log("handleSignoutClick res", res);

          this.authorized = false;
        }
      );
    },

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    getData() {
      let vm = this;

      vm.api.client.calendar.events
        .list({
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "startTime",
        })
        .then((response) => {
          vm.items = response.result.items;
          // vm.items = this.syntaxHighlight(response.result.items);
          // console.log(vm.items);

          // let data = vm.items.replace(/<[^>]+>/g, "");
          // vm.items = data;
        });
    },

    syntaxHighlight(json) {
      if (typeof json != "string") {
        json = JSON.stringify(json, undefined, 2);
      }
      json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE]?\d+)?)/g,
        (match) => {
          var cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return '<span class="' + cls + '">' + match + "</span>";
        }
      );
    },
  },
};
</script>
<style  scoped>
hr {
  border: 1px solid black;
  margin: 30px;
}

pre {
  outline: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
  overflow-x: auto;
}

.string {
  color: green;
}

.number {
  color: purple;
}

.boolean {
  color: blue;
}

.null {
  color: magenta;
}

.key {
  color: black;
}
</style>