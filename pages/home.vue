<template>
  <div class="container">
      <nuxt-link :to="'/'">
        <button id='backbutton' class='button--grey'>BACK</button>
      </nuxt-link>
      <app-header/>
      <div id='content'>
        <side-menu/>
        <div id="cards-container">
          <app-card :user='getUser'/>
          <app-card :movieList='getMovies'/>
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
