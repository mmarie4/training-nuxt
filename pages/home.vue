<template>
  <div class="container">
      <nuxt-link :to="'/'">
        <button id='backbutton' class='button--grey'>BACK</button>
      </nuxt-link>
      <app-header/>
      <div id='content'>
        <side-menu/>
        <div id="cards-container">
          <app-card :movieList='getMovies'/>
          <app-card :user='getUser' :companyList='getCompanies'/>
        </div>
      </div>
      <app-footer/>
  </div>
</template>

<script>
import Title from '~/components/Title.vue';
import SideMenu from '~/components/SideMenu';
import Footer from '~/components/Footer.vue';
import Card from '~/components/Card.vue';

import axios from 'axios';
import api from "~/api/";

export default {
  components: {
    'app-header': Title,
    'side-menu': SideMenu,
    'app-footer': Footer,
    'app-card': Card
  },
  computed: {
    getUser: function() {
      return this.$store.state.user;
    },
    getMovies: function() {
      var that = this;
      if(that.$store.state.currentActor != '') {
          var movies = this.$store.state.actorList.filter(function(actor) { 
            return actor.name == that.$store.state.currentActor
          })[0].movies;
      } else {
        var movies = []
      }
      return movies;
    },
    getCompanies: async function() {
      var that = this;
      console.log('acess token:', that.$store.state.token);
      const res = await axios.post('https://api.covergo.com/graphql', {
            query: api.companies.getList
        },
        { headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Bearer " + that.$store.state.token
          //"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NzE4MjMxMjAsImV4cCI6MTU3MTkwOTUyMCwiaXNzIjoiaHR0cDovL2NvdmVyZ28tYXV0aCIsImF1ZCI6WyJodHRwOi8vY292ZXJnby1hdXRoL3Jlc291cmNlcyIsImN1c3RvbV9wcm9maWxlIl0sImNsaWVudF9pZCI6ImNvdmVyZ29fY3JtIiwic3ViIjoiNWJkMTcyYjYzNzg1NDU3MTUwNzI2ODhiIiwiYXV0aF90aW1lIjoxNTcxODIzMTIwLCJpZHAiOiJsb2NhbCIsInJvbGUiOiJhZG1pbiIsInRlbmFudElkIjoidGVzdF91YXQiLCJzY29wZSI6WyJjdXN0b21fcHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwYXNzd29yZCJdfQ.lGbrMlBCYhqs0zggB-RDkN3i14j4XQkBn1fs1j4-GZtfHerr5gOeWZl6f2zw7TkmCi4lSXnt1HB1i78BT3i-6kkxAyrxEJAlt13rwgfBQiQLGjgmstBuCcXBJf0g5Ps0NNzlPHepVlD0DWay_d1lJPYXM4jHaRKs3rLMcmr_VRC4ez-lqA2XkwZINA4JFNnhHpPpBHsdo9TKSsGWqX9yK06ikGxEON1AftayTnO7cNXJe9p5G0a82_tIb2tQx2x3OO_zcweZLD2v_wAp6TTWkJL44BMFz3AXkp-63bakwcG1RXAJrDNtMuCLtw10oLWt_VloqSBezulNpzWsFPpVhQ"
        }
        });
        that.$store.commit('companyList', res.data.data.companies.list);
    }
  }
}
</script>

<style>
.container {
  margin: 0 0;
  min-height: 100vh;
  width: 100%;
  display: inline-block;
}

#content {
  height: calc(100vh - 111px);
  width: 100%;
  display: flex;
  align-items:stretch;
  justify-content: center;
  overflow: hidden;
}

#cards-container {
  flex-grow: 1;
  flex-shrink: 0;
}

#backbutton {
  position: absolute;
  background: none;
  border: 1px white solid;
  color: white;
  top: 10px;
  left: 5px;
}

#backbutton:hover {
  background: white;
  color: #35495e;
}

</style>
