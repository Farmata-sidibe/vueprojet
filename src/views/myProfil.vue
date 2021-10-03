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
      
    };
  },
  
};
</script>

<style></style>
