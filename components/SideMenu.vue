<template>
    <div>
        <h4>Actors</h4>
        <p :menuList="actorList" :key="actor" v-for="actor in actorList" @click="handleClick(actor)">{{actor}}</p>
    </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
      return {
          actorList: this.$store.state.actorList
      }
  },
  methods: {
      handleClick: function(actor) {
          this.$store.commit('currentActor', actor);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  margin: 20px;
  height: calc(100% - 40px);
  width: 20vh;
  text-align: left;
  background: #35495e;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0px 8px 10px 10px #cac7c7;
}

h4 {
    margin: 5px;
    font-size: 18px;
    color: white;
}

p {
    margin: 5px;
    margin-left: 5px;
    color: white;
    font-size: 12px;
    cursor: pointer;
}

</style>
