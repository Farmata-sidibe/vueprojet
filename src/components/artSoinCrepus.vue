<template>
  <div>
<navbar/>
<a href="/blog" class="lien">Article, </a> 
<a href="/blogCoiffure" class="lien2">Coiffure</a>

        <div class="al">
<h1>Cheveux crépus: nos astuces pour une bonne routine à adopter</h1>

<img src="../assets/femenfjaune.jpg" alt="" class="im1">
<p>Les cheveux crépus sont les cheveux les plus fins du monde et particuliérement fragiles. Ils sont aussi 
cassant et trés secs d’où l’importance d’en prendre soin au quotidien. 
</p>

<h2>Le Lavage</h2>
<img src="../assets/article-soin-afro.jpg" alt="" class="im1">
<p>Contrairement aux autres types de cheveux, les cheveux crépus ont l’avantage de ne pas graisser de ce 
fait vous n’êtes pas obligé de lavé vos cheveux plusieurs fois par semaines. Vous pouvez faire un 
shampoing une fois tous les 15 jours.
 </p>

 <h2>Les types de shampoings pour les cheveux crépus </h2>
 <img src="../assets/produit_gamme-curlessence.jpg" alt="" class="im1">
 <p>Ils faudra choissir les shampoings pour cheveux secs à trés secs et on évite au maximum les shampoings
à base de sulfate ou de silicone. Faut miser alors sur des compositions naturelles à base de : beurre de karité, 
beurre de cacao, avocat,noix de coco, jojoba, abyssinie.
</p>

<img src="../assets/huile-de-ricin.jpg" alt="" class="im1">
 <p>Les cheveux crépus nécessitent d’être hydratés régulièrement. une fois par semaine vous pouvez 
réaliser un masque réparateur à un aprés shampoing adapté.
</p>

         </div>

<div class="toutsim">
<h4>Articles Similaires</h4>

<div class="sim">
<img src="../assets/article-lissage.jpg" alt="article" class="art">
<form>
<h3>Coupes cheveux fins: Découvrez nos astuces</h3>
</form>
</div>

<div class="sim1">
<a href="/artSoinCrepus"><img src="../assets/article-soin-afro.jpg" alt="article" class="art1"></a>
<form class="form1">
<a href="/artSoinCrepus"><h3>Comment entretenir les tresses afro: homme et femme</h3></a>
</form>
</div>



</div>


  </div>
</template>

<script>
import navbar from '../components/navbar.vue'

export default {
    name:"artSoinTresse",
components: {
        navbar
    },
}
</script>

<style scoped>
.lien{
    color:  #7f6e6f;
    font-size: 22px;
    font-family: "Crimson Text";
    font-weight: 900;
    font-style: italic;
    margin-left: 77px;
}
.lien2{
    color:  #7f6e6f;
    font-size: 22px;
    font-family: "Crimson Text";
    font-weight: 900;
    font-style: italic;
}
h1{
    color:  #080808;
    font-size: 40px;
    text-align: center;
    font-family: "Spirax";
    font-weight: bold;
}
h2{
     color:  #080808;
    font-size: 30px;
    text-align: center;
    font-family: "Bodini MT";
    font-weight: 900;
    font-style: italic;
}
h4{
     color:  #080808;
    font-size: 35px;
    text-align: center;
    font-family: "Spirax";
    font-weight: 900;
    float: left;
    margin-left: 73px;
    margin-top: 99px;
}
.im1{
    width: 500px;
}
.al{
    text-align: center;
}
p{
    font-size: 23px;
    color: #080808;
    font-family: "Crimson Text";
    font-weight: 400;
    text-align: -webkit-auto;
    width: 72%;
    margin-left: 214px;
    margin-top: 26px;
}
.as{
     font-size: 23px;
    color: #080808;
    font-family: "Crimson Text";
    font-weight: 400;
    margin-top: -49px;
}
form{
    background-color: #170d1b;
    width: 300px;
    height: 74px;
    top: 368px;
    left: 313px;
    position: absolute;
}
.form1{
    background-color: #170d1b;
    width: 300px;
    height: 74px;
    top: 368px;
    left: 901px;
    position: absolute;
}
h3{
    font-size: 24px;
    color: blanchedalmond;
    font-family: "Crimson Text";
    font-weight: 900;
    font-style: italic;
    text-align: center;
}
.art{
    width: 350px;
    margin-top: 176px;
    margin-left: -150px;
    position: absolute;
    height: 226px;
}
.art1{
    width: 350px;
    margin-top: 176px;
    margin-left: 435px;
    position: absolute;
    height: 226px;
}
.sim{
    position: relative;
}
.sim1{
    position: relative;
}
</style>