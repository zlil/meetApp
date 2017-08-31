import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg',
        id: '343244324',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'bla bla'
      },
      {
        imageUrl: 'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/7845/SITours/eiffel-tower-priority-access-ticket-with-host-in-paris-299567.jpg',
        id: '435435436',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'lorm ipsum de lotlsd af'
      }
    ],
    user: {
      id: 'fdgfdfd42',
      registerMeetups: ['sdfdsfdsf123']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload); //push to the meetups array in the store
    }
  },
  actions: {
    createMeetup ({commit}, payload ) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '4354006'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup);
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date >meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => { //return a function that receiving id and find the requested meetup
        return state.loadedMeetups.find((meetup) => {
          return meetup.id == meetupId;
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    }
  }
})
