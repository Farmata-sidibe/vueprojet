<template>
  <div>
<navbar/>
<a href="/blog" class="lien">Article, </a> 
<a href="/blogCoiffure" class="lien2">Barbe</a>

        <div class="al">
<h1>La Barbe, comment bien l'entretenir ?</h1>

<img src="../assets/la-barbe-entretenir.jpg" alt="" class="im1">
<p>Entretenir sa barbe au quotidien demande du travail. 
La barbe affirme un style et done plus de caractére.
</p>

<h2>Brosser</h2>
<img src="../assets/image-brosse-barbe.jpg" alt="" class="im1">
<p>Brosser sa barbe tous les jours permet d’éviter les noeuds mais aussi d’aérer les poiles et de booster la 
circulation sanguine vers la follicule pileux. Les poiles pousseront donc plus vite.
 </p>

 <h2>Lavage </h2>
 <img src="../assets/image-produit-barbe.jpg" alt="" class="im1">
 <p>Non entretenue, la barbe peut devenir un nid de bactérie. Les impuretés qui s’y dissimulent sont 
nombreux : pollution extérieur, résidus de repas et de gras, etc. Pour garder une bonne hygiéne, on 
lave sa barbe 2 à 3nfois par semaine, en utilisant un savon spécial qui va hydrater le derme et réduire 
les démengeaisons.
</p>
<h2>L'hydratation</h2>
<img src="../assets/image-baume.jpg" alt="" class="im1">
 <p>Laisser pousser sa barbe c’est bien mais vous ne pouvez sauter la phase hydratation.
Pour cela on utilise un baume hydratant sous forme de masque ou une huile à barbe composés d’huiles 
végétales naturelles.
</p>

         </div>

<div class="toutsim">
<h4>Articles Similaires</h4>

<div class="sim">
<a href="/trouBarbe"><img src="../assets/trou-barbe-serum.jpg" alt="article" class="art"></a>
<form>
<a href="/trouBarbe"><h3>Trou dans la barbe: Decouvrez la solution</h3></a>
</form>
</div>

<div class="sim1">
<a href="/pousseBarbe"><img src="../assets/pousser-sa-barbe.jpg" alt="article" class="art1"></a>
<form class="form1">
<a href="/pousseBarbe"><h3>Comment faire pousser sa barbe</h3></a>
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