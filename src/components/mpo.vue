<template>
<div class="plan">
 <img src="../assets/JMxplaVBD4.jpg" alt="" class="planim">
     <div class="container">
       <a href="/" class="retour"><button class="btnretour">Retour</button></a>
            <div >
                <form @submit.prevent="dompo" class="forme">
                    <h1 class="inscription">Réinitialiser Mot De Passe</h1>
                    
                    <i class="fas fa-envelope-square mail"></i>
                    <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
                    
                    <a href="/login" class="forget">S'inscrire</a>
                    <a href="/login" class="forget1">Se Connecter</a>
                    
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
            emaillogin: "",
        }
    },
    components:{},
    methods:{
        dompo: function (){
            this.axios.post("http://localhost:3000/client/forgetpassword",{
                email:this.email,
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                    this.$router.push({name: 'updatepassword'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "updatepassword", params: {msg: "non connecté"} })
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

.retour{
    color: rgb(214, 155, 99);
    font-size: 30px;
    font-weight: bold;
    font-family: 'Galada';
        position: sticky;
    margin-left: 45px;
}
.btnretour{
   border-radius: 7px;
    background: transparent;
    outline: none;
    height: 58px;
    width: 141px;
    box-shadow: 2px 2px 0px 0px #e2a967 !important;
    border-width: 2px;
    
}

@media screen and (min-width: 1280px) {
    .planim{
    position: fixed;
    height: 120vh;
    width: 100%;
}
a.forget{
  text-decoration: none;
  color:   #1f1220 ;
    position: relative;
    left: 76%;
    top: 45px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #1f1220 ;
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
    color:  #1f1220 ;
    left: 15%;
    TOP: 133px;
}






::placeholder{
    color: #1f1220 ;
    font-size: 13px;
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
    background: #684120 ;
    box-shadow: -6px 2px 4px 2px  #6d4a29 ;
    color: white;
    font-size: 21px;
    outline: none;
    height: 45px;
    width: 116px;
    font-weight: 600;
    position: absolute;
    top: 229px;
    left: 592px;
    border-color: #64523a ;
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
    left: 10%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color:  #492d16 ;
}
input{
    border: none;
    border-radius: 9px;
     border-left: 5px solid #d18e50;
    background-color: rgba(226, 187, 155, 0.5);
    box-shadow: 2px 2px 2px  #7a7a79;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}


input#email{
    position: absolute;
    width: 75%;
    height: 47px;
    bottom: 77px;
    border-left-color: #a37f46;
    left: 12%;
}

.forme{
    width: 347px;
    height: 258px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    /*background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);*/
   background-color: rgba(236, 210, 181, 0.5);
    box-shadow: -4px -6px 23px rgb(34, 34, 34);
    position: absolute;
        left: 34%;
    bottom: 200px;
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
    height: 120vh;
    width: 100%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 64px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 64px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 133px;
}






::placeholder{
    color:#283b4d;
    font-size: 13px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 194px;
    width: 118px;
    left: 32%;
    height: 124px;
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
    top: 229px;
    left: 592px;
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
    left: 10%;
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
    height: 47px;
    bottom: 77px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
        width: 347px;
    height: 258px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 30%;
    bottom: 173px;
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
    height: 120vh;
    width: 100%;
}
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 85px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 85px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 133px;
}






::placeholder{
    color:#283b4d;
    font-size: 13px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 194px;
    width: 118px;
    left: 32%;
    height: 124px;
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
    top: 229px;
    left: 592px;
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
    left: 10%;
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
    height: 47px;
    bottom: 77px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
        width: 347px;
    height: 258px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 12%;
    bottom: 173px;
}
.formimage{
    width: 367px;
    height: 455px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #1f1220;
    background-blend-mode: difference;
    position: absolute;
    left: 46%;
    bottom: 80px;
    box-shadow: 2px 2px 12px rgb(34, 34, 34);
        background-image: url("../assets/baclog.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-size: cover;
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
a.forget{
  text-decoration: none;
  color:  #283b4d;
    position: relative;
    left: 76%;
    top: 99px;
    font-size: 15px;
    font-family: 'Bodini MT';
}
a.forget1{
  text-decoration: none;
    color: #283b4d;
    position: relative;
    left: -18%;
    top: 99px;
    font-size: 15px;
    font-family: 'Bodini MT';
}




.mail{
   position: absolute;
    z-index: 3;
    font-size: 24px;
    color: #283b4d;
    left: 15%;
    TOP: 133px;
}






::placeholder{
    color:#283b4d;
    font-size: 13px;
    font-family: 'Bodini MT';
}
.container{
    overflow:hidden;
    margin: 0;
    padding: 0;
}
.imageU {
    position: absolute;
    bottom: 194px;
    width: 118px;
    left: 32%;
    height: 124px;
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
    top: 228px;
    left: 496px;
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
    left: 10%;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
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
    height: 47px;
    bottom: 77px;
    border-left-color: #283b4d;
    left: 12%;
}

.forme{
       width: 292px;
    height: 258px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 18%;
    bottom: 111px;
}
.formimage{
        width: 348px;
    height: 296px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #1f1220;
    background-blend-mode: difference;
    position: absolute;
    left: 13%;
    bottom: 321px;
    box-shadow: 2px 2px 12px rgb(34, 34, 34);
        background-image: url("../assets/baclog.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    background-size: cover;
}
a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}

}

</style>