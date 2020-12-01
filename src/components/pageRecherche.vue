<template>
<div>
<div class="header">
    
 <div id="wrap">
  <div class="container">
            <nav>
                  <input type="checkbox" id="nav" class="hidden">
                  <label for="nav" class="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
                  <div >
                        <a href="#" class="alogo"><img src="../assets/logo-haira.png" alt="" class="logo" ></a>
                  </div>
                  <div class="nav-wrapper">
                        <ul>
                              <li><a href="/">Accueil</a></li>
                              <li><a href="/blog">Blog</a></li>
                              <li class="dropdown">
                                  <a href="/pageRecherche">Institut de beauté</a>
                              <div class="dropdown-content">
                                  <a href="/pageRecherche">Coiffeur</a>
                                  <a href="/pageRecherche">Barbier</a>
                              </div>
                              </li>
                              <li><a href="/navproduit"><i class="fas fa-cart-plus"></i>Boutique</a></li>
                        </ul>
                  </div>
                   <div class="compte">
                            <a href="/login"><i class="fas fa-user-circle"></i>Compte</a>
                        </div>
            </nav>
      </div>

  </div>
        <div class="photoform">
            <form></form>
        </div>
        
        <img src="../assets/image-princi-recherche.jpg" alt="" class="imgrecherche">
        <p class="titre">Faites votre Réservtion Rendez-Vous <br> beauté en ligne avec un Salon de votre choix</p>
        
        <!--<input type="search" class="search" placeholder="nom d'un salon ou coiffeur">
        <span><img src="../assets/loupe.png" alt="" class="glass"></span>-->
<div id="app">
<autocomplete
    :search="search"
    aria-label="Search for a salons"
    class="search"
    placeholder="nom d'un salon ou coiffeur"
  ></autocomplete>
</div>
        <input type="text" name="searchBar" id="searchBar" class="search" placeholder="|nom d'un salon">
        <span><img src="../assets/loupe.png" alt="" class="glass"></span>
        
</div>
<Salon/>
<myFooter/>
</div>
</template>
    
<script scoped>
import myFooter from '../components/myFooter.vue'
import Salon from '../views/Salon.vue'

export default {
    name: "pageRecherche",
    components: {
         myFooter,
         Salon
    },
    

}
</script>

<style scoped>


@media screen and (min-width: 1280px) {
    .glass{
   position: absolute;
    width: 32px;
    bottom: 110px;
    z-index: 3;
    left: 66%;
}


.search{
    border: none;
    border-radius: 7px;
    background: #7F6E6F;
    outline: none;
    height: 53px;
    width: 36%;
    margin-bottom: 15px;
    position: relative;
    bottom: 387px;
    z-index: 3;
    left: 34%;
    font-size: initial;
}
.search::placeholder{
    font-size: initial;
    color: #1f1220;
    padding-left: 10px;
   
}
.search2::placeholder{
    font-size: initial;
    color: #1f1220;
}
.imgrecherche{
    width: 100%;
    height: 129vh;
}
.titre{
   font-family: 'Spirax';
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    position: absolute;
    top: 305px;
    color: #7F6E6F;
    left: 28%;
    z-index: 3;
}
.photoform{
    width: 100%;
    height: 719px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 0%;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: -184px;
}

    .boutnR a {
        text-decoration: none;
        
    }
    .boutnR{
        position: relative;
    left: 18%;
    top: -22px;
    }



    /**nouveau nav */
    #wrap{
          background-color: #0f080ffb;
          opacity: 0.85;
    height: 90px;
    position: fixed;
    width: 100%;
    Z-INDEX: 1071;
          
}
 

nav {
      padding: 8px;
}
.logo {
    width: 231px;
    margin-top: -300px;
    margin-left: -17px;
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
    color: floralwhite;
    text-decoration: none;
    font-size: 13px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
.compte{
    position: absolute;
    top: -21px;
    left: 84%;
}

nav ul {
      float: right;
    margin-top: -247px;
    margin-right: 90px;
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

.hidden {
      display: none;
}
li.dropdown{
    display: inline-block;

}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: beige;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 59%;
}

.dropdown-content a{
    color: black;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
}
@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
    .glass{
   position: absolute;
    width: 32px;
    bottom: 14px;
    z-index: 3;
    left: 40%;
}
.glass2{
    position: absolute;
    width: 32px;
    bottom: 15px;
    z-index: 3;
    left: 71%;
}
.search2{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background: #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 30%;
    font-size: initial;
}
.search{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background:  #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 20%;
    font-size: initial;
}
.search::placeholder{
    font-size: initial;
    color: #1f1220;
   
}
.search2::placeholder{
    font-size: initial;
    color: #1f1220;
}
.imgrecherche{
    width: 100%;
}
.titre{
   font-family: 'Spirax';
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    position: absolute;
    top: 305px;
    color: #7F6E6F;
    left: 23%;
    z-index: 3;
}
.photoform{
    width: 100%;
    height: 719px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 0%;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: -167px;
}

    .boutnR a {
        text-decoration: none;
        
    }
    .boutnR{
        position: relative;
    left: 18%;
    top: -22px;
    }



    /**nouveau nav */
    #wrap{
          background-color: #0f080ffb;
          opacity: 0.85;
    height: 90px;
    position: fixed;
    width: 100%;
    Z-INDEX: 1071;
          
}
 

