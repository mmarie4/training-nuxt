<template>
  <div class="container">
      <nuxt-link :to="'/home'">
        <button id='backbutton' class='button--grey'>HOME</button>
      </nuxt-link>
      <app-header/>
      <div id='content'>
          <div class="card">
              <h1>{{this.$route.path.slice(11, this.$route.path.length)}}</h1>
              <h2>Display here some info</h2>
              <p>Here will be the company description</p>
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

<style scoped lang="scss">
.card {
  margin: 5%;
  text-align: center;
  height: 80%;
  width: 80%;
  background: white;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 6px #dddddd;
  background: #eeeeef;
}

#content {
  height: calc(100vh - 111px);
  width: 100%;
  display: inline-block;
}

h2 {
    color: #35495e;
    margin-bottom: 50px;
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
