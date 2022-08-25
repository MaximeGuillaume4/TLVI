<template>
  <div v-if="this.verbSelect[0] !== -1" class="h-100">
    <div class="h-50 row d-flex align-items-end justify-content-center">

      <div class="col p-1" style="max-width: 220px">
        <span class="row justify-content-center">Infinitive</span>
        <b-form-input id="Infinitive" v-if="this.Infinitive === ''" v-on:keyup.enter="validation" v-model="input_Infinitive" class="row justify-content-center" ></b-form-input>
        <span v-else class="row justify-content-center" style="margin-top: 14px"> {{this.Infinitive}}</span>
      </div>

      <div class="col p-1" style="max-width: 220px">
        <span class="row justify-content-center">Simple Past</span>
        <b-form-input id="Simple_Past" v-if="this.Simple_Past === ''" v-on:keyup.enter="validation" v-model="input_Simple_Past" class="row justify-content-center"></b-form-input>
        <span v-else class="row justify-content-center" style="margin-top: 14px"> {{this.Simple_Past}}</span>
      </div>

      <div class="col p-1" style="max-width: 220px">
        <span class="row justify-content-center">Past Participle</span>
        <b-form-input id="Past_Participle" v-if="this.Past_Participle === ''" v-on:keyup.enter="validation" v-model="input_Past_Participle" class="row justify-content-center"></b-form-input>
        <span v-else class="row justify-content-center" style="margin-top: 14px"> {{this.Past_Participle}}</span>
      </div>

      <div class="col p-1" style="max-width: 220px">
        <span class="row justify-content-center">French</span>
        <span class="row justify-content-center" style="margin-top: 14px"> {{this.French}}</span>
      </div>

      <div class="col p-1" style="max-width: 1px">
        <b-button v-if="helpvalue === false" v-on:click="help" style="max-height: 40px; width: 115px; margin-left: 3px; background: #189d1c">Aide</b-button>
        <b-button v-else v-on:click="stopHelp" style="max-height: 40px; width: 115px; margin-left: 3px; background: #1e7bbb">OK</b-button>

      </div>

    </div>

    <div class="h-50 d-flex justify-content-center" style="padding-top: 20px">
      <b-button v-if="helpvalue === false" v-on:click="validation" style="max-height: 40px; width: 115px">Valider</b-button>
      <b-button v-else style="max-height: 40px; width: 115px" disabled>Valider</b-button>
    </div>




  </div>
</template>

