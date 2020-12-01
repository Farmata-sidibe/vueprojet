<template>

<div>

<div class="contenu" v-for="salon in salons" :key="salon.id">
<form class="salon1">
<img
          v-if="salon.image"
          :src="require(`@/assets/${salon.images[0].image}.jpg`)"
          alt="`${salon.images[0].image}`"
          class="slnpari"
        /> 
<div class="text">
    <search/>
    <h2 class="H2">{{ salon.nom }}</h2>
    <p>{{ salon.adresse }}</p>
</div>
<router-link to="/">
          <button variant="primary" class="RDV">Prendre RDV</button>
        </router-link>
          
        

</form>


    </div>



</div>
</template>
    
<script>
import search from '../components/search.vue'

export default {
  name: "listeSalon",
  components: {
      search
  },
  props: ["salons"],

  
};
</script>


<style scoped>
.RDV{
     border: none;
    border-radius: 9px;
    background-color: #1f1220;
    color: white;
    font-size: 21px;
    outline: none;
    height: 41px;
    width: 163px;
    font-weight: bold;
    position: absolute;
    left: 74%;
    top: 211px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Crismon Text';
}
.text{
position: relative;
left: 384px;
top: -29px;
}
.text p{
color: #1f1220;
font-size: 16px;
}
.H2{
    color:#1f1220;
    font-size: 30px;
    
}
.slnpari{
    width: 327px;
    position: absolute;
    top: 13px;
    height: 269px;
}
.salon1{
    width: 865px;
    height: 294px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
    background-color: #efe3f0;
   box-shadow: 1px 1px 9px rgb(34, 34, 34);
    position: relative;
    top: -84px;
    left: 110px;
    margin-top: 38px;

    
}

</style>