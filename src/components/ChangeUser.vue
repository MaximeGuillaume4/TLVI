<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="row">Quel utilisateur voulez vous choisir ?</h1>
    <div v-for="user in users" :key="user.id" class="d-flex flex-column w-100 m-1 align-items-center">
      <b-button class="w-25"  v-on:click="changerUser(user)"  v-if="user !== lastuser">{{ user }}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeUser",
  data: function (){
    return {
      users: JSON.parse(localStorage.getItem("users")),
      lastuser: localStorage.getItem("lastuser")
    }
  },
  methods: {
    changerUser: function (user){
      this.$store.dispatch("setUsernameAction", user);
      localStorage.setItem("lastuser", user)
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>