<template>
  <div class="footer">
      <img alt="vuejs" src="~/assets/vuejs.png"/>
      <img alt="covergo" src="~/assets/covergo.png"/>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  margin: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid #bbbbbb;
  background: white;
}

p {
    width: 100%;
    font-size: 11px;
}

img {
    height: 20px;
    margin: 5px;
    margin-left: 20px;
}

</style>
