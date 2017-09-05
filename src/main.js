import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as Firebase from 'firebase'
import AlertComp from './components/Shared/Alert.vue'


Vue.use(Vuetify)
Vue.use(router)

Vue.config.productionTip = false
Vue.filter('dateFilter', DateFilter)
/* register component globally */
Vue.component('app-alert', AlertComp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    Firebase.initializeApp({
      apiKey: 'AIzaSyDd-fK3kTem_toAfTLWo4DcEVBrgWJuV6M',
      authDomain: 'meetapp-b2ca1.firebaseapp.com',
      databaseURL: 'https://meetapp-b2ca1.firebaseio.com',
      projectId: 'meetapp-b2ca1',
      storageBucket: 'meetapp-b2ca1.appspot.com',
      messagingSenderId: '147947745237'
    })

    this.$store.dispatch('loadMeetups')
  }
})
