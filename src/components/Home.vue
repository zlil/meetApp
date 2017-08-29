<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to:="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to:="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
            <div wrap class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center">
        <p>Join Our Awsome Meetup!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        meetups: [
          {
            imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg',
            id: '343244324',
            title: 'Meetup in New York'
          },
          {
            imageUrl: 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/eiffel-tower-priority-access-ticket-with-host-in-paris-299567.jpg',
            id: '435435436',
            title: 'Meetup in Paris'
          }
        ]
      }
    }
  }
</script>

<style scoped>

  .title {
    position: absolute;
    bottom: 50px;
    color: white;
    fone-size: 2em;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
