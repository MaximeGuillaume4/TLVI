<template>
  <div class="d-flex overflow-auto justify-content-center h-100 mt-1">
    <b-table sticky-header="100%" responsive striped :items="verbs">
      <template #cell(index)="data">
        <div @click="checkVerbs(data)">
          <b-form-checkbox v-if="checkTrainingSessionEnable(data) === true" :checked="testChecked(data)"></b-form-checkbox>
          <b-form-checkbox v-else :checked="testChecked(data)" disabled></b-form-checkbox>
        </div>
      </template>

      <template #cell(Infinitive)="data">
        <div>
          <span>{{data.value}}</span>
        </div>
      </template>

      <template #cell(Simple_Past)="data">
        <div>
          <span>{{data.value}}</span>
        </div>
      </template>

      <template #cell(Past_Participle)="data">
        <div>
          <span>{{data.value}}</span>
        </div>
      </template>

      <template #cell(French)="data">
        <div>
          <span>{{data.value}}</span>
        </div>
      </template>
    </b-table>
  </div>

</template>

<script>
export default {
  name: "Verbes",
  props:[
    'verbs',
    'verbSelect',
    'training_session_enable'
  ],
  data: function(){
    return {
    }
  },

  methods: {
    checkVerbs: function(data){
      var id = [];
      id.push(data.item.index);
      this.$store.dispatch('setTrainingSessionValueAction', 'personalise')
      this.$emit("check-verbs", id);
    },

    testChecked: function(id){
      var value = false;
      this.verbSelect.forEach(function (e){
        if(e === id.item.index){
          value = true;
        }
      })
      return value;
    },

    checkTrainingSessionEnable: function(data){
      var r = false;
      this.training_session_enable.forEach(function(e){
        if(e.value === true && e.max > data.item.index){
          r = true;
        }
      })
      return r;
    }
  },

  mounted() {
  }
}
</script>

<style scoped>

</style>