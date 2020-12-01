<template>
  <div>
   
    <listeSalon :salons="salons" />
  </div>
</template>
<script>
import listeSalon from "../components/listeSalon.vue";


export default {
  name: "Salon",
  components: {
    listeSalon,
   
  },
  data() {
    return {
      salons: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/salon/all")
      .then((res) => {
      console.log(res);
        this.salons = res.data.salons;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
