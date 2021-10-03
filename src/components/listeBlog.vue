<template>
    <div>
        <div class="sectionBlog" v-for="blog in blogs" :key="blog.id">

<div class="article11">
    <img
          v-if="blog.image"
          :src="require(`@/assets/${blog.images[0].image}.jpg`)"
          alt="`${blog.images[0].image}`"
          class="imgarc"
        /> 

    <div class="group"> <br>
    <p class="arc">articles,{{ blog.article }}</p>
    <h4 class="arcT">{{ blog.astuce }}</h4>
    </div>
</div>


</div>
    </div>
</template>

<script>

export default {
  name: "listeBlog",
  props: ["blogs"],

  
};
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
    flex-wrap: wrap;
    flex-basis: auto;
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

.formblog{
    width: 584px;
    height: 89px;
    padding: 60px 30px;
    box-sizing: border-box;
    background-color: #7F6E6F;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    position: absolute;
    left: 30%;
    bottom: -448px;
    
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