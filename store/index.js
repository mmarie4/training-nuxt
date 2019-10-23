export const state = {
    isLogged: false,
    currentActor: "",
    user: {
      pseudo: "",
      email: ""
    },
    actorList: ['Leonardo Di Caprio', 'Marion Cotillard', 'Angelina Jolie', 'Johnny Deep', 'Brad Pitt', 'Jason Statham', 'Will Smith'],
    // Movie list should be specific to each actor but no time for this now
    movieList: ['Titanic', 'Catch me if you can', 'Lord of the Rings', 'Taxi Driver', 'Snatch', 'Basketball Diaries', 'I, Robot', 'Hancock', 'Mr and Mrs Smith', 'The Tourist', 'LA French', 'Slevin', 'Usual Suspects', 'Shutter Island']
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
