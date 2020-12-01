<template>

<div>

<div class="secPro">
    
<div class="all" v-for="produit in produits" :key="produit.id">

   
    <div class="card">
    <div class="img">
        <img
          v-if="produit.image"
          :src="require(`@/assets/${produit.images[0].image}.jpg`)"
          alt="`${produit.images[0].image}`"
          
        /> 
    
    </div>
   <div class="top-text">
          <div class="name">{{ produit.nom }}</div>
       <p>{{ produit.prix }} €</p>
      </div>
    <div class="bottom-text">
          <div class="text1">
{{ produit.ref }}
    </div>
    <div class="btn1">
            <a href="/DTproduit">Ajouter</a>
          </div>
    </div>
    </div>

</div>
</div>
<myFooter/>
</div>
</template>
    
<script>
import myFooter from '../components/myFooter.vue'
export default {
  name: "myProduit",
  components: {
    myFooter
  },
  props: ["produits"],

  
};
</script>


<style scoped>

@media screen and (min-width: 1280px) {

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.secPro{
    position: relative;
    overflow: hidden;
}

.card{
  height: 331px;
    max-width: 296px;
    margin: 0 68px;
    background: white;
    transition: 0.4s;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    margin-top: 51px;
    width: 143%;
    display: inline-grid;
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  
}
.all{
    float: left;
    padding: 0px 0px 0 0;
}
.card .img img{
  
    width: 17vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    left: 10%;
    top: 17px;
    height: 197px;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 18px;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
.card .top-text p{
  font-size: 23px;
    font-weight: 600;
    color: #e74c3c;
    line-height: 20px;
    margin-top: 10px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn1{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn1 a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn1 a:hover{
  transform: scale(0.9);
}
.btn1{
        width: 100px;
    font-size: 14px;
}
.text1{
    font-size: 16px;
}

* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}
}
@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.secPro{
    position: relative;
}

.card{
  height: 331px;
    max-width: 296px;
    margin: 0 68px;
    background: white;
    transition: 0.4s;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    margin-top: 51px;
    width: 143%;
    display: inline-grid;
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  
}
.all{
    float: left;
    padding: 0px 0px 0 0;
}
.card .img img{
  
    width: 17vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    left: 10%;
    top: 17px;
    height: 197px;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 18px;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
.card .top-text p{
  font-size: 23px;
    font-weight: 600;
    color: #e74c3c;
    line-height: 20px;
    margin-top: 10px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn1{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn1 a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn1 a:hover{
  transform: scale(0.9);
}
.btn1{
        width: 100px;
    font-size: 14px;
}
.text1{
    font-size: 16px;
}

* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}
}

@media screen and (min-width: 768px) and (max-width: 1023.99px) {
  
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.secPro{
    position: relative;
}

.card{
  height: 331px;
  max-width: 329px;
    margin: 0 29px;
    background: white;
    transition: 0.4s;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    margin-top: 51px;
    width: 143%;
    display: inline-grid;
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  
}
.all{
    float: left;
    padding: 0px 0px 0 0;
    flex-wrap: wrap;
    flex-direction: column;
}
.card .img img{
  
    width: 17vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    left: 10%;
    top: 17px;
    height: 197px;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 18px;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
.card .top-text p{
  font-size: 23px;
    font-weight: 600;
    color: #e74c3c;
    line-height: 20px;
    margin-top: 10px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn1{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn1 a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn1 a:hover{
  transform: scale(0.9);
}
.btn1{
        width: 100px;
    font-size: 14px;
}
.text1{
    font-size: 16px;
}

* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}
 
}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
 
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

.secPro{
    position: relative;
}

.card{
  height: 331px;
  max-width: 329px;
    margin: 0 21px;
    background: white;
    transition: 0.4s;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    margin-top: 51px;
    width: 143%;
    display: inline-grid;
}
.card:hover{
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
}
.card .img{
  height: 200px;
  
}
.all{
    float: left;
    padding: 0px 0px 0 0;
    flex-wrap: wrap;
    flex-direction: column;
}
.card .img img{
  
    width: 17vw;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
    left: 10%;
    top: 17px;
    height: 197px;
}
.card .top-text{
  padding: 5px;
}
.card .top-text .name{
  font-size: 18px;
    font-weight: 600;
    color: #202020;
    margin-top: 28px;
    text-align: -webkit-center;
}
.card .top-text p{
  font-size: 23px;
    font-weight: 600;
    color: #e74c3c;
    line-height: 20px;
    margin-top: 10px;
}
.card .bottom-text{
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.card:hover .bottom-text{
  opacity: 1;
  visibility: visible;
}
.card .bottom-text .text{
  text-align: justify;
}
.card .bottom-text .btn1{
  margin: 10px 0;
  text-align: left;
}
.card .bottom-text .btn1 a{
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.card .bottom-text .btn1 a:hover{
  transform: scale(0.9);
}
.btn1{
        width: 100px;
    font-size: 14px;
}
.text1{
    font-size: 16px;
}

* {
      box-sizing: border-box;
}

html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
}
}
</style>