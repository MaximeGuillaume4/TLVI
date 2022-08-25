<template>
  <div class="d-flex justify-content-center mt-1">

    <b-button class="m-1" v-on:click="unselectAll">Tout désélectionner</b-button>

    <b-dropdown class="m-1" :text="'1 - '+max.toString()">
      <div v-for="value in groups" v-bind:key="value">
        <b-dropdown-item  v-if="value === max || checkTrainingSessionEnable(value) === false" disabled>1 - {{value}}</b-dropdown-item>
        <b-dropdown-item  v-else v-on:click="groupSession(value)">1 - {{value}}</b-dropdown-item>
      </div>
    </b-dropdown>

    <b-dropdown v-if="reverse === 'true'" class="m-1" :text="'169 - '+min.toString()">
      <div v-for="value in reverse_groups" v-bind:key="value">
        <b-dropdown-item  v-if="value === min || checkTrainingReverseSessionEnable(value) === false" disabled>169 - {{value}}</b-dropdown-item>
        <b-dropdown-item  v-else v-on:click="groupSessionReverse(value)">169 - {{value}}</b-dropdown-item>
      </div>
    </b-dropdown>

    <b-button class="m-1" v-on:click="selectAll">Tout sélectionner</b-button>

    <b-dropdown class="m-1" text="Difficulté" v-if="trainig_session_value === 'null' || trainig_session_value ===  'normal'" disabled></b-dropdown>
    <b-dropdown class="m-1" text="Difficulté" v-else>
      <b-dropdown-item v-if="difficulty_value !== 'easy'" v-on:click="setDifficulty('easy')">Facile</b-dropdown-item>
      <b-dropdown-item v-else disabled><a style="color: green">Facile</a></b-dropdown-item>
      <b-dropdown-item v-if="difficulty_value !== 'medium'" v-on:click="setDifficulty('medium')">Moyen</b-dropdown-item>
      <b-dropdown-item v-else disabled><a style="color: blue">Moyen</a></b-dropdown-item>
      <b-dropdown-item v-if="difficulty_value !== 'hard'" v-on:click="setDifficulty('hard')">Difficile</b-dropdown-item>
      <b-dropdown-item v-else disabled><a style="color: darkred">Difficile</a></b-dropdown-item>
      <b-dropdown-item v-if="difficulty_value !== 'challenge'" v-on:click="setDifficulty('challenge')">Challenge</b-dropdown-item>
      <b-dropdown-item v-else disabled><a style="color: darkmagenta">Challenge</a></b-dropdown-item>
    </b-dropdown>

  </div>
</template>

<script>
export default {
  name: "Selection",
  data: function () {
    return {
      trainig_session_value: this.$store.getters.getTrainingSessionValue,
      max: 1,
      min: 169,
      groups: [10,20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 169],
      reverse_groups: [160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1],
      training_session_enable: [],
      training_session_reverse_enable: [],
      reverse: 'false',
      difficulty_value: this.$store.getters.getTrainingSessionDifficulty
    }
  },

  methods: {
    getTrainigSessionValue(){
      this.trainig_session_value = this.$store.getters.getTrainingSessionValue;
    },

    selectAll(){
      this.$store.dispatch("setTrainingSessionValueAction", "all");
      this.$store.dispatch("setTrainingSessionMaxAction", 168);
      this.$store.dispatch("setTrainingSessionMinAction", 0);
      this.max = 1;
      this.min = 169;
      this.getTrainigSessionValue();
      var i = 0;
      var array = [];
      while(i < 169){
        array.push(i);
        i++;
      }
      this.checkVerbs(array);
    },

    unselectAll(){
      this.$store.dispatch("setTrainingSessionValueAction", "null")
      this.$store.dispatch("setTrainingSessionMinAction", 0);
      this.$store.dispatch("setTrainingSessionMaxAction", 0);
      this.max = 1;
      this.min = 169;
      this.getTrainigSessionValue();
      this.setDifficulty("easy")
      this.checkVerbs([-1])
    },

    setDifficulty(difficulty){
      this.$store.dispatch("setTrainingSessionDifficultyAction", difficulty);
      this.difficulty_value = difficulty;
    },

    groupSession(max){
      this.$store.dispatch("setTrainingSessionMaxAction", max);
      this.$store.dispatch("setTrainingSessionMinAction", 0);
      this.max = this.$store.getters.getTrainingSessionMax;
      this.$store.dispatch("setTrainingSessionValueAction", "normal");
      this.getTrainigSessionValue();
      var i = 0;
      var array = [];
      while(i < max){
        array.push(i);
        i++;
      }
      this.checkVerbs(array);
    },

    groupSessionReverse(min){
      this.$store.dispatch("setTrainingSessionMaxAction", 168);
      this.$store.dispatch("setTrainingSessionMinAction", min);
      this.min = this.$store.getters.getTrainingSessionMin;
      this.$store.dispatch("setTrainingSessionValueAction", "reverse");
      this.getTrainigSessionValue();
      var i = 168;
      var array = [];
      while(i >= min-1){
        array.push(i);
        i--;
      }
      this.checkVerbs(array);
    },

    checkVerbs(id){
      this.$emit("check-verbs", id);
    },

    checkTrainingSessionEnable(value){
      var r;
      this.training_session_enable.forEach(function(e){
        if(e.max === value){
          r = e.value;
        }
      })
      return r;
    },

    checkTrainingReverseSessionEnable(value){
      var r;
      this.training_session_reverse_enable.forEach(function(e){
        if(e.min === value){
          r = e.value;
        }
      })
      return r;
    },

    color: function(){
      return "black"
    }

  },

  mounted() {
    if(localStorage.getItem(this.$store.getters.getUsername) !== null){
      this.training_session_enable = JSON.parse(localStorage.getItem(this.$store.getters.getUsername)).training_session;
      this.training_session_reverse_enable = JSON.parse(localStorage.getItem(this.$store.getters.getUsername)).training_session_reverse;
      this.reverse = JSON.parse(localStorage.getItem(this.$store.getters.getUsername)).reverse;
    }
    this.trainig_session_value = "null"
  }

}
</script>

<style scoped>

</style>