<script>
export default {
  name: "Session",
  data: function (){
    return{
      verbs: this.$store.getters.getAllVerbs,
      verbSelect: this.$store.getters.getVerbSelectValue,
      trainig_session : this.$store.getters.getTrainingSession,
      Infinitive: '',
      Simple_Past: '',
      Past_Participle: '',
      French: '',
      verbId : -1,
      session_wrong_answer: 0,
      helpvalue: false,
      input_Past_Participle: '',
      input_Simple_Past: '',
      input_Infinitive: ''

    }
  },

  methods: {
    getVerb: function(){
      var max = this.verbSelect.length;
      var random_number = Math.floor(Math.random()*(max));
      var verbID = this.verbSelect[random_number];
      this.verbId = verbID;
      var verb = this.verbs[verbID]
      if(this.trainig_session.difficulty === 'easy'){
        this.French = verb.French;
      }
      else if(this.trainig_session.difficulty === 'medium'){
        this.Infinitive = verb.Infinitive;
      }
      else if(this.trainig_session.difficulty === 'hard'){
        var random_help = Math.floor(Math.random()*(3+1))
        if(random_help === 0){
          this.Infinitive = verb.Infinitive;
        }
        else if(random_help === 1){
          this.Simple_Past = verb.Simple_Past;
        }
        else if(random_help === 2){
          this.Past_Participle = verb.Past_Participle;
        }
        else if(random_help === 3){
          this.French = verb.French;
        }
      }

    },

    validation: function(){
      var wrong_answer = 0;
      var all_filled = 1;
      if(document.getElementById("Infinitive")){
        if(document.getElementById("Infinitive").value === ''){
          all_filled = 0;
          this.$alert(" Veuillez remplir tous les verbes.", 'Verbe manquant', 'warning')
        }
        else{
          if(!this.validationVerb(document.getElementById("Infinitive").value, this.verbs[this.verbId].Infinitive)){
            wrong_answer = 1;
            this.$alert(" Le verbe à l'infinitif est faux.", 'Infinitif faux', 'error')
          }
        }
      }

      if(document.getElementById("Simple_Past")){
        if(document.getElementById("Simple_Past").value === ''){
          all_filled = 0;
          this.$alert(" Veuillez remplir tous les verbes.", 'Verbe manquant', 'warning')
        }
        else{
          if(!this.validationVerb(document.getElementById("Simple_Past").value, this.verbs[this.verbId].Simple_Past)){
            wrong_answer = 1;
            this.$alert(" Le verbe au passé simple est faux.", 'Passé simple faux', 'error')
          }
        }
      }

      if(document.getElementById("Past_Participle")){
        if(document.getElementById("Past_Participle").value === ''){
          all_filled = 0;
          this.$alert(" Veuillez remplir tous les verbes.", 'Verbe manquant', 'warning')
        }
        else{
          if(!this.validationVerb(document.getElementById("Past_Participle").value, this.verbs[this.verbId].Past_Participle)){
            //if(document.getElementById("Past_Participle").value !== this.verbs[this.verbId].Past_Participle){
            wrong_answer = 1;
            this.$alert(" Le verbe au participe passé est faux.", 'Participe passé faux', 'error')
          }
        }
      }

      if(document.getElementById("French")){
        if(document.getElementById("French").value === ''){
          all_filled = 0;
          this.$alert(" Veuillez remplir tous les verbes.", 'Verbe manquant', 'warning')
        }
        else{
          if(!this.validationVerb(document.getElementById("French").value, this.verbs[this.verbId].French)){
            wrong_answer = 1;
            this.$alert(" Le verbe français est faux.", 'Français faux', 'error')
          }
        }
      }

      if (wrong_answer === 0 && all_filled === 1){
        this.nextVerb();
      }

    },

    validationVerb: function(input_verb, valid_verb){
      var validation = false;
      valid_verb = valid_verb.toLowerCase().split(" ").join("");
      input_verb = input_verb.toLowerCase().split(" ").join("");

      if(/^[a-z]*\|[a-z]*$/.test(valid_verb)){
        var array_valid_verb = valid_verb.split("|")

        if(/^[a-z]*\|[a-z]*$/.test(input_verb)) {
          var test = 0;
          var array_input_verb = input_verb.split("|")

          array_valid_verb.forEach(function (ev) {
            array_input_verb.forEach(function (ei) {
              if (ev === ei) {
                test++;
              }
            })
          })

          if(test === array_valid_verb.length){
            validation = true;
          }
          else{
            validation = false;
          }
        }
        else{
          array_valid_verb.forEach(function (ev) {
            if(ev === input_verb){
              validation = true;
            }
          })
        }
      }
      else if(input_verb === valid_verb){
        validation = true;
      }
      else{
        validation = false;
      }

      return validation;
    },

    help: function(){
      this.helpvalue = true;
      this.input_Past_Participle = document.getElementById("Past_Participle").value
      this.Past_Participle = this.verbs[this.verbId].Past_Participle;
      this.input_Simple_Past = document.getElementById("Simple_Past").value
      this.Simple_Past = this.verbs[this.verbId].Simple_Past;
      this.input_Infinitive = document.getElementById("Infinitive").value
      this.Infinitive = this.verbs[this.verbId].Infinitive;
    },

    stopHelp: function(){
      this.Past_Participle = '';
      this.Simple_Past = '';
      this.Infinitive = '';
      this.helpvalue = false;
    },

    nextVerb: function(){
      var verbId = this.verbId
      var array_temp = [];
      this.verbSelect.forEach(function(e){
        if(e !== verbId){
          array_temp.push(e);
        }
      })

      this.verbSelect = array_temp;


      if(this.verbSelect.length === 0){
        this.goHome();
      }

      else{
        this.getVerb();
        this.resetInput();
      }
    },

    resetInput: function(){
      if(document.getElementById("Infinitive")){
        document.getElementById("Infinitive").value = '';
      }
      if(document.getElementById("Simple_Past")){
        document.getElementById("Simple_Past").value = '';
      }
      if(document.getElementById("Past_Participle")){
        document.getElementById("Past_Participle").value = '';
      }
      if(document.getElementById("French")){
        document.getElementById("French").value = '';
      }
    },

    goHome: function(){
      this.$store.dispatch('setVerbSelectAction', [-1])
      this.$router.push({path: '/'})
    },

  },

  mounted() {
    if(this.verbSelect[0] === -1){
      this.goHome()
    }
    else{
      this.getVerb()
    }
  }
}
</script>

<style scoped>

</style>