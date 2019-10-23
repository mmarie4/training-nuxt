<template>
  <div class="container">
      <nuxt-link :to="'/HOME'">
        <button id='backbutton' class='button--grey'>HOME</button>
      </nuxt-link>
      <app-header/>
      <div id='content'>
          <div class="card">
              <h1>{{this.$route.path.slice(8, this.$route.path.length)}}</h1>
              <h2>{{this.$store.state.currentActor}}</h2>
              <p>Here will be the movie description</p>
          </div>
      </div>
      <app-footer/>
  </div>
</template>

<script>
import Title from '~/components/Title.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    'app-header': Title,
    'app-footer': Footer,
  }
}
</script>

<style>
#content {
  height: calc(100vh - 111px);
  width: 100%;
  display: inline-block;
}

h2 {
    color: #35495e;
    margin-bottom: 50px;
}

.card {
  margin: 5%;
  height: auto;
  width: 89%;
  background: white;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 12px 10px #dddddd;
  background: #eeeeef;
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
