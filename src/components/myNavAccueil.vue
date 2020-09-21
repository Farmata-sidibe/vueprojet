<template>
    <div>
               <!-- header et navbar -->
            <div id="slider">

<div class="navbar">
            <div class="main-menu" id="menu">
                <input class="menu-btn" type="checkbox" name="" id="menu-btn">

                <label class="menu-icon" for="menu-btn">

            <span class="navicon"></span>

            </label>

                <img class="logo" src="../assets/mon-logo.png" alt="mon logo">


                <ul class="texte">
                    <li><a href="#">ACCUEIL</a></li>
                    <li><a href="#">COIFFEUR</a></li>
                    <li><a href="#">BARBIER</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">PRODUITS</a></li>
                </ul>


                <div class="bouton">

                    <a href="#" class="premier" ><button class="bouton_etablissement">Ajouter votre salon</button></a>
                    <a href="#" class="premier" ><button class="bouton_compte">Mon compte</button></a>

                </div>


            </div>
        </div>

<div class="form">
<form>
<p>We care about <br> your hair § your <br> well being</p>
</form>
</div>

                <div id="les_slider">
                    <!--<figure> représente une figure (un schéma), qui peut être accompagné 
                        d'une légende grâce à l'élément <figcaption>. 
                            Il est normalement référencé de manière unique.-->
                    <figure id="slide_un">
                        <img src="../assets/image-slide-1.jpg" alt="mon premier slide">
                        <!-- permet d'indiquer un sous-titre, une légende, 
                            associé à une figure ou à une illustration-->
                        
                    </figure>

                    <figure id="slide_deux">
                        <img src="../assets/image-slide-2.jpg" alt="mon deuxieme slide">
                       
                    </figure>

                    <figure id="slide_trois">
                        <img src="../assets/image-slide-3.jpg" alt="mon troisieme slide">
                        
                    </figure>

                    <figure id="slide_quatre">
                        <img src="../assets/image-slide-4.jpg" alt="mon quatrieme slide">
                       
                    </figure>

                    <figure id="slide_cinq">
                        <img src="../assets/image-slide-1.jpg" alt="mon cinquieme slide">
                        
                    </figure>

                </div>
            </div>

               <!--section un -->
            <div class="sectionUn">
              <p>Les coiffeurs talentueux et leurs style inspirant surpassent les tendances 
              avec HairStyle trouvez votre salon et faite votre réservation de rendez-vous beauté facilement</p>
            </div>


                <!-- section deux -->
            <div class="sectionDeux">
  <form></form>
<img class="imageHairdo" src="../assets/Hairdo.jpg" alt="mon logo">
<div class="welcom">
<h2>Welcom to HairStyle</h2>
<p>Notre objectif principale est de permettre <br> au coiffeur d'ajouter  leur institut, d'assurer <br> leur visibilité et celle des coiffeur à domicile dans le marché.
  <br> Ceci permettra à la clientéle d'avoir la <br> possibilité de faire  sa réservation de rendez-vous beauté <br> en ligne avec le salon de son choix.
</p>
</div>
            </div>

                <!-- section trois -->
<div class="sectionTrois">
   <h1>Les Prestations</h1>
 <table class="prestation">
                <!--tr définit une ligne de cellules dans un tableau-->
                <tr>
                    <!-- définit une cellule d'un tableau qui contient des données.-->
                    <td>
                        <img src="../assets/image-prestation-1.jpg" alt="prestation">
                        <form class="un">
                            <p>-Coupe Homme-</p>
                        </form>
                        
                    </td>

                    <td>
                        <img src="../assets/image-prestation-2.jpg" alt="prestation">
                        <form class="deux">
                            <p>-Coiffure Femme-</p>
                        </form>
                    </td>

                    <td>
                        <img src="../assets/image-prestation-3.jpg" alt="prestation">
                        <form class="trois">
                            <p>-Coupe Enfant-</p>
                        </form>
                    </td>

                    <td>
                        <img src="../assets/image-prestation-4.jpg" alt="prestation">
                        <form class="quatre">
                            <p>-Coupe Cheveux-</p>
                        </form>
                    </td>
                </tr>
            </table>


 </div>

 <!-- section quatre les produits-->

 <div class="carousel" data-flickity='{ "wrapAround": true }'>

            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-1.jpg"></div>
            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-2.jpg"></div>
            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-3.jpg"></div>
            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-1.jpg"></div>
            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-2.jpg"></div>
            <div class="carousel-cell"><img class="imgcarousel" src="../assets/image-slide-3.jpg"></div>
        </div>

