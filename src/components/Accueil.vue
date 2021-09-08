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
                              <li><a href="#">Institut de beauté</a></li>
                              <li><a href="/navproduit"><i class="fas fa-cart-plus"></i>Boutique</a></li>
                              <li><a href="/login"><i class="fas fa-user-circle"></i>Compte</a></li>
                        </ul>
                  </div>
                  
            </nav>
</div>

<div class="header">
    <video src="../assets/stock-footage-portrait-of-afro-american-girl-on-floral-background-in-slow-motion-video.mp4" autoplay loop muted></video>
    <div class="text-container">
          <p>Bienvenue,</p>
    </div>
</div>

<div id="sectionUne">
        <img src="../assets/x9BcWygwrT.jpg" />
        
        <div class="sectionUne-Info">
            <p>Welcom to Hairstyle</p>
            <p>Menus : <span class="genreAnime"> <em> Blog - Boutique - Barbier - Salon de coiffure  </em></span> </p>
            <p>Notre objectif principale est de permettre au coiffeur d'ajouter leur institut, d'assurer leur visibilité et celle des coiffeur à domicile dans le marché. Ceci permettra à la clientéle d'avoir la possibilité de faire sa réservation de rendez-vous
                beauté en ligne avec le salon de son choix..</p>
        </div>
</div>

<div class="sectionDeux">
    <div class="prest">
    <h1>~~Nos prestation du moment~~</h1>
    </div>
    <newpage/>
</div>

<div class="sectionTrois">
    <form class="presta">
        <div class="text-presta">
        
    <table>
        <caption class="caption">~~Menus~~</caption>

        <tr>
            <td>Tissage</td>
            <td>24€</td>
        </tr>
        <tr>
            <td>Coloration</td>  
            <td>30€</td>
        </tr>
        <tr>
            
            <td>Lissage Brésilien</td>
            <td>70€</td>
            
        </tr>
        <tr>
            <td>Coupe César</td>
            <td>20€</td>
        </tr>
        <tr>
            <td>Méche</td>
            <td>15€</td>
        </tr>
        
            <caption class="resev"><a href="http://127.0.0.1/wordpress/reservation/"> Réserver></a></caption>
       
    </table>
                
            
        </div>
    </form>
</div>
 
<div class="sectionQuatre">
  <div class="text-produit">
         <h2> ~~Nouveautés~~</h2>
         <p>Découvrez les nouveaux produits capillaires pour 
        réparer et redonner vie à vos cheveux.</p>
    </div>
    <prestation/>
</div>

<div class="sectionCinq">
    <h2>Nous trouver</h2>
    <div class="paralax">
       <form class="formplan">
       <div class="text-plan">
           <h4>Heure d'ouverture</h4>
           <p>Lun-Ven: 09H00 - 20H00 \ Samedi: 10H00 - 21H00 \ Dimanche: 08H30 - 15H</p>
           <h4>Adresse</h4>
           <p>16, Rue du château, 75001 Paris, France</p>
           <p>hairs-style.fr \ Tel: 0664405692</p>
       </div>
       </form>
    </div>
</div>
<myFooter/>
<!--social-attach-bar-->
    <div class="social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
</div>
</template>

<script>
import newpage from '../components/newpage.vue'
import prestation from '../components/prestation.vue'
import myFooter from '../components/myFooter.vue'


export default {
    name: "Accueil",
    components: {
        newpage,
        prestation,
        myFooter
    }
}
</script>

<style scoped>
*{
    box-sizing: content-box;
    margin: 0px;
    padding: 0px;
}
/**MAX ORDI */
@media screen and (min-width: 1280px) {
/**ATTACHE BAR */
.social {
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
}

.social a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
    line-height: 0px;
    background-color: #f3f3f3;
    border: 1px solid #fafafa;
    box-shadow: 2px 2px 12px rgba(39, 13, 37, 0.287);
}

.social a:hover {
    background-color: #22111f;
    transition: all ease 0.5s;
}

.social i {
    font-size: 20px;
    color: #2B2B2B;
}
/**FIN ATTACHE BAR */


