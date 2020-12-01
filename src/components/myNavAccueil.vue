<template>
<div>
      

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

<div class="all">
  <presta/>
</div>


<div class="section1">
<form class="totalform">
<h2>Welcom to Hairstyle</h2>
<p class="phairdo">Notre objectif principale est de permettre 
au coiffeur d'ajouter  leur institut, d'assurer 
leur visibilité et celle des coiffeur à domicile dans le marché.
   Ceci permettra à la clientéle d'avoir la
  possibilité de faire  sa réservation de rendez-vous beauté 
  en ligne avec le salon de son choix.
</p>
</form>
</div>
  

<div class="ctn1">
      
<h4>Découvrez les instituts de beauté</h4>
<p class="para">
      Envie d'une nouvelle coupe ou d'une barbe bien déssiné? Nous vous présentons les meilleurs 
instituts de beauté. Choisissez et reversez votre rendez-vous 
avec des coiffeurs experts qui vous proposeront des coiffures aà la hauteur de vos attentes.
</p>
</div>
  

 


<div>
<newpage/>
</div>

<div class="prod">
    <div class="trait"></div>
    <div class="trait2"></div>

    <h2 class="nouv">Nouveautés</h2>
    <p class="nouvp">Découvrez les nouveaux produits capillaires pour réparer et redonner vie à vos cheveux.</p>
    <prestation/>
</div>

<div class="ctn2">
    <h3 class="lire"><a href="/blog">Lire notre blog</a> </h3>
</div>


<myFooter/>
  </div>
</template>

<script>
import prestation from '../components/prestation.vue'
import myFooter from '../components/myFooter.vue'


import presta from '../components/presta.vue'
import newpage from '../components/newpage.vue'



export default {
  name: "myMenu",
  components: {
        presta,
       newpage,
       prestation,
       myFooter,
       
  }
};
</script>

