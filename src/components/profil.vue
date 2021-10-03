<template>
<div>
    <div class="containerdash">
        <form class="formdash">
         <h1 class="profil">Profil</h1>
        </form>
        
        <div class="dash">
        <form class="formdash1">
        <h3 class="h3">{{ client.nom }}</h3>
        <p class="adres">{{ client.adresse }},</p>
        <p class="vicp">{{ client.ville }}, {{ client.cp }}</p>
        <p class="tele">{{ client.tel }}</p>
        <form class="rondUser">
              
        </form>
        
        </form>

        <form class="formdash2">
            <form class="rond">
                <p class="prond">0</p>
            </form>
            <form class="rond2">
                <p class="prond2">0</p>
            </form>

        </form>
        </div>

<navconnecter/>

    </div>
    </div>
</template>

<script>
import jwt from "vue-jwt-decode"
import navconnecter from '../components/navconnecter.vue'
export default {
    name: 'profil',

data() {
    return {
     client: {},
     id: this.$route.params.id
    };
  },
  components:{
        navconnecter
    },

  created: function() {
    this.axios
      .get(`${this.$apiurl}client/profil/` + this.client.id,)
      .then((res) => {
        console.log(res);
        this.client = jwt.decode(localStorage.getItem("token"));
      })
      .catch((err) => {
        alert(err);
      });
  },
  
};
</script>

<style scoped>
/*.containerdash{
    background-image: url("../assets/image-back-produit.jpg");
background-size: cover;
background-repeat: no-repeat;
 position: absolute;
  background-position: center;
  height: 811px;
  width: 100%;
  
}*/
h3.h3{
    font-size: 20px;
    font-family: 'Galada';
}
p.adres{
    font-family: 'Bodini MT';
    font-size: 14px;
}
p.vicp{
    font-family: 'Bodini MT';
    font-size: 14px;
    top: -55px;
    position: relative;
}
p.tele{
    font-family: 'Bodini MT';
    font-size: 14px;
    position: relative;
    top: -108px;
}
.prond{
    position: absolute;
    top: 12px;
    left: 35%;
}
.prond2{
    position: absolute;
    top: 12px;
    left: 36%;
}
.formdash{
    width: 100%;
    height: 156px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
     background:transparent;

    position: relative;
}
.formdash1{
    width: 500px;
    height: 256px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
    background-color: #fff;
    position: absolute;
    left: 27%;
    top: 127px;
     box-shadow: 4px 4px 17px rgb(34, 34, 34);
}
.formdash2{
    width: 500px;
    height: 256px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
    background-color: #fff;
    position: absolute;
    left: 27%;
    top: 443px;
     box-shadow: 4px 4px 17px rgb(34, 34, 34);
}
.rondUser{
    width: 150px;
    height: 141px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    top: -38px;
    left: 32%;
}
.rond{
    width: 123px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    left: 13%;
    background-color: pink;
}
.rond2{
    width: 123px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    box-shadow: 4px 4px 17px rgb(34, 34, 34);
    left: 60%;
    background-color: rgb(142, 185, 142);
}
.icoUse{
  position: absolute;
    width: 127px;
    top: 8px;
    left: 8%;
}

.profil{
    font-size: 42px;
    color: rgb(252, 250, 250);
    text-align: center;
    font-family: 'Bodini MT';
    position: relative;
    top: -40px;
}


.profile-img {
    text-align: center;
  }
  .img-fluid {
    max-width: 10vw;
     height: auto; 
    position: absolute;
    width: 125vw;
    left: -9px;
    top: -29px;
}
input.ty{
    margin: 0;
    font-family: inherit;
    font-size: initial;
    line-height: inherit;
}
 
  /* l'emplacement file(inserer une photo) */
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 127px;
    height: 129px;
    border: none;
    border-radius: 50%;
    font-size: 15px;
    background: #12081b;

    top: -36px;
    left: -20%;
  }
 .profile-img .file input{
     position: absolute;
   
    top: 44px;
    left: 13%;
    
    font-size: 12px;
 }
input{
    margin: .4rem 0;
}
</style>