<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" temporary>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">MeetApp</router-link></v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>


  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
          { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
          { icon: 'person', title: 'Profile', link: '/profile' },
          { icon: 'face', title: 'Sign Up', link: '/signup'},
          { icon: 'lock_open', title: 'Sign In', link: 'signin' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