<style scoped>
* {
      box-sizing: border-box;
       margin: 0;
      padding: 0;
}
@media screen and (min-width: 1280px){
    
.lire a{
    text-decoration: none;
     font-size: 67px;
    color: #1f1220;
    font-family: 'Galada';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    position: relative;
    left: 37%;
    top: 223px;
}
.ctn2 {
        width: 100%;
        height: 95vh;
        background-image: url("../assets/imgfleur3.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
.prod{
    position: relative;
    top: 80px;
    HEIGHT: 1px;
}
.nouv{
       font-size: 52px;
       color: #1f1220;
    font-family: 'Spirax';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    margin-left: 2px;
}
.nouvp{
     font-size: 20px;
    color: #1f1220b0;
    font-family: 'Bodini MT';
    font-weight: 500;
    text-align: -webkit-center;
    width: 34%;
    margin-left: 442px;
}
.trait{
    width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 145px;
    margin-top: 28px;
    position: absolute;
}
.trait2{
        width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 870px;
    margin-top: 28px;
    position: absolute;
}


h4{
      color: #f1f1f1;
    font-size: 45px;
    position: absolute;
    top: 235%;
    left: 28%;
    font-family: 'Spirax';
}
.para{
    color: #f1f1f1;
    font-size: 25px;
    position: absolute;
    top: 248%;
    left: 21%;
    font-family: 'Bodini MT';
    width: 61%;
    text-align: -webkit-center;
}



.section1{
    position: relative;
    background-color: #7F6E6F;
    top: 894px;
}

.totalform{
        width: 862px;
    height: 371px;
    left: 18%;
    top: -82px;
    z-index: 3;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
}

.phairdo{
  font-size: 21px;
    color: #1f1220;
    text-align: -webkit-auto;
    font-family: 'Bodini MT';
    display: -webkit-inline-box;
    width: 74%;
    MARGIN-LEFT: 121px;
}
h2{
       font-size: 52px;
color: #1f1220;
    font-family: 'Spirax';
    font-weight: bold;
    margin-top: 17px;
    margin-left: 161px;
    text-transform: capitalize;
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
 .ctn1 {
        width: 100%;
        height: 120vh;
        background-image: url("../assets/imgfleurjaune.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
    .care{
       font-size: 38px;
    color: honeydew;
    position: absolute;
    top: 240px;
    left: 25%;
    font-family: 'Bodini MT';
    
    }
    .reserve{
        color: honeydew;
    font-size: 37px;
    position: absolute;
    left: 29%;
    top: 310px;
    font-family: 'Linotype Didot';
    font-style: italic;
    font-weight: 300;
    }
    button{
        position: absolute;
    top: 425px;
    left: 38%;
    border-radius: 8px;
    width: 20%;
    font-weight: bold;
    font-size: 44px;
    font-family: 'Spirax';
    color: #1f1220;
    background: none;
    border: groove;
    border-color: #1f1220;
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

@media screen and (min-width: 1024px) and (max-width: 1279.99px){
    
    
.lire a{
    text-decoration: none;
     font-size: 67px;
    color: #1f1220;
    font-family: 'Galada';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    position: relative;
    left: 37%;
    top: 223px;
}
.ctn2 {
        width: 100%;
        height: 95vh;
        background-image: url("../assets/imgfleur3.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
.prod{
    position: relative;
    top: 80px;
    HEIGHT: 1px;
}
.nouv{
       font-size: 52px;
       color: #1f1220;
    font-family: 'Spirax';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    margin-left: 2px;
}
.nouvp{
     font-size: 20px;
    color: #1f1220b0;
    font-family: 'Bodini MT';
    font-weight: 500;
    text-align: -webkit-center;
    width: 34%;
    margin-left: 442px;
}
.trait{
    width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 145px;
    margin-top: 28px;
    position: absolute;
}
.trait2{
        width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 870px;
    margin-top: 28px;
    position: absolute;
}


h4{
      color: #f1f1f1;
    font-size: 45px;
    position: absolute;
    top: 235%;
    left: 28%;
    font-family: 'Spirax';
}
.para{
    color: #f1f1f1;
    font-size: 25px;
    position: absolute;
    top: 248%;
    left: 21%;
    font-family: 'Bodini MT';
    width: 61%;
    text-align: -webkit-center;
}



.section1{
    position: relative;
    background-color: #7F6E6F;
    top: 894px;
}

.totalform{
        width: 862px;
    height: 371px;
    left: 18%;
    top: -82px;
    z-index: 3;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
}

.phairdo{
  font-size: 21px;
    color: #1f1220;
    text-align: -webkit-auto;
    font-family: 'Bodini MT';
    display: -webkit-inline-box;
    width: 74%;
    MARGIN-LEFT: 121px;
}
h2{
       font-size: 52px;
color: #1f1220;
    font-family: 'Spirax';
    font-weight: bold;
    margin-top: 17px;
    margin-left: 161px;
    text-transform: capitalize;
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
 .ctn1 {
        width: 100%;
        height: 120vh;
        background-image: url("../assets/imgfleurjaune.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
    .care{
       font-size: 38px;
    color: honeydew;
    position: absolute;
    top: 240px;
    left: 25%;
    font-family: 'Bodini MT';
    
    }
    .reserve{
        color: honeydew;
    font-size: 37px;
    position: absolute;
    left: 29%;
    top: 310px;
    font-family: 'Linotype Didot';
    font-style: italic;
    font-weight: 300;
    }
    button{
        position: absolute;
    top: 425px;
    left: 38%;
    border-radius: 8px;
    width: 20%;
    font-weight: bold;
    font-size: 44px;
    font-family: 'Spirax';
    color: #1f1220;
    background: none;
    border: groove;
    border-color: #1f1220;
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

@media screen and (min-width: 768px) and (max-width: 1023.99px){

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


.lire a{
    text-decoration: none;
     font-size: 67px;
    color: #1f1220;
    font-family: 'Galada';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    position: relative;
    left: 37%;
    top: 223px;
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



.ctn2 {
        width: 100%;
        height: 95vh;
        background-image: url("../assets/imgfleur3.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
.prod{
    position: relative;
    top: 80px;
    HEIGHT: 1px;
}
.nouv{
       font-size: 52px;
       color: #1f1220;
    font-family: 'Spirax';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    margin-left: 2px;
}
.nouvp{
     font-size: 20px;
    color: #1f1220b0;
    font-family: 'Bodini MT';
    font-weight: 500;
    text-align: -webkit-center;
    width: 34%;
    margin-left: 442px;
}
.trait{
    width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 145px;
    margin-top: 28px;
    position: absolute;
}
.trait2{
        width: 25%;
    background-color: #1f1220;
    height: 1px;
    margin-left: 870px;
    margin-top: 28px;
    position: absolute;
}


h4{
     color: #f1f1f1;
    font-size: 50px;
    position: absolute;
    top: 189%;
    left: 45%;
    display: table;
    font-family: 'Spirax';

}
.para{
        color: #f1f1f1;
    font-size: 25px;
    position: absolute;
    top: 200%;
    left: 55%;
    font-family: 'Bodini MT';
    width: 73%;
    text-align: -webkit-center;
}



.section1{
        position: relative;
    background-color: #7F6E6F;
    top: 894px;
    width: 176%;
    z-index: 3;
}

.totalform{
        width: 862px;
    height: 371px;
    left: 18%;
    top: -82px;
    z-index: 3;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
}

.phairdo{
  font-size: 25px;
    color: #1f1220;
    text-align: -webkit-auto;
    font-family: 'Bodini MT';
    display: -webkit-inline-box;
    width: 74%;
    MARGIN-LEFT: 121px;
}
h2{
       font-size: 56px;
color: #1f1220;
    font-family: 'Spirax';
    font-weight: bold;
    margin-top: 17px;
    margin-left: 161px;
    text-transform: capitalize;
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
 .ctn1 {
        width: 176%;
        height: 120vh;
        background-image: url("../assets/imgfleurjaune.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
    .care{
       font-size: 38px;
    color: honeydew;
    position: absolute;
    top: 240px;
    left: 25%;
    font-family: 'Bodini MT';
    
    }
    .reserve{
        color: honeydew;
    font-size: 37px;
    position: absolute;
    left: 29%;
    top: 310px;
    font-family: 'Linotype Didot';
    font-style: italic;
    font-weight: 300;
    }
    button{
    position: absolute;
    top: 593px;
    left: 73%;
    border-radius: 6px;
    width: 34%;
    font-weight: bold;
    font-size: 49px;
    font-family: 'Spirax';
    color: #fdfcfd;
    z-index: 3;
    background: none;
    border: groove;
    border-color: blanchedalmond;
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



}

@media screen and (min-width: 480px) and (max-width: 767.99px){


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


.lire a{
    text-decoration: none;
     font-size: 67px;
    color: #1f1220;
    font-family: 'Galada';
    font-weight: 500;
    text-transform: capitalize;
    text-align: -webkit-center;
    position: relative;
    left: 37%;
    top: 223px;
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



.ctn2 {
        width: 281vw;
        height: 95vh;
        background-image: url("../assets/imgfleur3.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 66%;
   
    }
.prod{
        position: relative;
    top: 15px;
    HEIGHT: 481px;
}
.nouv{
     font-size: 76px;
    color: #1f1220;
    font-family: 'Spirax';
    font-weight: 900;
    text-transform: capitalize;
    text-align: -webkit-center;
    margin-left: 508px;
}
.nouvp{
         font-size: 33px;
    color: #1f1220b0;
    font-family: 'Bodini MT';
    font-weight: 500;
    text-align: -webkit-center;
    width: 124%;
    margin-left: 420px;
}
.trait{
    width: 36%;
    background-color: #1f1220;
    height: 2px;
   margin-left: 304px;
    margin-top: 46px;
    position: absolute;
}
.trait2{
    width: 36%;
    background-color: #1f1220;
    height: 2px;
    margin-left: 959px;
    margin-top: 46px;
    position: absolute;
}


h4{
     color: #f1f1f1;
    font-size: 50px;
    position: absolute;
    top: 263%;
    left: 83%;
    width: 132%;
    display: table;
    font-family: 'Spirax';

}
.para{
        color: #f1f1f1;
    font-size: 25px;
    position: absolute;
    top: 259%;
    display: none;
    left: 55%;
    font-family: 'Bodini MT';
    width: 73%;
    text-align: -webkit-center;
}



.section1{
        position: relative;
    background-color: #7F6E6F;
    top: 1244px;
    width: 281vw;
    z-index: 3;
}

.totalform{
        width: 862px;
    height: 371px;
    left: 18%;
    top: -82px;
    z-index: 3;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
}

.phairdo{
  font-size: 25px;
    color: #1f1220;
    text-align: -webkit-auto;
    font-family: 'Bodini MT';
    display: -webkit-inline-box;
    width: 74%;
    MARGIN-LEFT: 121px;
    display: none;
}
h2{
       font-size: 67px;
    color: #1f1220;
    font-family: 'Spirax';
    font-weight: bold;
    margin-top: 76px;
    margin-left: 88px;
    text-transform: capitalize;
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
 .ctn1 {
        width: 281vw;
        height: 120vh;
        background-image: url("../assets/imgfleurjaune.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position-x: right;
    margin-top: 194%;
   
    }
    .care{
       font-size: 38px;
    color: honeydew;
    position: absolute;
    top: 240px;
    left: 25%;
    font-family: 'Bodini MT';
    
    }
    .reserve{
        color: honeydew;
    font-size: 37px;
    position: absolute;
    left: 29%;
    top: 310px;
    font-family: 'Linotype Didot';
    font-style: italic;
    font-weight: 300;
    }
    button{
    position: absolute;
    top: 593px;
    left: 73%;
    border-radius: 6px;
    width: 34%;
    font-weight: bold;
    font-size: 49px;
    font-family: 'Spirax';
    color: #fdfcfd;
    z-index: 3;
    background: none;
    border: groove;
    border-color: blanchedalmond;
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

}
</style>