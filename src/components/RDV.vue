<template>
  <div>
     <section id="header">

        <!-- ===================  PARTIR NAVIGATION ( NAVBAR ) ============================ -->
        <nav>
            <!-- ===================  LOGO ========================= -->
            <a href="#" class="logo"><img src="../assets/TAILOR.png" alt="" class="tailor"></a>

            <!-- ============ NOTRE MENU =============================== -->
            
            <ul>
                <li><a href="#" class="active">Accueil</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Institut de beauté</a></li>
                <li><a href="#contact-nous">Boutique</a></li>
            </ul>
           
            <!--bars--------------->
            <!--   <div class="toggle"></div> -->

        </nav>

        <!-- ================ HEADER PARTIR TEXTE =============================== -->
         <div id="fan">
      <ul>
  <li><img  title="" alt="css3" 
  src="../assets/x9BcWygwrT.jpg" /></li>
  <li><img  title="" alt="css3" 
  src="../assets/sli4.jpg" /></li>
 <li><img  title="" alt="css3" 
  src="../assets/sli7.jpg" /></li>
  <li><img  title="" alt="css3" 
  src="../assets/mamanenfant.jpg" /></li>
</ul>
 <div class="text-container">
            <p>Bienvenue,</p>
            <p>Love your hair </p>
            <p>Dans cette vie chacun  <br>a son tour chez le coiffeur</p>
            <button class="engagez-btn">Réserver</button>
            <button class="telecharger-anime">Boutique</button>
        </div>

        <!-- ==================== NOTRE PHOTO POUR LE HEADER ========================== -->
      <!--   <img class="notrePhoto" src="../assets/logo-haira.png" alt="model">-->
    </div>
       

    </section>
   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#fan ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
#fan li {
  position: absolute;
  
}
#fan img{
  border-radius: 1px;
  box-shadow: 0 0 5px 0 hsla(0,0%,30%, .3);
width: 1349px;
height: 120vh;

}
#fan li:nth-child(4) {
  animation: xfade 16s 0s infinite;
}
#fan li:nth-child(3) {
  animation: xfade 16s 4s infinite;
}
#fan li:nth-child(2) {
  animation: xfade 16s 8s infinite;
}
 #fan li:nth-child(1) {
  animation: xfade 16s 12s infinite;
}
@keyframes xfade{
  17% {
    opacity:1;
  }
  25% {
    opacity:0;
  }
  92% {
    opacity:0;
  }
}

body {
    background-color: #ffffd4;
    margin: 0px;
    padding: 0px;
}

button {
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
}
.tailor{
  width: 153px;
    margin-left: 514px;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*====================================  BARRE DE NAVIGATION  ====================================*/

nav ul {
    list-style: none;
}

a {
    text-decoration: none;
}

nav ul {
    display: flex;
    margin-top: 144px;
    margin-left: 264px;
    position: absolute;
}

nav ul li a {
    margin: 30px;
    font-family: myriad pro regular;
    color: #5b4461;
    font-size: 20px;
    font-weight: 700;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 168px;
    background-color: rgba(255, 255, 255, 0.959);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.842);
    padding: 0px 5%;
}


/* pas trop utile */

#header {
    width: 100%;
    height: 95vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.logo {
    font-family: RoadTest;
    color: #000000;
    font-size: 22px;
}

.active {
    color: #3b313f;
    font-weight: bold;
}


/* ===== Responsive =====*/


/* .toggle {
    display: none;
}
 */


/* ===== ======= =====*/


/*  ++++++++++++++++++++++++++++++++++++++ PARTIR HEADER TEXTE ++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* 
    ici nous lui disons que on veux cible mon enfant dans la class 
    .text-container qui est le p et on cible le 1er p
 */

.text-container p:nth-child(1) {
    font-family: calibri;
    font-weight: bold;
    color: rgb(31, 13, 32);
    font-size: 22px;
}

.text-container p:nth-child(2) {
    font-family: 'Dancing Script';
    font-weight: bold;
    letter-spacing: 1px;
    color: #be991e;
    font-size: 50px;
}

.text-container p:nth-child(3) {
    font-family: 'Bodini MT';
    color: #584861;
    font-size: 30px;
    line-height: 30px;
}

.text-container p {
    margin: 45px 0px 25px;
    line-height: 0px;
}

.text-container button {
    width: 130px;
    height: 42px;
    border-radius: 10px;
    font-family: calibri;
    font-weight: bold;
    font-size: 14px;
    outline: none;
    margin: 0px 10px;
}

.text-container {
    position: absolute;
    left: 13%;
    top: 60%;
    transform: translate(-13%, -42%);
    -webkit-transform: translate(-13%, -42%);
    -moz-transform: translate(-13%, -42%);
    -ms-transform: translate(-13%, -42%);
    -o-transform: translate(-13%, -42%);
}


/* ===================== HEADER PARTIR TEXTE LES BOUTTON ================================== */

.engagez-btn {
    border: 2px solid #3d3541;
    color: #382d3a;
    background-color: transparent;
}

.telecharger-anime {
    background-color: #523c52;
    color: #fff;
    border: none;
}


/* ============================= NOTRE PHOTO POUR LE SITE ======================================= */

</style>