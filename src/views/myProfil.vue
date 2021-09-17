<template>
  <div>
   
    <profil :clients="clients" />
  </div>
</template>
<script>
import profil from "../components/profil.vue";


export default {
  name: "myProfil",
  components: {
      profil
  },

 
  data() {
    return {
      clients: {},
      id: this.$route.params.id,
    };
  },
  created() {
    this.axios
      .get(`${this.$apiurl}client/profile/` + this.id)
      .then((res) => {
        console.log(res);
        this.clients = res.data.clients;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
