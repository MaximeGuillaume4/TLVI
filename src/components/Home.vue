<template>
  <div class="d-flex flex-column h-100" v-if="username !== ''">

    <Selection v-on:check-verbs="checkVerbs"></Selection>
    <Verbes v-bind:verbs="verbs" v-bind:verbSelect="verbSelect" v-bind:training_session_enable="training_session_enable" v-on:check-verbs="checkVerbs"></Verbes>
    <div class="d-flex justify-content-center pt-0 mt-0">
      <b-button class="m-1 mt-0" v-on:click="startSession">Lancement</b-button>
      <b-button v-if="this.$store.getters.getTrainingSessionValue !== 'all'" class="m-1 mt-0" v-on:click="startLesson">Exercice</b-button>
      <b-button v-else class="m-1 mt-0" disabled>Exercice</b-button>
    </div>
    <div style="margin-left: 10px">
      <span class="text-danger">|</span> <span>: une réponse est accepté</span>  <span class="text-danger" style="margin-left: 100px">/</span> <span>: tous les verbes doivent être saisis</span>
    </div>
  </div>
</template>

<script>
import Selection from './Home/Selection'
import Verbes from './Home/Verbes'

export default {
  name: "Home",
  components : {
    Selection,
    Verbes
  },

  data: function (){
    return{
      verbs: this.$store.getters.getVerbs,
      verbSelect: [-1],
      username: localStorage.lastuser,
      training_session_enable: []
    }
  }, //Fin data

  methods: {
    checkVerbs(id) {
      var array_temp = []

      if (id.length === 1) {
        if(id[0] === -1){
          array_temp.push(-1)
        }
        else{
          var test = false
          this.verbSelect.forEach(function (e) {
            if (e < id[0] && e >= 0) {
              array_temp.push(e)
            } else if (e === id[0]) {
              test = true;
            } else if (e > id[0] && test === false) {
              array_temp.push(id[0]);
              array_temp.push(e);
              test = true;
            } else if (e > id[0] && test === true) {
              array_temp.push(e)
            }
          })
          if(this.verbSelect[this.verbSelect.length-1] < id[0]){
            array_temp.push(id[0])
          }
        }
        var array_temp_enable = []
        var training_session_enable = this.training_session_enable
        array_temp.forEach(function(id){
        var enable = false
        training_session_enable.forEach(function(e){
          if(e.value === true && e.max > id){
            enable = true;
          }
        })
        if(enable){
          array_temp_enable.push(id)
        }
      })

        this.verbSelect = array_temp_enable;
        this.$store.dispatch('setTrainingSessionMaxAction', array_temp_enable[array_temp_enable.length-1])
      }

      else{
        this.verbSelect = id;
      }

      this.$store.dispatch("setVerbSelectAction", this.verbSelect)
    },

    startSession: function(){
      if(this.$store.getters.getTrainingSessionMax === 0 && this.$store.getters.getTrainingSessionMin === 0 && this.$store.getters.getTrainingSessionValue === 'null'){
        this.$alert("Veuillez choisir des verbes à travailler.", 'Aucun verbe choisi', 'error');
      }
      else if (this.$store.getters.getVerbSelectValue[0] === -1){
        this.$alert("Veuillez choisir des verbes à travailler.", 'Aucun verbe choisi', 'error');
      }
      else{
        this.$router.push({path: '/Session'})
      }
    },


    startLesson: function(){
      if(this.$store.getters.getTrainingSessionMax === 0 && this.$store.getters.getTrainingSessionMin === 0 && this.$store.getters.getTrainingSessionValue === 'null'){
        this.$alert("Veuillez choisir des verbes à travailler.", 'Aucun verbe choisi', 'error');
      }
      else if (this.$store.getters.getVerbSelectValue[0] === -1){
        this.$alert("Veuillez choisir des verbes à travailler.", 'Aucun verbe choisi', 'error');
      }
      else{
        this.$router.push({path: '/Lesson'})
      }
    }


  }, //Fin methods

  mounted() {
    if(localStorage.getItem(this.$store.getters.getUsername)){
      this.training_session_enable = JSON.parse(localStorage.getItem(this.$store.getters.getUsername)).training_session;
    }
    this.$store.dispatch("setUsernameAction", this.username)
    this.$store.dispatch("setVerbSelectAction", [-1])
  }
}
</script>

<style scoped>

</style>