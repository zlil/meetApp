<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.title}}</h6>
          </v-card-title>
          <v-card-media :src="meetup.imageUrl"
                        height="400px">
          </v-card-media>
          <v-card-text>
            <div>{{ meetup.date}} </div>
            <div class="info--text">When? {{ meetup.date | dateFilter}}, Where? {{ meetup.location }}, What? {{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'], //i'm getting this prop because of this route property 'props' set to true on the router
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.$route.params.id) //instead of using route params can also use the props
                                                                       // for ex. ...loadedMeetup(this.id)
      }
    }
  }
</script>
