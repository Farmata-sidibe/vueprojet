<template>
  <div>
      <h1>Bonjour {{ user.nom }} </h1>
  </div>
</template>

<script>
import jwt from "vue-jwt-decode";
export default {
    data() {
        return {
            user: {},
        }
    },
    created() {
        if(localStorage.getItem("auth")) {
             console.log(localStorage.getItem("auth"));
            this.user = jwt.decode(localStorage.getItem("token"));
            if (this.user.role != "admin") {
                localStorage.removeItem("token");
                localStorage.removeItem("auth")
                this.$router.push({ path: "/admin/log"});
            } 
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("auth");
            this.$router.push({ path: "/admin/log"});
        }
    },

};
</script>

<style scoped>


</style>