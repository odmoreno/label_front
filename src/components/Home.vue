<template>
    <div>
        <v-row >
             <v-col :cols="8">
                <v-card
                    class="pa-2 vjs-layout-large"
                    tile
                    outlined> 
                    <video-player  class="video-player-box"
                                    ref="videoPlayer"
                                    :options="playerOptions"
                                    :playsinline="true"
                                    customEventName="customstatechangedeventname"

                                    @play="onPlayerPlay($event)"
                                    @pause="onPlayerPause($event)"
                                    @statechanged="playerStateChanged($event)"
                                    @ready="playerReadied">
                    </video-player>
                </v-card>
            </v-col>
            <v-col :cols="4">
                <v-card
                    class="pa-2"
                    tile
                    outlined> 
                    taggeo
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

export default {
 data: ()=> ({
     videos: [],
     playerOptions: {
      // videojs options
      muted: true,
      language: 'en',
      aspectRatio: '16:9',
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      sources: [{
        type: 'video/mp4',
        src: 'http://localhost:3000/api/video'
      }],
      poster: './assets/logo.png'
    }
 }),
 created (){

 },
 mounted () {
    console.log('this is current player instance object', this.player)
    let hola = this.player.cache_
    console.log(hola)
    console.log(hola.duration)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    },
    formIsValid () {
        return this.title !== '' &&
            this.location !== '' &&
            this.imageUrl !== '' &&
            this.description !== ''
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  components: {
    videoPlayer
  }   
}
</script>