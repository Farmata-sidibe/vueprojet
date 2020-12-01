<template>
  <div>
   
    <detailProduit :produits="produits" />
  </div>
</template>
<script>
import detailProduit from "../components/detailProduit.vue";


export default {
  name: "detailProduit",
  components: {
      detailProduit
  },

 
  data() {
    return {
      produits: {},
      id: this.$route.params.id,
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/getById" + this.id)
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

<style scoped></style>
