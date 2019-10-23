<template>
  <div class="card">
    <h1>Login</h1>
    <h4>Enter the credentials to access the API reader.</h4>
    <p>Tenant ID</p>
    <input id="tenantId-input" type='text'/>
    <p>Client ID</p>
    <input id="clientId-input" type='text'/>
    <p>Username</p>
    <input id="username-input" type='text'/>
    <p>Password</p>
    <input id="password-input" type='password'/>
    <nuxt-link :to="'home'">
      <button class="button--grey" @click='login'>LOGIN</button>
    </nuxt-link>
  </div>
</template>

<script>

import axios from 'axios';
import api from "~/api/";

export default {
  name: 'LoginBox',
  methods: {
    login: async function() {
      // Login guest user and save token to store
      var that = this;
      var tenantId = document.getElementById('tenantId-input').value;
      var clientId = document.getElementById('clientId-input').value;
      var username = document.getElementById('username-input').value;
      var password = document.getElementById('password-input').value;
      const res = await axios.post('https://api.covergo.com/graphql', {
            query: api.auth.login,
            variables: {
              tenantId: tenantId,
              clientId: clientId,
              username: username,
              password: password
            }
        });
      if (res.errors) {
        console.error("There was an error, I should redirect")
      } else if (res.data.data.token_2){
        that.$store.commit("token", res.data.data.token_2.accessToken);
        that.$store.commit('user', {
              tenantId: tenantId,
              clientId: clientId,
              username: username,
              password: password
            });
      } else {
        window.location = '/';
        alert("wrong credentials");
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div {
  margin: 5%;
  height: 70%;
  min-height: 400px;
  background: white;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 6px #dddddd;
}

h1 {
  width: calc(100% - 40px);
  margin: 20px;
  color: #5a5a64;
}

h4 {
  margin-bottom: 2%;
  color: #35495e;
}

input {
  width: 80%;
  height: 28px;
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

</style>
