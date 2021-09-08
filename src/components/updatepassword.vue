<template>
<div class="plan">
 <img src="../assets/kNAONghjrZ.jpg" alt="" class="planim">
     <div class="container">
       
            <div >
                <form @submit.prevent="doupdate" class="forme">
                    
                    
                    <h1 class="inscription">Entrez Votre Nouveau Mot De Passe</h1>
                    
                    <i class="fas fa-envelope-square mail"></i>
                    <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
                    
                    <i class="fas fa-lock password"></i>
                    <input type="password" name="password" id="password" v-model="password"  placeholder=" |votre mot de passe">
                    
                    <a href="/login"><button class="inscrit">Envoyer</button></a>
                   
                </form>
               
            </div>

            

          </div>
    </div>
</template>
<script>
export default {
    name: "mpo",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    components:{},
    methods:{
        doupdate: function (){
            this.axios.post("http://localhost:3000/client/updatepassword",{
                password:this.password
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                    this.$router.push({name: 'login'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "login", params: {msg: "non connecté"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
    
    
}
</script>
<style scoped>



@media screen and (min-width: 1280px) {
    .planim{
   position: relative;
    height: 130vh;
    width: 100%;
}

.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color:#283b4d;
    left: 16%;
    TOP: 227px;
}
input#password{
    position: absolute;
    width: 75%;
    height: 55px;
    border-left-color: #283b4d;
    bottom: 89px;
    left: 13%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 148px;
}






::placeholder{
    color:#283b4d;
    font-size: 15px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}

.forme::placeholder{
    
    font-family: 'Bodini MT';
    font-size: initial;
}
.inscrit{
    border: none;
    border-radius: 5px;
    background: #304558;
    box-shadow: -6px 2px 4px 2px #283b4d;
    color: white;
    font-size: 21px;
    outline: none;
    height: 45px;
    width: 116px;
    font-weight: 600;
    position: absolute;
    top: 317px;
    left: 725px;
    border-color: #304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.inscription{
    font-family: 'Bodini MT';
    position: absolute;
    top: 66px;
    left: 6%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color: #212e3b;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background: rgb(219, 216, 216, 0.5);
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}


input#email{
    position: absolute;
    width: 75%;
    height: 55px;
    bottom: 169px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
    width: 421px;
    height: 369px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: rgba(211, 197, 184, 0.5);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 32%;
    bottom: 104px;
}

a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}

}


@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
    .planim{
    position: fixed;
    height: 110vh;
    width: 100%;
}
.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color:#283b4d;
    left: 16%;
    TOP: 227px;
}
input#password{
    position: absolute;
    width: 75%;
    height: 55px;
    border-left-color: #283b4d;
    bottom: 89px;
    left: 13%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 148px;
}






::placeholder{
    color:#283b4d;
    font-size: 15px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 310px;
    width: 135px;
    left: 32%;
    height: 139px;
}
.forme::placeholder{
    
    font-family: 'Bodini MT';
    font-size: initial;
}
.inscrit{
    border: none;
    border-radius: 5px;
    background: #304558;
    box-shadow: -6px 2px 4px 2px #283b4d;
    color: white;
    font-size: 21px;
    outline: none;
    height: 45px;
    width: 116px;
    font-weight: 600;
    position: absolute;
    top: 317px;
    left: 725px;
    border-color: #304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.inscription{
    font-family: 'Bodini MT';
    position: absolute;
    top: 66px;
    left: 6%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color: #212e3b;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background:#c0c3c7;
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}


input#email{
    position: absolute;
    width: 75%;
    height: 55px;
    bottom: 169px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
    width: 421px;
    height: 369px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 32%;
    bottom: 104px;
}

a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}


}



@media screen and (min-width: 768px) and (max-width: 1023.99px) {
   .planim{
    position: fixed;
    height: 100vh;
    width: 100%;
}
.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color:#283b4d;
    left: 16%;
    TOP: 227px;
}
input#password{
    position: absolute;
    width: 75%;
    height: 55px;
    border-left-color: #283b4d;
    bottom: 89px;
    left: 13%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 148px;
}






::placeholder{
    color:#283b4d;
    font-size: 15px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 310px;
    width: 135px;
    left: 32%;
    height: 139px;
}
.forme::placeholder{
    
    font-family: 'Bodini MT';
    font-size: initial;
}
.inscrit{
    border: none;
    border-radius: 5px;
    background: #304558;
    box-shadow: -6px 2px 4px 2px #283b4d;
    color: white;
    font-size: 21px;
    outline: none;
    height: 45px;
    width: 116px;
    font-weight: 600;
    position: absolute;
    top: 317px;
    left: 725px;
    border-color: #304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.inscription{
    font-family: 'Bodini MT';
    position: absolute;
    top: 66px;
    left: 6%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color: #212e3b;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background:#c0c3c7;
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}


input#email{
    position: absolute;
    width: 75%;
    height: 55px;
    bottom: 169px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
    width: 421px;
    height: 369px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 36%;
    bottom: 139px;
}

a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}


}


@media screen and (min-width: 480px) and (max-width: 767.99px) {
   .planim{
    position: fixed;
    height: 100vh;
    width: 100%;
}
.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color:#283b4d;
    left: 16%;
    TOP: 227px;
}
input#password{
    position: absolute;
    width: 75%;
    height: 55px;
    border-left-color: #283b4d;
    bottom: 89px;
    left: 13%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 148px;
}






::placeholder{
    color:#283b4d;
    font-size: 15px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 310px;
    width: 135px;
    left: 32%;
    height: 139px;
}
.forme::placeholder{
    
    font-family: 'Bodini MT';
    font-size: initial;
}
.inscrit{
    border: none;
    border-radius: 5px;
    background: #304558;
    box-shadow: -6px 2px 4px 2px #283b4d;
    color: white;
    font-size: 21px;
    outline: none;
    height: 45px;
    width: 116px;
    font-weight: 600;
    position: absolute;
    top: 317px;
    left: 725px;
    border-color: #304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.inscription{
    font-family: 'Bodini MT';
    position: absolute;
    top: 66px;
    left: 6%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color: #212e3b;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background:#c0c3c7;
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}


input#email{
    position: absolute;
    width: 75%;
    height: 55px;
    bottom: 169px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
    width: 421px;
    height: 369px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 5%;
    bottom: 139px;
}

a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}


}

</style>