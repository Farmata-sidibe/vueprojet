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
    flex-basis: auto;
    flex-wrap: wrap;
}
.arcT{
    color: #1F1321;
    font-size: 28px;
    position: absolute;
    font-family: 'Galada', cursive;
    top: 52px;
    left: -4%;
}
.formblo{
    width: 584px;
    height: 89px;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #7F6E6F;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    flex-basis: auto;
    flex-wrap: wrap;
    margin-left: 170px;
    margin-top: -51px;
    position: absolute;
}
.pastuce{
    font-size: 20px;
    color: #1F1321;
    font-family: 'Spirax';
    font-weight: bold;
   margin-top: -59px;
}
.title{
    font-size: 26px;
    color: #fff;
    font-family: 'Galada', cursive;
    text-align: center;
}
.imgblog{
    width: 90%;
    margin-top: -86px;
}
.headerblog{
    text-align: center;
    margin-top: 147px;
}

.texto li a{
    color: #1F1321;
    text-decoration: none;
    font-size: 35px;
    font-family: 'Spirax';
}

</style>