</div>
</template>

<script>

export default {
    name: "myNavAccueil",
}

</script>

<style>

.carousel {
        position: absolute;
        width: 60% !important;
        height: 100% !important;
        left: 35%;
        top: 115% !important;
        overflow: hidden;
        padding-right: 20px !important;

    }

    ol .flickity-page-dots {
        visibility: hidden !important;
    }

    .carousel-cell {
        width: 50% !important;
        height: 100% !important;
        border-radius: 5px;
    }

    /*carousel image*/

    .imgcarousel {
        width: 80%;
        height: 700px;
        margin-right: 280px !important;
        margin-left: 290px !important;

    }

    .flickity-prev-next-button .flickity-button-icon {
        position: absolute !important;
        background-color: rgb(153, 187, 248) !important;
        height: 40px !important;
        width: 40px;
        border: 2px solid rgb(0, 0, 78);
        border-radius: 100px;
        top: 125% !important;
        margin-right: 80% !important;
    }





                        /* css section trois */
.sectionTrois h1{
    font-family: 'Galada', cursive;
    color: #1f1220;
    text-align: center;
    position: relative;
    bottom: 17px;
}
.sectionQuatre h1{
    font-family: 'Galada', cursive;
    color: #1f1220;
    text-align: center;
    position: relative;
    bottom: 112px;
}

.un {
    width: 159px;
    height: 108px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 11%;
    top: 35%;
    opacity: 0.70;
    border-color: #dd9919;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
}
.deux {
    width: 165px;
    height: 108px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 30%;
    top: 35%;
    opacity: 0.70;
    border-color: #dd9919;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
}
.trois {
    width: 154px;
    height: 108px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 50%;
    top: 35%;
    opacity: 0.70;
    border-color: #dd9919;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
}
.quatre {
    width: 159px;
    height: 108px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 69%;
    top: 35%;
    opacity: 0.70;
    border-color: #dd9919;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
}
.sectionTrois {
        position: relative;
        bottom: -53px;
    }
    .prestation {
        border-collapse: collapse;
        margin: auto;
        width: 80%;
    }
    .prestation td {
        /*Un tel élément se comporte comme un élément HTML <table> 
    avec une boîte en ligne et pas de bloc. À l'intérieur 
    de la boîte de tableau, on aura un contexte de bloc.*/
        display: inline-table;
        margin-right: 29px;
    }
    img {
        width: 180px;
        
    }
    img {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
    }
    img:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    td {
        text-align: center;
    }
    .prestation p {
        color: white;
        font-family: 'Bodini MT';
        font-weight: bold;
        font-size: 14px;
        position: absolute;
    bottom: 29px;
    left: 27px;
    }








                           /* css section deux */
.welcom p{
font-family: 'Galada', cursive;
font-size: 22px;
color: #1f1220;
}
.welcom{
  position: absolute;
    left: 50%;
    top: 149%;
}
.welcom h2{
  text-align: center;
  font-family: 'Spirax';
  color: #1f1220;
  font-size: 28px;
  position: absolute;
    top: -76PX;
    left: 41px;
}

.sectionDeux{
   background-color: #9e8688;
   height: 500px;
  
}
.imageHairdo{
   width: 421px;
    position: absolute;
    left: 33px;
    top: 121%;
    height: 354px;
}
.sectionDeux form{
 width: 404px;
    height: 358px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: #7f6e6fb9;
    position: absolute;
    left: 8%;
    top: 127%;
    border-color: #1f1220;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 3px;
}

.form {
    width: 321px;
    height: 206px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    left: 40%;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: 115px;
  
}
.form p {
  color: white;
    font-family: "Bodini MT";
    font-size: 37px
  
}

           

    /* css section un*/ 
    .sectionUn{
      background-color: #1f1220;
        height: 50px;
        z-index: 3;
    }
    .sectionUn p {
      font-family: 'Galada', cursive;
    font-size: 16px;
    color: #fff;
    position: absolute;
    bottom: -54px;
    left: 32px;
    }