nav {
      padding: 8px;
}
.logo {
    width: 231px;
    margin-top: -300px;
    margin-left: -17px;
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
    color: floralwhite;
    text-decoration: none;
    font-size: 13px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
.compte{
    position: absolute;
    top: -21px;
    left: 84%;
}

nav ul {
      float: right;
    margin-top: -247px;
    margin-right: 90px;
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

.hidden {
      display: none;
}
}
@media screen and (min-width: 768px) and (max-width: 1023.99px) {
     .logo {
         margin-top: -57px;
    margin-left: -222px;
    width: 233px;
      }

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
            background: #fff;
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
li.dropdown{
    display: inline-block;

}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: beige;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 59%;
}

.dropdown-content a{
    color: black;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}


#wrap{
    background-color: #0f080ffb;
    opacity: 0.85;
    height: 90px;
    position: fixed;
    width: 100%;
    Z-INDEX: 1071;
          
}
.logo {
    width: 231px;
}
i.fas.fa-user-circle{
    width: 41px;
}
i.fas.fa-cart-plus{
    width: 41px;
}
.compte a{
    text-decoration: none;
     display: inline-block;
    outline: none;
    color: floralwhite;
    text-decoration: none;
    font-size: 26px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
.compte{
        position: absolute;
    top: 4px;
    left: 73%;
}
 .logo {
         margin-top: -57px;
    margin-left: -222px;
    width: 233px;
      }
.glass{
   position: absolute;
    width: 32px;
    bottom: 14px;
    z-index: 3;
    left: 40%;
}
.glass2{
    position: absolute;
    width: 32px;
    bottom: 15px;
    z-index: 3;
    left: 71%;
}
.search2{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background: #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 30%;
    font-size: initial;
}
.search{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background:  #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 20%;
    font-size: initial;
}
.search::placeholder{
    font-size: initial;
    color: #1f1220;
   
}
.search2::placeholder{
    font-size: initial;
    color: #1f1220;
}
.imgrecherche{
    width: 100%;
}
.titre{
   font-family: 'Spirax';
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    position: absolute;
    top: 305px;
    color: #7F6E6F;
    left: 23%;
    z-index: 3;
}
.photoform{
    width: 100%;
    height: 719px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 0%;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: -167px;
}

    .boutnR a {
        text-decoration: none;
        
    }
    .boutnR{
        position: relative;
    left: 18%;
    top: -22px;
    }

}
@media screen and (min-width: 480px) and (max-width: 767.99px) {
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
            background: #fff;
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
li.dropdown{
    display: inline-block;

}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: beige;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 59%;
}

.dropdown-content a{
    color: black;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}


#wrap{
    background-color: #0f080ffb;
    opacity: 0.85;
    height: 90px;
    position: fixed;
    width: 100%;
    Z-INDEX: 1071;
          
}
 
.logo {
    width: 220px;
    margin-top: -54px;
    margin-left: 125px;
}
i.fas.fa-user-circle{
    width: 41px;
}
i.fas.fa-cart-plus{
    width: 41px;
}
.compte a{
    text-decoration: none;
     display: inline-block;
    outline: none;
    color: floralwhite;
    text-decoration: none;
    font-size: 26px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 200;
    text-transform: uppercase;
}
.compte{
        position: absolute;
    top: 4px;
    left: 73%;
}
.glass{
   position: absolute;
    width: 32px;
    bottom: 14px;
    z-index: 3;
    left: 40%;
}
.glass2{
    position: absolute;
    width: 32px;
    bottom: 15px;
    z-index: 3;
    left: 71%;
}
.search2{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background: #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 30%;
    font-size: initial;
}
.search{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background:  #7F6E6F;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 44px;
    width: 24%;
    margin-bottom: 15px;
    position: relative;
    bottom: 380px;
    z-index: 3;
    left: 20%;
    font-size: initial;
}
.search::placeholder{
    font-size: initial;
    color: #1f1220;
   
}
.search2::placeholder{
    font-size: initial;
    color: #1f1220;
}
.imgrecherche{
    width: 100%;
}
.titre{
   font-family: 'Spirax';
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    position: absolute;
    top: 305px;
    color: #7F6E6F;
    left: 23%;
    z-index: 3;
}
.photoform{
    width: 100%;
    height: 719px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 0%;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: -167px;
}

    .boutnR a {
        text-decoration: none;
        
    }
    .boutnR{
        position: relative;
    left: 18%;
    top: -22px;
    }

}
</style>