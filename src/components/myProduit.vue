<template>

<div>

<div class="secPro">
    
<div class="all" v-for="produit in produits" :key="produit.id">

   
    <div class="card single-publication">
    <div class="img">
     
        <img
          v-if="produit.image[0] !== undefined"
          :src="require(`@/assets/${produit.images[0].image}.jpg`)"
          alt="Publication Image"
        /> 
        
    </div>
   <div class="top-text">
          <div class="name">
             <router-link :to="`/DTproduit/${produit.id}`">
            {{ produit.nom }}
            </router-link>
            </div>
       <p>{{ produit.prix }} €</p>
      </div>
    <div class="bottom-text">
           <div class="add-to-cart">
       <a @click="ajouter(produit.id, produit.nom, produit.prix, produit.image[0].image)"
        class="default-btn" ><button><i class="fas fa-cart-plus"></i> Add to Cart </button></a>
            </div>
    </div>
    
    
    </div>

</div>
</div>

</div>
</template>
    
<script>

export default {
  name: "myProduit",
  components: {
   
  },
  props: ["produits"],
  
  data() {
    return {
      Panier: [],
    };
  },
  created() {
    console.log(this.produits);
    this.getLocalStorage();
  },
  methods: {
    ajouter: function(id, nom, prix, image) {
      alert(` le produit ${nom}`);
      this.Panier = this.Panier || [];
      localStorage.removeItem("panier");

      if (this.Panier.length === 0) {
        let quantite = 1;
        this.Panier.push({
          produitId: id,
          nom: nom,
          quantite: quantite,
          prix_unitaire: prix,
          soustotal: quantite * prix,
          image: image,
        });
      } else {
        let alreadyProduit = false;
        this.Panier.forEach((item) => {
          if (item.produitId === id) {
            item.quantite++;
            item.soustotal = item.quantite * prix;
            alreadyProduit = true;
          }
        });
        if (alreadyProduit === false) {
          let quantite = 1;
          this.Panier.push({
            produitId: id,
            nom: nom,
            quantite: quantite,
            prix_unitaire: prix,
            soustotal: quantite * prix,
            image: image,
          });
        }
      }
      localStorage.setItem("panier", JSON.stringify(this.Panier));
    },

    getLocalStorage() {
      let getlocalSt = localStorage.getItem("panier");
      if (getlocalSt != null || getlocalSt !== undefined) {
        this.Panier = JSON.parse(getlocalSt);
        console.log(this.Panier);
      }
    },
  },
}; 
</script>


<style scoped>



@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.secPro{
    overflow: hidden;
}
button{
  border-radius: 5px;
    background-color: rgb(34, 18, 44);
    width: 50%;
    height: 40px;
    font-size: 14px;
    color: rgb(247, 244, 241);
    text-decoration: none;
    flex-wrap: wrap;
    flex-basis: auto;
}
button a {
  color: rgb(247, 244, 241);
    text-decoration: none;
}

.card{
  height: 331px;
    max-width: 296px;
    margin: 8px 10px 0px 30px;
    background: white;
    transition: 0.4s;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
    margin-top: 51px;
    margin-left: 8%;
    width: 22%;
    display: inline-grid;
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  
}
.all{
   padding: 0 0 0 0;
    display: contents;
}
.card .img img{
  
    width: 17vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    left: 10%;
    top: 17px;
    height: 197px;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 15px;
  font-family: 'Galada';
  text-decoration: none;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
a{
  font-size: 15px;
  font-family: 'Galada';
  text-decoration: none;
   color: #202020;
}
.card .top-text p{
  font-size: 23px;
    font-weight: 600;
    color: #e73c8c;
    line-height: 20px;
    margin-top: 10px;
}
.card .bottom-text{
  padding: 0 33px 10px 20px;
    margin-top: -35px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn1{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn1 a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn1 a:hover{
  transform: scale(0.9);
}
.btn1{
        width: 100px;
    font-size: 14px;
}
.text1{
    font-size: 16px;
}

* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}



@media screen and (max-width: 768px) {
 .card .top-text .name{
  font-size: 11px;
  font-family: 'Galada';
  text-decoration: none;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    
}
a{
  font-size: 11px;
  font-family: 'Galada';
  text-decoration: none;
   color: #202020;
}
.card .top-text p{
  font-size: 16px;
    font-weight: 600;
    color: #e73c8c;
    line-height: 20px;
    margin-top: 10px;
}
}

@media screen and  (max-width:320px) {
.card .top-text .name{
  font-size: 9px;
  font-family: 'Galada';
  text-decoration: none;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
a{
  font-size: 8px;
  font-family: 'Galada';
  text-decoration: none;
   color: #202020;
}
.card .top-text p{
  font-size: 12px;
    font-weight: 600;
    color: #e73c8c;
    line-height: 20px;
    margin-top: 10px;
}
}
</style>