.bouton_etablissement {
    border: 2px#7F6E6F solid;
    border-radius: 3px;
    background-color: #7F6E6F;
    position: absolute;
    width: 130px;
    height: 30px;
    border-radius: 7px;
    
    right: -33px;
     color: #1f1220;
        font-size: 12px;
        font-weight: bold;
    }
    .bouton_compte {
    border: 2px #7F6E6F solid;
    border-radius: 3px;
    background-color: #7F6E6F;
    position: absolute;
    width: 130px;
    height: 30px;
    border-radius: 7px;
    
    right: -210px;
    color: #1f1220;
        font-size: 12px;
        font-weight: bold;
    }
    .bouton a {
        text-decoration: none;
        
    }
    .bouton{
        position: relative;
    left: 35%;
    top: 37px;
    }
#menu-btn {
        display: none;
    }
    .navbar {
        background-color: #1f1220;
        height: 70px;
        z-index: 3;
        opacity: 0.80;
    }
    .texte li a {
        color: #fff;
        text-decoration: none;
        font-family: "Bodini MT";
    }

ul {
        /*est une propriété raccourcie qui permet de définir list-style-type, 
    list-style-image et list-style-position.*/
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .texte li {
    float: left;
    padding-right: 22px;
    position: relative;
    top: 44px;
    
    }
    .navbar img {
    width: 74px;
    position: absolute;
    left: 6%;
    top: -2px;
        
    }
    .texte {
        margin: -75px 0px 0 230px;
        font-size: 12px;
    }



/* ............css des slide....... */
#slider {
        position: relative;
        max-width: 100%;
        /*overflow est une propriété raccourcie qui nous permet de  
    gérer le dépassement du contenu d'un élément dans son bloc
    Hidden: Le contenu est rogné si besoin pour s'inscrire dans 
    la boîte de remplissage et aucune barre de défilement n'est affichée.
    */
        overflow: hidden;
        height: 100vh;
    }
    #les_slider {
        position: absolute;
        top: 0;
        left: 0;
        /* display flex L'élément se comporte comme un élément de bloc 
    et dispose son contenu selon le modèle des boîtes flexibles.*/
        display: flex;
        max-height: 100%;
    }
    #les_slider figure {
        /* display inline-block L'élément s'inscrit dans le contenu 
    environnant comme une boîte en ligne et organise son propre contenu en bloc.
*/
        display: inline-block;
        width: 100vw;
        max-height: 100%;
        margin: 0;
    }
    #les_slider figure img {
        width: 100%;
        position: relative;
        top: 50%;
        /* transform modifie l'espace de coordonnées utilisé 
    pour la mise en forme visuelle. 
    La fonction translate() permet de déplacer 
    un élément sur le plan formé par le document
    */
        transform: translateY(-50%);
    }
    
    @keyframes slide {
        /*@keyframes permet aux auteurs de définir les étapes 
    qui composent la séquence d'une animation CSS. Cela 
    permet de contrôler une animation plus finement et de les définir*/
        0%,
        20% {
            left: 0;
        }
        25%,
        40% {
            left: -100vw;
        }
        50%,
        60% {
            left: -200vw;
        }
        75%,
        80% {
            left: -300vw;
        }
        100%,
        100% {
            left: -400vw;
        }
    }
    #les_slider {
        /*
    animation-name définit une liste d'animations qui doivent être appliquées 
    à l'élément ciblé. Chaque nom indique une règle 
    @ @keyframes qui définit les valeurs des propriétés pour la séquence.
    */
        animation-name: slide;
        /*définit la durée d'une animation pour parcourir un cycle.*/
        animation-duration: 10s;
        /* indique le nombre de cycles utilisés pour 
    répéter une animation avant que celle-ci s'arrête.*/
        animation-iteration-count: infinite;
        /*définit la façon dont une animation CSS 
    doit se dérouler au fur et à mesure de chaque cycle.
    ease-in-out  l'animation commence lentement, accèlere 
    puis ralentit à nouveau avant la fin.*/
        animation-timing-function: ease-in-out;
        /*indique la façon dont une animation CSS doit appliquer 
    les styles à sa cible avant et après son exécution.*/
        animation-fill-mode: forwards;
    }
    #les_slider:hover {
        /*définit si une animation est en cours d'exécution ou si elle est en pause.*/
        animation-play-state: paused;
    }

</style>