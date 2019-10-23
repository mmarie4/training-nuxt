export const state = {
    isLogged: false,
    errorMsg: "",
    user: {
      pseudo: "",
      email: ""
    }
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
    }
}
