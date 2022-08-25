<template>
  <div class="h-100 w-100" style="position: fixed; overflow: visible">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="w-100">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Utilisateur" right>
            <b-dropdown-text>{{this.$store.getters.getUsername}}</b-dropdown-text>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-on:click="changeUser">Changer d'utilisateur</b-dropdown-item>
            <b-dropdown-item v-on:click="newUser">Nouvel utilsiateur</b-dropdown-item>

          </b-nav-item-dropdown>
        </b-navbar-nav>







      </b-navbar>



    <div style="height: 90%; max-height: 90%;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},

  data: function () {
    return {
      version: '0.4',
    }
  },

  methods: {
    createLocalStorage: function (username) {

      console.log("LocalStorage creation started")

      var i = 0

      console.log("verbs creation")
      var verbs = []
      while (i < 169) {
        verbs.push({
          correct: 0,
          uncorrect: 0,
          challenge: 0
        })
        i++;
      }

      console.log("training_session creation")
      var training_session = []
      training_session.push({
        value: true,
        max: 10
      })
      i = 20
      while (i < 171) {
        if (i === 170) {
          training_session.push({
            value: false,
            max: 169
          })
        } else {
          training_session.push({
            value: false,
            max: i
          })
        }
        i = i + 10;
      }


      console.log("training_session_reverse creation")
      var training_session_reverse = []

      i = 160;
      while (i > 0) {
        training_session_reverse.push({
          value: false,
          min: i
        })
        i = i - 10;
      }
      training_session_reverse.push({
        value: false,
        min: 1
      })


      var user_values = {
        'username': username,
        'verbs': verbs,
        'training_session': training_session,
        'reverse': 'false',
        'training_session_reverse': training_session_reverse
      }

      localStorage.setItem(username, JSON.stringify(user_values));

      console.log("LocalStorage creation finished")
    },

    changeUser: function () {
      this.$router
          .push({path: '/ChangerUser'})
    },

    newUser: function () {
      this.$prompt("Rentrer le nom du nouvel utilisateur", "", "Nouvel utilisateur", "question").then((username) => {
        this.createLocalStorage(username);
        var users = JSON.parse(localStorage.getItem("users"))
        users.push(username)
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.lastuser = username;
        this.$router.go();
      })
    },

    firstUser: function () {
      localStorage.version = this.version;
      localStorage.setItem('users', JSON.stringify([]));
      localStorage.lastuser = '';
      this.$prompt("Quel est votre nom d'utilisateur ?", "", "Bienvenue" +
          "", "question").then((username) => {
        this.createLocalStorage(username);
        localStorage.setItem('users', JSON.stringify([username]));
        localStorage.lastuser = username;
        this.$router.go();
      })
    },

    appOunted: function () {
      if (localStorage.version !== this.version) {
        localStorage.clear();
        this.firstUser();
      } else if (JSON.parse(localStorage.getItem("users")) === null || JSON.parse(localStorage.getItem("users")).length === 0) {
        this.firstUser();
      }

    }
  },

    mounted() {
      if (sessionStorage.getItem('beta_alert') === null) {
        this.$alert("Ce site est actuellement en développement. Les données sauvegardées peuvent potentiellement être remises à zéro.", 'Site en développement', 'info')
            .then(() => {
              sessionStorage.setItem('beta_alert', true);
              this.appOunted()
            })
      } else {
        this.appOunted();
      }
    }






}
</script>

<style>
</style>
