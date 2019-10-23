<template>
  <div class="card">
    <h2 v-if='user'>Welcome {{user.pseudo}}</h2>
    <h2 v-else>{{getTitle}}</h2>
    <h4 v-if='user'>{{user.email}}</h4>
    <h4 v-else>Then click on a movie to see more details</h4>
    <div v-if='this.$store.state.currentActor != ""' id="movies-container">
          <p :key="movie" v-for="movie in movieList">
            <nuxt-link :to='"movies/" + movie'>
              {{movie}}
            </nuxt-link>
          </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['user', 'movieList'],
  computed: {
    getTitle: function() {
      return this.$store.state.currentActor != "" ? this.$store.state.currentActor : "Please choose an actor" 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card {
  margin: 5%;
  height: auto;
  width: 39%;
  background: white;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 10px #dddddd;
  background: #eeeeef;
  overflow: auto;
}

h1 {
  width: 100%;
  margin: 0;
  color: #5a5a64;
}

h2 {
  margin: 0;
}


h4 {
  margin-bottom: 10%;
  color: #35495e;
}


#movies-container {
  margin: 0;
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}

p {
  width: 80%;
  margin: 5px;
  margin-left: 5%;
  cursor: pointer;
  color: #555555;
}

</style>
