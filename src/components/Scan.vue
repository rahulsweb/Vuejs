<template>
  <div class="container">
       <div class="row ml-2 mr-2" >
           <div class="card">
     
     
        <button type="button" class="btn btn-primary" @click="redirectHome">
         Home
        </button>
     

    </div>
     </div>
     <br>
     <div class="row mt-1 ml-2 mr-2">
           <div class="card col-md-6 offset-md-3 offset-lg-3 col-lg-6 col-sm-12 col-xs-12">
      <div class="card-body">
        <h5 class="card-title">Sample QR code</h5>
        <p class="card-text "><b class="text-danger">Note:Allow Camera permision in Chrome browser site setting for this site if camera is not open.</b></p>
        <button type="button" class="btn btn-primary" @click="redirect">
          Click Here
        </button>
      </div>
    </div>
     </div>
      <div class="row mt-1 ml-2 mr-2">
   
    <div class="col-md-6 offset-md-3 offset-lg-3 col-lg-6 col-sm-12 col-xs-12 mt-1">
    <p>
     <b> Track function:</b>
      <!-- <select class="form-select" aria-label="Default select example" v-model="selected">
        <option v-for="option in options" :key="option.text" :value="option">
          {{ option.text }}
        </option>
      </select> -->
      
      <v-select     name="scan" label="text" v-model="selected" :options="options"/>
      
    </p>
    </div>
  
  </div>
         <button type="button"  :class="[on ? activeClass : offClass ]" @click="on=!on">
          <strong>Torch -: {{torch}}</strong>
        </button>
    <qrcode-stream :torch="on" :key="_uid" :track="selected.value" @init="logErrors"  @detect="onDetect"/>
  </div>
</template>

<script>
// import { QrcodeStream } from '../../../../src'
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

export default {
   components: {
  
    "v-select": vSelect,
  },

  // components: { QrcodeStream },

  data () {
    return {
      options:[
         { text: "outline", value: this.paintOutline },
      { text: "centered text", value: this.paintCenterText },
      { text: "bounding box", value: this.paintBoundingBox },
      ],
      on:true,
     
       activeClass: 'btn btn-success',
        offClass: 'btn btn-danger',
      selected:  { text: "centered text", value: this.paintCenterText },
    }
  
  },

computed:{
  torch(){
    if(!this.on)
      return "Off";
      return "On";
  }
},
  methods: {
   
    paintOutline (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [ firstPoint, ...otherPoints ] = detectedCode.cornerPoints

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },

    paintBoundingBox (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode

        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },

    paintCenterText (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox, rawValue } = detectedCode

        const centerX = boundingBox.x + boundingBox.width/ 2
        const centerY = boundingBox.y + boundingBox.height/ 2

        const fontSize = Math.max(12, 50 * boundingBox.width/ctx.canvas.width)
        console.log(boundingBox.width, ctx.canvas.width)

        ctx.font = `bold ${fontSize}px sans-serif`
        ctx.textAlign = "center"

        ctx.lineWidth = 3
        ctx.strokeStyle = '#35495e'
        ctx.strokeText(detectedCode.rawValue, centerX, centerY)

        ctx.fillStyle = '#5cb984'
        ctx.fillText(rawValue, centerX, centerY)
      }
    },

    logErrors (promise) {
      promise.catch(console.error)
    },
     redirect() {
      this.$router.push({ path: "/code" });
    },
      redirectHome() {
      this.$router.push({ path: "/" });
    },
  }

}
</script>
