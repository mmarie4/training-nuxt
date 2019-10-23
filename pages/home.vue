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
          <app-card :user='getUser'/>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

#content {
  height: calc(100vh - 111px);
  width: 100%;
  display: flex;
}

#cards-container {
  width: 100%;
  display: inline-block;
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
