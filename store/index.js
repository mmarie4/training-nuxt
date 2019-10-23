export const state = {
    isLogged: false,
    user: {
      pseudo: "",
      email: ""
    },
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
    login: function(state, user) {
      console.log('user:', user);
      if (user.email.length != 0 && user.pseudo.length != 0) {
        this.state.user = user;
        this.state.isLogged = true;
        this.state.errorMsg = "";
      } else {
        console.log('input is empty')
        this.state.errorMsg = "Please enter an email and a pseudo. Try again.";
        window.location = '/';
      }
    },
    logout: function() {
      this.state.isLogged = false;
    },
    currentActor: function(state, actor) {
      this.state.currentActor = actor;
    }
}
