<template>
  <div class="card">
    <h1>Login</h1>
    <h4>Enter your email adress and choose a pseudo to enter the website</h4>
    <p>Email</p>
    <input id="email-input" type='email' hint='email'/>
    <p>Pseudo</p>
    <input id="pseudo-input" type='text' hint='pseudo'/>
    <p id="err-msg">{{errorMsg}}</p>
    <nuxt-link :to="'home'">
      <button class="button--grey" @click='login'>LOGIN</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  methods: {
    login: function() {
      var pseudo = document.getElementById('pseudo-input').value;
      var email = document.getElementById('email-input').value;
      this.$store.commit('login', {pseudo: pseudo, email: email});
    }
  },
  computed: {
    errorMsg: function() {
      return this.$store.state.errorMsg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div {
  margin: 5%;
  height: 50%;
  min-height: 400px;
  background: white;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 10px #dddddd;
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

input {
  width: 80%;
  height: 10%;
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
  width: 100%;
  margin: 0;
  font-size: 9px;
}

</style>
