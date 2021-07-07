<template>
	<div>
		<button>

		</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			   audio: [],
			   track:require("@/assets/audio/song.mp3"),
		}
	},
	mounted(){
		this.sound();
		let auth = new google.auth.OAuth2(
    '404149809856-huhpm4nrkdalfiq9772ob01ftck9qa2g.apps.googleusercontent.com',
    'Urktdm52Tc55oYZJ3TAV521X',
    'http://localhost:8080/callback'
);
let credentials = {
    access_token:'ACCESS_TOKEN',
    token_type:'TOKEN_TYPE', // mostly Bearer
    refresh_token:'REFRESH_TOKEN',
    expiry_date:'EXPIRY_TIME'
};
auth.setCredentials(credentials);
// Adding event into the calendarlet calendar = google.calendar({version: 'v3', auth});
    calendar.events.insert({
        auth: auth,
        calendarId: 'primary',
        resource: {
            'summary': 'Google Rahuil Events',
            'description': 'Sample event description',
            'start': {
                'dateTime': '2021-07-0706:09:00.000Z',
                'timeZone':'utc'
            },
            'end': {
                'dateTime': '2019-07-07T07:11:00.000Z',
                'timeZone':'utc'
            },
            'attendees': [],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10},
                ],
            },
            'colorId' : 4 ,
            'sendUpdates':'all',
            'status' : 'confirmed'
        },
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res.data);
        }
    });
}
	},
	methods:{
		sound(){
			   this.audio = new Audio(this.track);
      audio.play();
		},
		stop(){
			 this.audio.pause();
		}
	}
}

</script>