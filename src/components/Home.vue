<template>
    <div>
        <v-row >
             <v-col :cols="8">
                <v-card
                    class="pa-2 vjs-layout-large"
                    tile
                    outlined> 
                    <app-video :source="playerOptions"></app-video>
                </v-card>
            </v-col>
            <v-col :cols="4">
                <v-card
                    class="pa-2"
                    tile
                    outlined> 
                    <h3>Annotation tool</h3>
                    <div>
                      <v-form id="dropdown-example">
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="my-2"
                              label="Start"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="my-2"
                              label="End"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <p>Postura</p>
                            <v-overflow-btn
                              class="my-2"
                              :items="dropdown_font"
                              label="Clasificación"
                              target="#dropdown-example"
                            ></v-overflow-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="my-2"
                              label="Start"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              class="my-2"
                              label="End"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <p>Postura</p>
                            <v-overflow-btn
                              class="my-2"
                              :items="dropdown_font"
                              label="Clasificación"
                              target="#dropdown-example"
                            ></v-overflow-btn>
                          </v-col>
                        </v-row>
                        <v-row>
                          <div class="text-center">
                            <v-btn class="mx-2" fab dark color="indigo" right>
                              <v-icon dark>mdi-plus</v-icon>
                            </v-btn>
                          </div>
                        </v-row>
                      </v-form>
                      <v-row>
                      <v-col :cols="6" class="d-flex flex-row-reverse">
                        <v-btn center block  color="secondary" v-on:click="test">Next</v-btn>
                      </v-col>
                    </v-row>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
import videoPlayer from '../utils/videoPlayer.vue';
import slider from '../utils/slider.vue';

export default {
 data: ()=> ({
     videos: ['2074', '2077', '2083', '2085', '2096', '2097', '2100'],
     source: '',
     playerOptions: {},
     id: '2074',
     index : 0,
     size: 0,
     dropdown_font: ['Mala, Tipo: #1', 'Mala, Tipo: #2', 'Buena, Tipo: #1', 'Buena, Tipo: #2'],
 }),
 created (){
   this.getVideoById(this.id);
   //this.getVideotest();
 },
 components: {
   'app-video': videoPlayer,
   'slider-btn':slider
 },
  computed: {
    formIsValid () {
        return this.title !== '' &&
            this.location !== '' &&
            this.imageUrl !== '' &&
            this.description !== ''
    }
  },
  methods: {
    getVideoById (id) {
      console.log(id)
        this.axios.get(`video/${id}`)
        .then(res => {
          console.log(res)
          console.log(res.config.url)
          let url = res.config.baseURL + '/' + res.config.url
          this.source = url
          console.log('src: ' + this.source)
          this.createPlayerOptions()
          console.log('Options: ')
          console.log(this.playerOptions)
        })
        .catch(error => console.log(error))
    },
    getVideotest () {
      console.log('Video test: ')
      this.axios.get('videotest')
        .then(res => {
          console.log(res)
          console.log(res.config.url)
          let url = res.config.baseURL + '/' + res.config.url
          this.source = url
          console.log('src: ' + this.source)
          this.createPlayerOptions()
          console.log('Options: ')
          console.log(this.playerOptions)
        })
        .catch(error => console.log(error))
    },
    createPlayerOptions() {
      this.playerOptions = { 
        muted: true,
        name: this.id,
        language: 'en',
        aspectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
            type: 'video/mp4',
            src: this.source
        }],
      }
    },
    nextVideo(){
      try {
        console.log('Next video...')
        this.index = this.index + 1
        console.log('Index: ' + this.index)
        if (this.index > this.size -1) {
          console.log('entro')
          this.index = 0
        }
      } catch (error) {
        console.log(error)
      }
      let currentId = this.videos[this.index]
      this.id = currentId
      console.log(currentId)
      this.getVideoById(currentId);
      
    },
    async test (){
      await (this.index = this.index + 1)
      await console.log(this.index)
      if ( await (this.index > this.videos.length -1)) {
        console.log('entro:' + this.index)
        this.index = 0
      }
      let currentId = this.videos[this.index]
      this.id = currentId
      console.log(currentId)
      this.getVideoById(currentId);
    }
  }
}
</script>