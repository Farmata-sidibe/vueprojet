<template>
    <div>
<navbar/>

<div class="headerblog">
<img src="../assets/image-princi-blog-coiffure.jpg" alt="" class="imgblog">
<form class="formblog">
    <p class="pastuce">articles, coiffure</p>
    <h3 class="title1">Coiffure</h3>
</form>
</div>

<div class="sectionBlog">

<div class="article11">
    <router-link to="/artSoinCrepus">
  <img src="../assets/article-soin-afro.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Coiffure</p>
    <h4 class="arcT">Cheveux crépus: nos astuces <br> pour  une bonne  routine <br> à adopter</h4>
    </div>
    </router-link>
</div>

<div class="article2">
    <router-link to="#">
  <img src="../assets/article-lissage.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Coiffure</p>
  <h4 class="arcT">Coupe pour cheveux fins: <br>Découvrez nos astuces</h4>
    </div>
    </router-link>
</div>

<div class="article3">
    <router-link to="/artSoinTresse">
   <img src="../assets/article-tresse.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Coiffure</p>
   <h4 class="arcT">Comment entretenir les <br> tresses afro: homme et femme </h4>
   </div>
   </router-link>
    </div>
    


<div class="article4">
    <router-link to="#">
 <img src="../assets/article-casse-cheveux.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Coiffure</p>
  <h4 class="arcT">Lutter contre la <br>casse des cheveux: Découvrez <br>notre secret</h4>
    </div>
     </router-link>
</div>


</div>


<footerBlog/>
    </div>
</template>


<script>
import footerBlog from '../components/footerBlog.vue'
import Navbar from './navbar.vue'
export default {
    name: "blog",
    components: {
        footerBlog,
        Navbar
    },
}
</script>

<style scoped>

.imgarc{
    width: 408px;
    height: 300px;
    position: relative;
    top: 247px;
    left: 5%;
}

.group{
    position: relative;
    left: 129%;
}

.article11{
    position: absolute;
    left: 3%;
    top: 886px;
}
.article2{
    position: absolute;
    left: 3%;
    top: 1209px;
}
.article3{
    position: absolute;
    left: 3%;
   top: 1535px;
}
.article4{
    position: absolute;
    left: 3%;
    top: 1864px;
}
.arc{
    color: #7f6e6f;
    font-size: 15px;
    position: absolute;
    top: -23px;
    left: -7%;
    font-family: 'Galada', cursive;
}

.arcT{
    color: #1F1321;
    font-size: 28px;
    position: absolute;
    font-family: 'Galada', cursive;
    top: 52px;
    left: -4%;
}



.formblog{
    width: 584px;
    height: 89px;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #7F6E6F;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    position: absolute;
    left: 30%;
    bottom: -478px;
    
}
.pastuce{
    font-size: 20px;
    color: #1F1321;
    font-family: 'Spirax';
    position: absolute;
    top: 8px;
    left: 42%;
    font-weight: bold;
}
.title1{
    font-size: 48px;
    color: #fff;
    font-family: 'Galada', cursive;
    position: absolute;
    text-align: center;
    left: 39%;
    top: 48px;
}
.imgblog{
    width: 90%;
    position: relative;
    left: 5%;
    top: 140px;
}
.logo2{
    width: 137px;
    position: absolute;
    left: 41%;
    top: 35px;
}
.texto li a{
    color: #1F1321;
    text-decoration: none;
    font-size: 35px;
    font-family: 'Spirax';
}
.article{
    position: absolute;
    top: 54px;
    left: 26%;
    
}
.propos{
    position: absolute;
    top: 54px;
    left: 56%;
}
</style>