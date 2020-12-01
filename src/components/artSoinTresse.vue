<template>
  <div>
<navbar/>
<a href="/blog" class="lien">Article, </a> 
<a href="/blogCoiffure" class="lien2">Coiffure</a>

        <div class="al">
<h1>Comment entretenir les tresses Afro: homme et femme</h1>

<img src="../assets/article-tresse.jpg" alt="" class="im1">
<p>Les tresses c’est parfait, cela nous permet de ne pas se prendre la tête sur sa coiffure pendant un petit 
moment.Mais il faut savoir en prendre soin avant de vous lancez.
</p>

<h2>Avant le tressage</h2>
<img src="../assets/hommeafro.jpg" alt="" class="im1">
<p>Nettoyer et hydrater votre cuir chevelure et vos cheveux au maximun, plus vos cheveux seront hydrater,
plus ils seront protégés et de plus les tresses dureront dans le temps.
Pensez à faire un bain d’huile pour hydrater les cheveux crépus. Le shampoing permettre de tresser sur 
 un cuir chevelure propre et un aprés shampoing pour faire briller assouplir et hydrater.
 </p>

 <h2>Aprés le tressage</h2>
 <img src="../assets/jaunetressei9P.jpg" alt="" class="im1">
 <p>Si vous pouvez garder vos tresses entre 3 et 4 semaines maximum, il faudra entretenir votre cuir
chevelure et vos tresses au minimun.
Faudra laver vos tresses au minimum une fois par semaine. Vous pouvez utiliser votre shampoing
habituel, si possible un shampoing doux.
</p>
<p class="as">
 Placez dans un vaporisateur une noissette de votre shampoing et diluez avec un peu d’eau. Puis 
humidifier vos tresses sur le cuir chevelure avant de masser délicatement sans frotter, pas besoin de 
nettoyer vos longueurs. Rincez et veillez à ce qu’il ne reste plus de shampoing afin de bien hydrater
vos longueurs.
Faudra bien les sécher à l’aide d’un séche-cheveux réglé sur température froide pour éviter d’agresser
la chevelure; ou vous pouvez le laisser sécher à l’air libre.
</p>
         </div>

<div class="toutsim">
<h4>Articles Similaires</h4>

<div class="sim">
<a href="#"> <img src="../assets/article-lissage.jpg" alt="article" class="art"> </a>
<form>
<a href="#"><h3>Coupes cheveux fins: Découvrez nos astuces</h3></a>
</form>
</div>

<div class="sim1">
<a href="/artSoinCrepus"><img src="../assets/article-soin-afro.jpg" alt="article" class="art1"></a>
<form class="form1">
<a href="/artSoinCrepus"><h3>Cheveux crépus: Nos astuces pour une bonne routine à adopter</h3></a>
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