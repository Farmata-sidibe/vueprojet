<template>
    <div>
<navbar/>

<div class="headerblog">
<img src="../assets/image-princi-blog.jpg" alt="" class="imgblog">
<form class="formblo">
    <p class="pastuce">astuces, blog</p>
    <h3 class="title">Découvrez nos astuces capilaires pour bien <br> prendre soin de vos cheveux</h3>
</form>
</div>

<myBlog/>



<footerBlog/>
    </div>
</template>


<script>
import navbar from '../components/navbar.vue'

import footerBlog from '../components/footerBlog.vue'
import myBlog from '../views/myBlog.vue'

export default {
    name: "blog",
    components: {
        footerBlog,
        myBlog,
        navbar
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
    left: 54%;
}

.article1{
  left: 9%;
    top: 159px;
    position: relative;
    display: table-caption;
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





.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.formblo{
    width: 584px;
    height: 89px;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #7F6E6F;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    position: absolute;
    left: 30%;
    bottom: -492px;
    
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
.title{
    font-size: 28px;
    color: #fff;
    font-family: 'Galada', cursive;
    position: absolute;
    text-align: center;
    left: 10%;
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

@media only screen and (max-width: 767.99px) {
    .imgblog {
    left: 5%;
}
      .formblo {
    width: 530px;
    height: 89px;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #7F6E6F;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    position: absolute;
    left: 23%;
    bottom: -198px;
}
.article1 {
    left: -29%;
    top: 159px;
    position: relative;
    display: table-caption;
}
.imgarc {
    width: 322px;
    height: 241px;
    position: relative;
    top: 247px;
    left: 44%;
}
.group {
    position: relative;
    left: 163%;
    top: 64px;
}
}
</style>