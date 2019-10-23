export const state = {
    isLogged: false,
    token: "",
    companyList: [],
    user: {
      tenantId: "",
      clientId: "",
      username: "",
      password: ""
    },
    // Mock data
    actorList: [{
      name: 'Leonardo Di Caprio',
      movies: ['Catch me if you can', 'Titanic', 'Basketball Diaries']
    }, {
      name: 'Marion Cotillard',
      movies: ['Batman: The Dark Knight Rises', 'Public Enemies']
    }, {
      name: 'Angelina Jolie',
      movies: ['Mr and Mrs Smith', 'Lara Croft: Tomb Raider']
    }, {
      name: 'Johnny Depp',
      movies: ['The Tourist', 'Alice in Wonderlands', 'Charlie and the Chocolate Factory']
    }, {
      name: 'Brad Pitt',
      movies: ['Mr and Mrs Smith', 'Snatch']
     }, {
      name: 'Jason Statham',
      movies: ['Snatch', 'The Transporter', 'The Expendables']
     }, {
       name: 'Will Smith',
       movies: ['I, Robot', 'Hancock']
     }],
     currentActor: "",
  }

export const mutations = {
    token: function(state, token) {
      console.log('token:', token);
      this.state.token = token;
    },
    user: function(state, user) {
      this.state.user.tenantId = user.tenantId;
      this.state.user.clientId = user.clientId;
      this.state.user.username = user.username;
    },
    logout: function() {
      this.state.isLogged = false;
    },
    currentActor: function(state, actor) {
      this.state.currentActor = actor;
    },
    companyList: function(state, list) {
      this.state.companyList = list;
    }
}
