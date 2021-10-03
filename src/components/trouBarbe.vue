<template>
  <div>
<navbar/>
<a href="/blog" class="lien">Article, </a> 
<a href="/blogBarbe" class="lien2">Barbe</a>

        <div class="al">
<h1>Trou dans la barbe: Découvrez la solution</h1>

<img src="../assets/trou-barbe-serum.jpg" alt="" class="im1">
<p>Il n’y a pas de solutions miracles à proprement parler pour les trous dans la barbe. Je 
partage simplement avec vous des conseils et astuces qui pourront vous aider au moins 
à les cacher.
</p>

<h2>L'huile de ricin</h2>
<img src="../assets/huile-de-ricin.jpg" alt="" class="im1">
<p>Vous pouvez utilisez l’huile de ricin pour remédier à un trou dans votre barbe.
Cet huile vous permettra d’arborer une barbe plus esthétique et moins clairsemée elle va: <br>
-aider à rendre les écailles de vos poils plus souples et plus épais
-favoriser la pousse de vos poiles
-stimuler les follicules pileux qui sont moins productif. Les trous
dans la barbe seront comblé par d’autre poiles.
 </p>

 <h2>Une bonne hygiéne de vie </h2>
 <img src="../assets/image-taille-barbe.jpg" alt="" class="im1">
 <p>L’hygiéne de vie est important pour la pousse des poiles. Essayez autant que possible 
d’avoir une meilleure hygiéne de vie, afin que l’huile de ricin soit bien efficace
</p>
<h2>Le Brossage</h2>
<img src="../assets/image-brosse-barbe.jpg" alt="" class="im1">
 <p>Ne négligez pas le brossage surtout si celle-ci est assez longue. Cela permettra de bien
arranger la barbe et ainsi camoufler les troues.
</p>

         </div>

<div class="toutsim">
<h4>Articles Similaires</h4>

<div class="sim">
<a href="/entretienBarbe"><img src="../assets/la-barbe-entretenir.jpg" alt="article" class="art"></a>
<form>
<a href="/entretienBarbe"><h3>La barbe, Comment bien l'entretenir</h3></a>
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