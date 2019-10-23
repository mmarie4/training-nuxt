<template>
    <div>
      <h1 class="title">
        Playground
      </h1>
      <h2 class="subtitle">
        A great useless project to practice Vue.js / Vuex / Nuxt.js / GraphQL
      </h2>
    </div>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  height: 60px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 2px 8px 10px #dddddd;
  background: #35495e;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 26px;
  color: white
}

.subtitle {
  font-weight: 300;
  font-size: 14px;
  color: #c2c3c5;
  padding-bottom: 15px;
}

</style>
