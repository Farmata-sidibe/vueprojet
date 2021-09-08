<template>
<div>
  <div class="Navbar">
            <nav>
                  <input type="checkbox" id="nav" class="hidden">
                  <label for="nav" class="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
                  <div class="im" >
                        <a href="#" class="alogo"><img src="../assets/TAILOR.png" alt="" class="logo" ></a>
                  </div>
                  <div class="nav-wrapper">
                        <ul>
                              <li><a href="/">Accueil</a></li>
                              <li><a href="http://localhost:8080/blog">Blog</a></li>
                              <li><a href="/panier">Panier</a></li>
                              <li><a href="/navproduit"><i class="fas fa-cart-plus"></i>Boutique</a></li>
                              <li><a href="/login"><i class="fas fa-user-circle"></i>Compte</a></li>
                        </ul>
                  </div>
                  
            </nav>
</div>
<div class="header">
    <img src="../assets/zQaGxRSYck.jpg" alt="" class="imgpro">
    <div class="imall">
    <img src="../assets/image-produit-1.jpg" alt="" class="img1 im">
    <img src="../assets/image-produit-3.jpg" alt="" class="img3 im">
    <img src="../assets/image-produit-2.jpg" alt="" class="img2 im">
    
    </div>
</div>


<div>
<Produit/>
</div>

  </div>


</template>

<script>
import Produit from '../views/Produit.vue'
export default {
  name: "navproduit",
  components: {
    Produit
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
@media screen and (min-width: 1280px) {
    .inputcher{
        background-color: #7F6E6F;
        font-size: 18px;
    width: 569px;
    height: 50px;
    margin-left: 372px;
    border: groove;
    border-color: #1b0f1bfb;
    box-shadow: -1px 11px 20px 11px#1a0e1afb;
}
    ::placeholder{
        color: #fff;
    }
.imall{
    margin-top: -44px;
    text-align: -webkit-center;
}
.imgpro{
    width: 100%;
}
.im{
    width: 300px;
}


nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 190px;
    background-color: #ffffff;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    padding: 0px 5%;
}
nav {
      padding: 8px;
}
.logo {
   width: 178px;
   margin-left: 67px;
}
i.fas.fa-user-circle{
    width: 25px;
}
i.fas.fa-cart-plus{
    width: 25px;
}
.compte a{
    text-decoration: none;
     display: inline-block;
    outline: none;
    font-family: myriad pro regular;
    color: #5b4461;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
}


nav ul {
    display: flex;
    position: absolute;
    left: 28%;
}

nav ul li {
      display: inline-block;
      
      margin-right: -17px;
}

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}
.nav-wrapper a.active,.nav-wrapper a:hover{
 background: #7F6E6F;
    transition: .5s;
    width: 113%;
    height: 31px;
    text-align: -webkit-center;
    border-radius: 5px;
    border: groove;
}
nav ul li a {
      display: inline-block;
    outline: none;
    text-decoration: none;
    font-family: myriad pro regular;
    color: #5b4461;
    font-size: 20px;
    font-weight: 700;
}
#nav:checked + .nav-btn {
      transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
      background: #000;
      transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
      opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
      z-index: 9990;
      opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
      opacity: 1;
      transform: translateX(0);
}

.hidden {
      display: none;
}
/**FIN NAVBAR */


    
}

@media screen and (min-width: 768px) and (max-width: 1023.99px){

     /**NAVBAR */

.logo {
   width: 178px;
   padding-left: 60px;
}
i.fas.fa-user-circle{
    width: 25px;
}
i.fas.fa-cart-plus{
    width: 25px;
}
.compte a{
    text-decoration: none;
     display: inline-block;
    outline: none;
    font-family: myriad pro regular;
    color: #5b4461;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
}



/**Menu burger */
.nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
      }
      .hidden {
      display: none;
}

      .nav-wrapper ul {
            position: absolute;
    top: 18%;
    transform: translateY(-50%);
    width: 89%;
      }
.nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: -16px;
      }

      .nav-wrapper ul li:nth-child(1) a {
            transition-delay: 0.2s;
      }

      .nav-wrapper ul li:nth-child(2) a {
            transition-delay: 0.3s;
      }

      .nav-wrapper ul li:nth-child(3) a {
            transition-delay: 0.4s;
      }
.nav-wrapper ul li:nth-child(4) a {
            transition-delay: 0.5s;
      }

      .nav-wrapper ul li:not(:first-child) {
            margin-left: 0;
      }

      .nav-wrapper ul li a {
            padding: 10px 24px;
            opacity: 0;
            color: #000;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 1.2px;
            transform: translateX(-20px);
            transition: all 0.2s ease;
      }

      .nav-btn {
            position: fixed;
            right: 10px;
            top: 10px;
            display: block;
            width: 48px;
            height: 48px;
            cursor: pointer;
            z-index: 9999;
            border-radius: 50%;
      }

      .nav-btn i {
            display: block;
            width: 20px;
            height: 2px;
            background: rgb(66, 55, 68);
            border-radius: 2px;
            margin-left: 14px;
      }

      .nav-btn i:nth-child(1) {
            margin-top: 16px;
      }

      .nav-btn i:nth-child(2) {
            margin-top: 4px;
            opacity: 1;
      }

      .nav-btn i:nth-child(3) {
            margin-top: 4px;
      }

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}
.nav-wrapper a.active,.nav-wrapper a:hover{
 background: #7F6E6F;
    transition: .5s;
    width: 113%;
    height: 31px;
    text-align: -webkit-center;
    border-radius: 5px;
    border: groove;
}
nav ul li a {
      display: inline-block;
    outline: none;
    color: rgba(255, 255, 255, 0.945);
    text-decoration: none;
    font-size: 13px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
#nav:checked + .nav-btn {
      transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
      background: #000;
      transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
      opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
      z-index: 9990;
      opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
      opacity: 1;
      transform: translateX(0);
}
/**FIN menu burger */

/**FIN NAVBAR */

}
</style>
