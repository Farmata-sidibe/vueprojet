<template>
<div>
 <header>

    <a href="#"><img src="../assets/TAILOR.png" alt=""  class="logo"></a>

    <input type="checkbox" id="menu-bar">
    <label for="menu-bar" class="fas fa-bars"></label>

    <nav class="navbar">
        <a href="/">Accueil</a>
        <a href="/hairstylewordpress/">Réservation</a>
        <a href="/blog">Blog</a>
        <a href="/navproduit">Boutique</a>
        <a href="/panier">Panier</a>
        <a href="/login">Compte</a>
       
       
    </nav>

</header>

<!-- header section ends -->

<!-- home section starts  -->

<section class="home" id="home">

    <div class="contentF">
        <h3>Soins  <span>Capilaires</span></h3>
    </div>

</section>



<div>
  <h1>Nos Produits</h1>
<Produit/>
<footerBlog/>
</div>

  </div>


</template>

<script>
import Produit from '../views/Produit.vue'
import footerBlog from '../components/footerBlog.vue'
export default {
  name: "navproduit",
  components: {
    Produit,
     footerBlog
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
h1{
  text-align: center;
  color:#ee82ee;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 70px;
    padding-top: 32px;
}


.heading{
    text-align: center;
    background:var(--gradient);
    color:#ee82ee;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 70px;
    padding:25px;
    
}

header{
    position: fixed;
    top:0; left:0;
    width:100%;
    background:rgba(247, 246, 246, 0.7);
    box-shadow: 0 .5px 1px rgba(0,0,0,.1);
    padding:2px 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
}

header .logo{
    width: 151px;
}

header .logo span{
    color:var(--pink);
}

header .navbar a{
    font-size: 17px;
    margin-left: 27px;
    color:var(--purple);
}

header .navbar a:hover{
    color:var(--pink);
}

header input{
    display: none;
}

header label{
    font-size: 30px;
    color:var(--purple);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
}

.home{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background:url("../assets/zQaGxRSYck.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
}

.home .imageF img{
    width:40vw;
    animation: float 3s linear infinite;
}

@keyframes float{
    0%, 100%{
        transform: translateY(4px);
    }
    50%{
        transform: translateY(-9.5px);
    }
}

.home .contentF h3{
   font-size: 80.5px;
    color: rgb(120, 177, 167);
    text-transform: uppercase;
    font-family: 'Galada';
    margin-right: 305px;
}

.home .contentF h3 span{
    color:var(--pink);
    text-transform: uppercase;
}

.home .contentF p{
    font-size: 16.7px;
    color:#666;
    padding:1px 0;
}
/**FIN NAVBAR */


    


@media screen and (max-width: 900px){

 header label{
        visibility: visible;
        opacity: 1;
        
    }

    header .navbar{
        position: absolute;
        top:11%; left: 0;
        width:100%;
        background:#fff;
        padding:59px 2px;
        border-top: .1px solid rgba(0,0,0,.2);
        box-shadow: 0 .5px 1px rgba(0,0,0,.1);
        transform-origin: top;
        transform: scaleY(0);
        opacity: 0;
        transition: .2s linear;
    }

    header .navbar a{
        display: block;
        margin:2px 0;
        font-size: 12px;
    }

    header input:checked ~ .navbar{
        transform: scaleY(1);
        opacity: 1;
    }

    header input:checked ~ label::before{
        content:'\f00d';
    }

   

}



</style>
