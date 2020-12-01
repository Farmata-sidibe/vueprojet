<template>
  <div>
   
    <myProduit :produits="produits" />
  </div>
</template>
<script>
import myProduit from "../components/myProduit.vue";


export default {
  name: "Produit",
  components: {
    myProduit,
   
  },
  data() {
    return {
      produits: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/all")
      .then((res) => {
      console.log(res);
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
