<template>
    <div>
<navbar/>

<div class="headerblog">
<img src="../assets/image-princi-blog-barbe.jpg" alt="" class="imgblog"> 
<form class="formblog">
    <p class="pastuce">articles, Barbe</p>
    <h3 class="title1">Barbe</h3>
</form>
</div>

<div class="sectionBlog">

<div class="article11">
    <router-link to="/entretienBarbe">
  <img src="../assets/la-barbe-entretenir.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Barbe</p>
   <h4 class="arcT">La barbe, comment bien l'entretenir</h4> 
    </div>
     </router-link>
</div>

<div class="article2">
    <router-link to="/pousseBarbe">
  <img src="../assets/pousser-sa-barbe.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Barbe</p>
   <h4 class="arcT">Comment faire pousser sa barbe?</h4>
    </div>
     </router-link>
</div>

<div class="article3">
    <router-link to="/trouBarbe">
   <img src="../assets/trou-barbe-serum.jpg" alt="" class="imgarc">
    <div class="group">
    <p class="arc">articles, Barbe</p>
  <h4 class="arcT">Trou dans la barbe: découvrez la solution</h4>
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
}
.article2{
    position: absolute;
    left: 3%;
    top: 1265px;
}
.article3{
    position: absolute;
    left: 3%;
    top: 1596px;
}
.article4{
    position: absolute;
    left: 3%;
    top: 1723px;
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