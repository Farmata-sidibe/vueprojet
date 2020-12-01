<template>
    <div>
<carousel>
    <slide
        data-index="0"
        data-name="MySlideName"
        @slideclick="handleSlideClick">
        
     <a href="/Produit"><img src="../assets/butter-cream-keracare-natural-textures-p-image-272402-grande.jpg" alt="" class="imgsli"></a>
   
    </slide>
  <slide>
    <a href="/Produit"><img src="../assets/gamme-jamaican-black-castor-oil_produit.jpg" alt="" class="imgsli"></a>
  </slide>
  
   <slide>
    <a href="/Produit"><img src="../assets/as-i-am-jbco--restore---repair----water--spray-hydratant----454ml-p-image-277884-grande.jpg" alt="" class="imgsli"></a>
  </slide>
   <slide>
    <a href="/Produit"><img src="../assets/gamme-hibiscus-kalia-nature-produit.jpg" alt="" class="imgsli"></a>
  </slide>
   <slide>
    <a href="/Produit"><img src="../assets/butter-cream-keracare-natural-textures-p-image-276577-grande.jpg" alt="" class="imgsli"></a>
  </slide>
   <slide>
    <a href="/Produit"><img src="../assets/baume-fondant-a-l-hibiscus-kalia-nature-100ml-p-image-277768-grande.jpg" alt="" class="imgsli"></a>
  </slide>
   <slide>
    <a href="/Produit"><img src="../assets/masque-reconstructeur-intense-keracare-p-image-267002-grande.jpg" alt="" class="imgsli"></a>
  </slide>
   <slide>
    <a href="/Produit"><img src="../assets/lotion-naturelle-hydratante---design-essentials-p-image-260388-grande.png" alt="" class="imgsli"></a>
  </slide>
  <slide>
    <a href="/Produit"><img src="../assets/activateur-de-boucles-curlessence-moisturizing-curl-activator-p-image-275758-grande.jpg" alt="" class="imgsli"></a>
  </slide>
  <slide>
    <a href="/Produit"><img src="../assets/baume-au-karite-nourrissant-chouette-mama-p-image-275688-grande.jpg" alt="" class="imgsli"></a>
  </slide>
  
  
  
</carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'prestation',
  components: {
    Carousel,
    Slide,
  }
  };
  
  

</script>

<style scoped>
@media screen and (min-width: 1280px){
.imgsli{
    width: 277px;
    position: relative;
    left: 8%;
    border-radius: 23px;
    box-shadow: 7px -6px 5px -1px #1f1220;
    margin: 0px 0px 29px 0px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: -18%;
}
.formsli{
    width: 321px;
    height: 206px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: 115px;
}
.VueCarousel[data-v-4b63eec1] {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #7F6E6F;
    /* height: 186vh; */
    width: 74%;
    position: relative;
    left: 13%;
    top: 50px;
    border-radius: 18px;
    height: 68vh;
}
.VueCarousel-dot[data-v-438fd353] {
    display: inline-block;
    cursor: pointer;
    appearance: none;
    border: none;
    background-clip: content-box;
    box-sizing: content-box;
    padding: 0;
    border-radius: 100%;
    outline: none;
    position: relative;
    top: -107px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: 0vh;
}
.VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
    top: 19px;
    left: 7%;
}
}

@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  .imgsli{
    width: 277px;
    position: relative;
    left: 8%;
    border-radius: 23px;
    box-shadow: 7px -6px 5px -1px #1f1220;
    margin: 0px 0px 29px 0px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: -18%;
}
.formsli{
    width: 321px;
    height: 206px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: 115px;
}
.VueCarousel[data-v-4b63eec1] {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #7F6E6F;
    /* height: 186vh; */
    width: 74%;
    position: relative;
    left: 13%;
    top: 50px;
    border-radius: 18px;
    height: 68vh;
}
.VueCarousel-dot[data-v-438fd353] {
    display: inline-block;
    cursor: pointer;
    appearance: none;
    border: none;
    background-clip: content-box;
    box-sizing: content-box;
    padding: 0;
    border-radius: 100%;
    outline: none;
    position: relative;
    top: -107px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: 0vh;
}
.VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
    top: 19px;
    left: 7%;
}
}

@media screen and (min-width: 768px) and (max-width: 1023.99px){
  .imgsli{
    width: 277px;
    position: relative;
    left: 8%;
    border-radius: 23px;
    box-shadow: 7px -6px 5px -1px #1f1220;
    margin: 0px 0px 29px 0px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: -18%;
}
.formsli{
    width: 321px;
    height: 206px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: 115px;
}
.VueCarousel[data-v-4b63eec1] {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #7F6E6F;
    /* height: 186vh; */
    width: 74%;
    position: relative;
    left: 13%;
    top: 50px;
    border-radius: 18px;
    height: 68vh;
}
.VueCarousel-dot[data-v-438fd353] {
    display: inline-block;
    cursor: pointer;
    appearance: none;
    border: none;
    background-clip: content-box;
    box-sizing: content-box;
    padding: 0;
    border-radius: 100%;
    outline: none;
    position: relative;
    top: -107px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: 0vh;
}
.VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
    top: 19px;
    left: 7%;
}
}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
  .imgsli{
    width: 277px;
    position: relative;
    left: 8%;
    border-radius: 23px;
    box-shadow: 7px -6px 5px -1px #1f1220;
    margin: 0px 0px 29px 0px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: -18%;
}
.VueCarousel-inner{
  transform: translate(0px, 0px);
    transition: transform 0.5s ease 0s;
    visibility: visible;
    height: auto;
    flex-basis: 439px;
}
.formsli{
    width: 321px;
    height: 206px;
    box-sizing: border-box;
    border-radius: 1px;
    background-color: black;
    position: absolute;
    z-index: 3;
    TEXT-ALIGN: center;
    OPACITY: 0.70;
    BOTTOM: 115px;
}
.VueCarousel[data-v-4b63eec1] {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #7F6E6F;
    /* height: 186vh; */
    width: 126%;
    position: relative;
    left: 98%;
    top: 50px;
    border-radius: 18px;
    height: 68vh;
}
.VueCarousel-dot[data-v-438fd353] {
    display: inline-block;
    cursor: pointer;
    appearance: none;
    border: none;
    background-clip: content-box;
    box-sizing: content-box;
    padding: 0;
    border-radius: 100%;
    outline: none;
    position: relative;
    top: -107px;
}
.VueCarousel-pagination[data-v-438fd353] {
    width: 100%;
    text-align: center;
    height: 0vh;
}
.VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
    position: relative;
    top: 19px;
    left: 7%;
}
}

</style>