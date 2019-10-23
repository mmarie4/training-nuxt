<template>
  <div class="card">
    <h2>Welcome {{user.pseudo}}</h2>
    <h4>{{user.email}}</h4>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['msg', 'user']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div {
  margin: 5%;
  height: 80%;
  width: 39%;
  background: white;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 10px #dddddd;
  background: #eeeeef;
}

h1 {
  width: calc(100% - 40px);
  margin: 20px;
  color: #5a5a64;
}

h4 {
  margin-bottom: 10%;
  color: #35495e;
}


p {
  float: left;
  color: #5a5a64;
  margin: 0;
  margin-left: 10%;
  font-size: 12px;
  font-weight: 800;
}


</style>
