<template>
  <div>
<navbar/>
<a href="/blog" class="lien">Article, </a> 
<a href="/blogCoiffure" class="lien2">Barbe</a>

        <div class="al">
<h1>Comment faire pousser sa barbe ?</h1>

<img src="../assets/la-barbe-entretenir.jpg" alt="" class="im1">
<p>Entretenir sa barbe au quotidien demande du travail. 
La barbe affirme un style et done plus de caractére.
</p>

<h2>Brosser</h2>
<img src="../assets/pousser-sa-barbe.jpg" alt="" class="im1">
<p>Avant de vous parler de certains conseils et astuces pour la pousse de la barbe, j’aimerais vous parler du
rôle de la génétique.
Bien que faire pousser la barbe plus vite naturellement soit possible, vous devez savoir que c’est à la base 
une question de génétique. L’hérédité joue un rôle important dans la pousse des poiles faciaux.
 </p>

 <h2>Entretenir son visage </h2>
 <img src="../assets/hommaincou.jpg" alt="" class="im1">
 <p>Garder une peau propre est trés important si vous voulez faire pousser votre barbe. Du coup n’hésitez pas 
à utiliser un savon à barbe ou encore shampoing à barbe de ce fait vous laverez non seulement votre barbe 
mais également votre peau.
</p>
<h2>Une bonne alimentation</h2>
<img src="../assets/alimentation.jpg" alt="" class="im1">
 <p>Si l’alimentation n’est pas bonne et adaptée, elle peut être cause du «stagnement» de pousse de votre barbe
Pour faire pousser votre barbe plus rapidement, priviligiez les aliments contenant de la vitamine B1, B6 ou
encore B12. Préférez aussi les aliments riches en protéines telque le poissons, la viande, les noix ou encore
les oeufs. Et évidemment mangez beaucoups de fruits et légumes : ils sont pleins de vitamines, de minéraux
et de nutriments qui sont nécessaires pour que vos poiles poussent.
</p>
<h2>Un dernier point trés important:</h2>
<p>Si la faire pousser est trés important pour vous, il faudra également en prendre soin. Ne négligez pas jamais
de la néttoyer comme il le faut et même l’hydrater.</p>
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
<a href="/entretienBarbe"><img src="../assets/la-barbe-entretenir.jpg" alt="article" class="art1"></a>
<form class="form1">
<a href="/entretienBarbe"><h3>La barbe, comment bien l'entretenir</h3></a>
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