/**SECTION CINQ */
.sectionCinq h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 3;
}
.paralax{
    width: 100%;
    height: 98vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ClEQGczq4O.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.formplan{
   width: 448px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.text-plan{
    
    padding-top: 66px;
}
.text-plan h4{
    LINE-HEIGHT: 3;
    text-align: center;
    font-size: 34px;
    font-family: 'Galada';
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.text-plan p{
    text-align: center;
    font-size: 18px;
    font-family: 'Crimson Text';
    font-weight: 300;
    color: rgb(255, 255, 255);
}

/**FIN SECTION CINQ */



/**SECTION QUATRE */
.text-produit h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
}
.text-produit p{
    text-align: center;
    font-family: 'Galada';
    font-weight: 300;
    font-size: 36px;
    color: rgb(63, 54, 63);
}
/**FIN SECTION QUATRE */



/**SECTION TROIS */
.sectionTrois {
    width: 100%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/sli10.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.presta{
    width: 436px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.caption{
    font-size: 70px;
    font-family: 'Parchment';
    font-weight: 400;
    color: rgb(248, 246, 246);
    caption-side: top;
    text-align: center;
}
table  {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}
td {
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    padding: 14px 113px 1px 55px;
    font-family: 'Crimson Text';
}
.resev{
    text-align: center;
    font-size: 20px;
    font-family: 'Galada';
    caption-side: bottom;
}
.resev a{
 text-decoration: none;
 color: rgb(196, 193, 193);
}
.resev a:hover{
    color: rgb(133, 85, 80);
}



/**FIN SECTION TROIS */

/**SECTION DEUX */
.prest{
    text-align: center;
}
.prest h1{
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 4;
    font-family: 'Parchment';
}

/**FIN SECTION DEUX */

/**section UNE */

#sectionUne {
    width: 80%;
    height: 330px;
    background: #f5ecec;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: -7% auto 20px auto;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
}

#sectionUne img {
    height: 250px;
}

.sectionUne-Info {
    width: 500px;
}

.sectionUne-Info p:nth-child(1) {
    color: #d7b52c;
    font-family: myriad pro;
    font-weight: bold;
    font-size: 33px;
}

.sectionUne-Info p:nth-child(2) {
    color: #535050;
    font-size: 13px;
    font-family: myriad pro;
    font-weight: bold;
    
}

.sectionUne-Info p:nth-child(3),
.sectionUne-Info p:nth-child(4) {
    color: #251121;
    font-family: "Galada";
    font-size: 18px;
}

.genreAnime {
    color: #e992da;
}
/**fin SECTION UNE */

/**HEADER */
.header video {
    width: 100%;
    height:auto; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.header p{
    color: rgb(241, 235, 235);
    font-size: 170px;
    font-family: 'Galada';
    font-style: italic;
    font-weight: 900;
    
}
.text-container {
    position: absolute;
    left: 21%;
    top: 89%;
}

/**FIN HEADER */

/**NAVBAR */
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
    left: 32%;
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
/**ORDI */
@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
/**ATTACHE BAR */
.social {
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
}

.social a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
    line-height: 0px;
    background-color: #f3f3f3;
    border: 1px solid #fafafa;
    box-shadow: 2px 2px 12px rgba(39, 13, 37, 0.287);
}

.social a:hover {
    background-color: #22111f;
    transition: all ease 0.5s;
}

.social i {
    font-size: 20px;
    color: #2B2B2B;
}
/**FIN ATTACHE BAR */


/**SECTION CINQ */
.sectionCinq h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 3;
}
.paralax{
    width: 100%;
    height: 98vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ClEQGczq4O.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.formplan{
   width: 448px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.text-plan{
    
    padding-top: 66px;
}
.text-plan h4{
    LINE-HEIGHT: 3;
    text-align: center;
    font-size: 34px;
    font-family: 'Galada';
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.text-plan p{
    text-align: center;
    font-size: 18px;
    font-family: 'Crimson Text';
    font-weight: 300;
    color: rgb(255, 255, 255);
}

/**FIN SECTION CINQ */



/**SECTION QUATRE */
.text-produit h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
}
.text-produit p{
    text-align: center;
    font-family: 'Galada';
    font-weight: 300;
    font-size: 36px;
    color: rgb(63, 54, 63);
}
/**FIN SECTION QUATRE */



/**SECTION TROIS */
.sectionTrois {
    width: 100%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/sli10.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.presta{
    width: 436px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.caption{
    font-size: 70px;
    font-family: 'Parchment';
    font-weight: 400;
    color: rgb(248, 246, 246);
    caption-side: top;
    text-align: center;
}
table  {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}
td {
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    padding: 14px 113px 1px 55px;
    font-family: 'Crimson Text';
}
.resev{
    text-align: center;
    font-size: 20px;
    font-family: 'Galada';
    caption-side: bottom;
}
.resev a{
 text-decoration: none;
 color: rgb(196, 193, 193);
}
.resev a:hover{
    color: rgb(133, 85, 80);
}



/**FIN SECTION TROIS */

/**SECTION DEUX */
.prest{
    text-align: center;
}
.prest h1{
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 4;
    font-family: 'Parchment';
}

/**FIN SECTION DEUX */

/**section UNE */

#sectionUne {
    width: 80%;
    height: 330px;
    background: #f5ecec;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: -7% auto 20px auto;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
}

#sectionUne img {
    height: 250px;
}

.sectionUne-Info {
    width: 500px;
}

.sectionUne-Info p:nth-child(1) {
    color: #d7b52c;
    font-family: myriad pro;
    font-weight: bold;
    font-size: 33px;
}

.sectionUne-Info p:nth-child(2) {
    color: #535050;
    font-size: 13px;
    font-family: myriad pro;
    font-weight: bold;
    
}

.sectionUne-Info p:nth-child(3),
.sectionUne-Info p:nth-child(4) {
    color: #251121;
    font-family: "Galada";
    font-size: 18px;
}

.genreAnime {
    color: #e992da;
}
/**fin SECTION UNE */

/**HEADER */
.header video {
    width: 100%;
    height:auto; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.header p{
    color: rgb(241, 235, 235);
    font-size: 170px;
    font-family: 'Galada';
    font-style: italic;
    font-weight: 900;
    
}
.text-container {
    position: absolute;
    left: 21%;
    top: 89%;
}

/**FIN HEADER */

/**NAVBAR */
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
    left: 32%;
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
/**MAX TABLETTE */
@media screen and (min-width: 768px) and (max-width: 1023.99px) {
/**ATTACHE BAR */
.social {
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
}

.social a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
    line-height: 0px;
    background-color: #f3f3f3;
    border: 1px solid #fafafa;
    box-shadow: 2px 2px 12px rgba(39, 13, 37, 0.287);
}

.social a:hover {
    background-color: #22111f;
    transition: all ease 0.5s;
}

.social i {
    font-size: 20px;
    color: #2B2B2B;
}
/**FIN ATTACHE BAR */


/**SECTION CINQ */
.sectionCinq h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 3;
}
.paralax{
    width: 129%;
    height: 98vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ClEQGczq4O.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.formplan{
   width: 448px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.text-plan{
    
    padding-top: 66px;
}
.text-plan h4{
    LINE-HEIGHT: 3;
    text-align: center;
    font-size: 34px;
    font-family: 'Galada';
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.text-plan p{
    text-align: center;
    font-size: 18px;
    font-family: 'Crimson Text';
    font-weight: 300;
    color: rgb(255, 255, 255);
}

/**FIN SECTION CINQ */



/**SECTION QUATRE */
.text-produit h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
}
.text-produit p{
    text-align: center;
    font-family: 'Galada';
    font-weight: 300;
    font-size: 36px;
    color: rgb(63, 54, 63);
}
/**FIN SECTION QUATRE */



/**SECTION TROIS */
.sectionTrois {
    width: 129%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/sli10.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.presta{
    width: 436px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.caption{
    font-size: 70px;
    font-family: 'Parchment';
    font-weight: 400;
    color: rgb(248, 246, 246);
    caption-side: top;
    text-align: center;
}
table  {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}
td {
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    padding: 14px 113px 1px 55px;
    font-family: 'Crimson Text';
}
.resev{
    text-align: center;
    font-size: 20px;
    font-family: 'Galada';
    caption-side: bottom;
}
.resev a{
 text-decoration: none;
 color: rgb(196, 193, 193);
}
.resev a:hover{
    color: rgb(133, 85, 80);
}



/**FIN SECTION TROIS */

/**SECTION DEUX */
.prest{
    text-align: center;
}
.prest h1{
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 4;
    font-family: 'Parchment';
}

/**FIN SECTION DEUX */

/**section UNE */

#sectionUne {
    width: 119%;
    height: 330px;
    background: #f5ecec;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: -9% auto 20px 29px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
}

#sectionUne img {
    height: 250px;
}

.sectionUne-Info {
    width: 500px;
}

.sectionUne-Info p:nth-child(1) {
    color: #d7b52c;
    font-family: myriad pro;
    font-weight: bold;
    font-size: 33px;
}

.sectionUne-Info p:nth-child(2) {
    color: #535050;
    font-size: 13px;
    font-family: myriad pro;
    font-weight: bold;
    
}

.sectionUne-Info p:nth-child(3),
.sectionUne-Info p:nth-child(4) {
    color: #251121;
    font-family: "Galada";
    font-size: 18px;
}

.genreAnime {
    color: #e992da;
}
/**fin SECTION UNE */

/**HEADER */
.header video {
    width: 129%;
    height:auto; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.header p{
    color: rgb(241, 235, 235);
    font-size: 170px;
    font-family: 'Galada';
    font-style: italic;
    font-weight: 900;
    
}
.text-container {
    position: absolute;
    left: 21%;
    top: 49%;
}

/**FIN HEADER */

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

/**TABLETTE */
@media screen and (min-width: 480px) and (max-width: 767.99px) {
/**ATTACHE BAR */
.social {
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
}

.social a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
    line-height: 0px;
    background-color: #f3f3f3;
    border: 1px solid #fafafa;
    box-shadow: 2px 2px 12px rgba(39, 13, 37, 0.287);
}

.social a:hover {
    background-color: #22111f;
    transition: all ease 0.5s;
}

.social i {
    font-size: 20px;
    color: #2B2B2B;
}
/**FIN ATTACHE BAR */


/**SECTION CINQ */
.sectionCinq h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 3;
}
.paralax{
    width: 224%;
    height: 98vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ClEQGczq4O.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.formplan{
   width: 448px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.text-plan{
    
    padding-top: 66px;
}
.text-plan h4{
    LINE-HEIGHT: 3;
    text-align: center;
    font-size: 34px;
    font-family: 'Galada';
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.text-plan p{
    text-align: center;
    font-size: 18px;
    font-family: 'Crimson Text';
    font-weight: 300;
    color: rgb(255, 255, 255);
}

/**FIN SECTION CINQ */



/**SECTION QUATRE */
.text-produit h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
}
.text-produit p{
    text-align: center;
    font-family: 'Galada';
    font-weight: 300;
    font-size: 36px;
    color: rgb(63, 54, 63);
}
/**FIN SECTION QUATRE */



/**SECTION TROIS */
.sectionTrois {
     width: 224%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/sli10.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.presta{
    width: 436px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.caption{
    font-size: 70px;
    font-family: 'Parchment';
    font-weight: 400;
    color: rgb(248, 246, 246);
    caption-side: top;
    text-align: center;
}
table  {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}
td {
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    padding: 14px 113px 1px 55px;
    font-family: 'Crimson Text';
}
.resev{
    text-align: center;
    font-size: 20px;
    font-family: 'Galada';
    caption-side: bottom;
}
.resev a{
 text-decoration: none;
 color: rgb(196, 193, 193);
}
.resev a:hover{
    color: rgb(133, 85, 80);
}



/**FIN SECTION TROIS */

/**SECTION DEUX */
.prest{
    text-align: center;
}
.prest h1{
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 4;
    font-family: 'Parchment';
}

/**FIN SECTION DEUX */

/**section UNE */

#sectionUne {
     width: 224%;
    height: 330px;
    background: #f5ecec;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: -9% auto 20px 29px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
}

#sectionUne img {
    height: 250px;
}

.sectionUne-Info {
    width: 500px;
}

.sectionUne-Info p:nth-child(1) {
    color: #d7b52c;
    font-family: myriad pro;
    font-weight: bold;
    font-size: 33px;
}

.sectionUne-Info p:nth-child(2) {
    color: #535050;
    font-size: 13px;
    font-family: myriad pro;
    font-weight: bold;
    
}

.sectionUne-Info p:nth-child(3),
.sectionUne-Info p:nth-child(4) {
    color: #251121;
    font-family: "Galada";
    font-size: 18px;
}

.genreAnime {
    color: #e992da;
}
/**fin SECTION UNE */

/**HEADER */
.header video {
     width: 224%;
    height:auto; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.header p{
    color: rgb(241, 235, 235);
    font-size: 170px;
    font-family: 'Galada';
    font-style: italic;
    font-weight: 900;
    
}
.text-container {
    position: absolute;
    left: 21%;
    top: 49%;
}

/**FIN HEADER */

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
/**SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 479.99px) {
/**ATTACHE BAR */
.social {
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
}

.social a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
    line-height: 0px;
    background-color: #f3f3f3;
    border: 1px solid #fafafa;
    box-shadow: 2px 2px 12px rgba(39, 13, 37, 0.287);
}

.social a:hover {
    background-color: #22111f;
    transition: all ease 0.5s;
}

.social i {
    font-size: 20px;
    color: #2B2B2B;
}
/**FIN ATTACHE BAR */


/**SECTION CINQ */
.sectionCinq h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 3;
}
.paralax{
    width: 129%;
    height: 98vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/ClEQGczq4O.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.formplan{
   width: 448px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.text-plan{
    
    padding-top: 66px;
}
.text-plan h4{
    LINE-HEIGHT: 3;
    text-align: center;
    font-size: 34px;
    font-family: 'Galada';
    font-weight: 500;
    color: rgb(255, 255, 255);
}
.text-plan p{
    text-align: center;
    font-size: 18px;
    font-family: 'Crimson Text';
    font-weight: 300;
    color: rgb(255, 255, 255);
}

/**FIN SECTION CINQ */



/**SECTION QUATRE */
.text-produit h2{
    text-align: center;
    font-family: 'Parchment';
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
}
.text-produit p{
    text-align: center;
    font-family: 'Galada';
    font-weight: 300;
    font-size: 36px;
    color: rgb(63, 54, 63);
}
/**FIN SECTION QUATRE */



/**SECTION TROIS */
.sectionTrois {
    width: 129%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/sli10.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed; 
}
.presta{
    width: 436px;
    height: 510px;
    background: rgba(7, 7, 7, 0.76);
    border-radius: 5px;
    box-shadow: 6px 7px 17px rgb(27, 26, 26);
    border-radius: 8px;
}
.caption{
    font-size: 70px;
    font-family: 'Parchment';
    font-weight: 400;
    color: rgb(248, 246, 246);
    caption-side: top;
    text-align: center;
}
table  {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
}
td {
    text-align: center;
    font-size: 25px;
    color: rgb(255, 255, 255);
    padding: 14px 113px 1px 55px;
    font-family: 'Crimson Text';
}
.resev{
    text-align: center;
    font-size: 20px;
    font-family: 'Galada';
    caption-side: bottom;
}
.resev a{
 text-decoration: none;
 color: rgb(196, 193, 193);
}
.resev a:hover{
    color: rgb(133, 85, 80);
}



/**FIN SECTION TROIS */

/**SECTION DEUX */
.prest{
    text-align: center;
}
.prest h1{
    font-weight: 600;
    font-size: 66px;
    color: rgb(31, 16, 31);
    line-height: 4;
    font-family: 'Parchment';
}

/**FIN SECTION DEUX */

/**section UNE */

#sectionUne {
    width: 119%;
    height: 330px;
    background: #f5ecec;
    border-radius: 20px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    margin: -9% auto 20px 29px;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
}

#sectionUne img {
    height: 250px;
}

.sectionUne-Info {
    width: 500px;
}

.sectionUne-Info p:nth-child(1) {
    color: #d7b52c;
    font-family: myriad pro;
    font-weight: bold;
    font-size: 33px;
}

.sectionUne-Info p:nth-child(2) {
    color: #535050;
    font-size: 13px;
    font-family: myriad pro;
    font-weight: bold;
    
}

.sectionUne-Info p:nth-child(3),
.sectionUne-Info p:nth-child(4) {
    color: #251121;
    font-family: "Galada";
    font-size: 18px;
}

.genreAnime {
    color: #e992da;
}
/**fin SECTION UNE */

/**HEADER */
.header video {
    width: 129%;
    height:auto; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.header p{
    color: rgb(241, 235, 235);
    font-size: 170px;
    font-family: 'Galada';
    font-style: italic;
    font-weight: 900;
    
}
.text-container {
    position: absolute;
    left: 21%;
    top: 49%;
}

/**FIN HEADER */

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