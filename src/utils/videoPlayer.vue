<template>
    <div>
        <h4>{{source.name }}</h4>
        <video-player  class="video-player-box"
                    ref="videoPlayer"
                    :options="source"
                    :playsinline="true"
                    customEventName="customstatechangedeventname"

                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @statechanged="playerStateChanged($event)"
                    @ready="playerReadied">
        </video-player>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

export default {
    data: () => ({
        newSrc : '',
        /*
        playerOptions: {
            // videojs options
            muted: true,
            language: 'en',
            aspectRatio: '16:9',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
                type: 'video/mp4',
                src: ''
            }],
            poster: './assets/logo.png'
        } */
    }),
    props : ['source'],
    components: {
        videoPlayer
    },

    mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
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
  }
}
</script>