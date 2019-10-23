<template>
  <div class="card">
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  position: absolute;
  top: 20%;
  left: 30%;
  height: 50%;
  width: 40%;
  background: white;
  display: inline-block;
  border-radius: 10px;
}

h1 {
  width: 100%;
  margin-top: 10%;
  color: #5a5a64;
}

h4 {
  margin-bottom: 10%;
  color: #267fa8;
}

input {
  width: 80%;
  margin: 5%;
  margin-top: 0;
  border-radius: 5px;
  border: 1px solid grey;
}

p {
  float: left;
  color: #5a5a64;
  margin: 0;
  margin-left: 10%;
  font-size: 12px;
  font-weight: 800;
}

#err-msg {
  color: red;
  font-size: 9px;
}

button {
  border-radius: 50px;
  height: 10%;
  width: 30%;
  margin-top: 5%;
  background: #eeeeef;
  border: none;
  cursor: pointer;
  color: #267fa8;
  font-weight: 800;
}

button:hover {
  color: white;
  background: #267fa8;
}

</style>
