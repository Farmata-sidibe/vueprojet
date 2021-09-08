<template>
<div class="plan">
 <img src="../assets/KM8cBT3lsJ.jpg" alt="" class="plan ig">
     <div class="container">
      <a href="/" class="retour"> <button class="btnretour"> Back</button></a>
            <div >
                
                <form @submit.prevent="dologin" class="forme">
                    <h2>Bienvenue </h2>
                    <h5>Connectez-vous à votre compte!</h5>

                    <i class="fas fa-envelope-square mail"></i>
                    <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
                    
                    <i class="fas fa-lock password"></i>
                    <input type="password" name="password" id="password" v-model="password"  placeholder=" |votre mot de passe">
                    <a href="/mpo" class="forget">Mot de passe oublié? Cliquez-ici</a>
                    <a href="/login"><button class="inscrit">S'identifier</button></a>
                   
                </form>
                <form class="formimage">
                   <p class="inscription">Pas encore membre? Inscrivez vous maintenent</p>
                   <span> <pop/> </span>
                </form>
            </div>

            

          </div>
    </div>
</template>
<script>
import pop from '../components/pop.vue'

export default {
    name: "registerClient",
    data() {
        return {
            email: "",
            password: "",
            emaillogin: "",
            passwordlogin: "",
        }
    },
    components:{
      pop
    },
    methods:{
        dologin: function (){
            this.axios.post("http://localhost:3000/client/llogin",{
                email:this.email,
                password:this.password,
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                    this.$router.push({name: 'myProfil'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "login", params: {msg: "non connecté"}})
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
.ig {
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 120vh;
}
.forget{
  font-size: 13px;
    color: white;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    position: absolute;
    top: 66%;
    left: 12%;
    font-weight: 900;
}
.retour{
    color: rgb(63, 55, 66);
    font-size: 30px;
    font-weight: bold;
    font-family: 'Galada';
    position: absolute;
    top: 31px;
    left: 56px;
}
.btnretour{
   border-radius: 7px;
    background: transparent;
    outline: none;
    height: 58px;
    width: 141px;
    box-shadow: 2px 2px 0px 0px #3b2f3b !important;
    border-width: 2px;
}
h2{
  font-size: 40px;
  color: #fcfafd;
  font-family: 'Spirax';
  font-weight: 700;
  text-align: center;
  margin-top: -39px;
}
h5{
  font-size: 18px;
  color: #f1edf5;
  font-family: 'Bodini MT';
  font-weight: 100;
  margin-top: -31px;
}

.mail{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #302430;
    left: 15%;
    TOP: 149px;
}

.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #332733;
    left: 15%;
    TOP: 242px;
}





::placeholder{
    color: #d0cad1;
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
    border-radius: 16px;
    background:#1f1220;
    color: white;
    font-size: 25px;
    outline: none;
    height: 58px;
    width: 163px;
    font-weight: bold;
    position: absolute;
    top: 371px;
    left: 565px;
   border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.inscription{
    font-family: 'Spirax';
    position: absolute;
    top: 25px;
    left: 0%;
    font-weight: 600;
    font-size: 21px;
    color: #efedf1;
    text-align: -webkit-center;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #564b5c;
   /* background:transparent;*/
    background-color: rgb(65, 47, 65, 0.5);

    box-shadow: 2px 2px 2px  #7a7979;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}

input#email{
    position: absolute;
    width: 73%;
    height: 45px;
    top: 138px;
    left: 44px;
}
input#password{
    position: absolute;
    width: 73%;
    height: 45px;
    left: 44px;
    top: 231px;
}
.forme{
    width: 343px;
    height: 435px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 22px;
    background-color: rgb(65, 47, 65, 0.5);
    /* background: linear-gradient(90deg, #5f535f,rgb(172, 160, 160),#5f535f); */
    box-shadow: 4px -2px 48px 3px rgb(136, 135, 135);
    position: absolute;
    left: 43%;
    bottom: 35px;
    
}
.formimage{
    width: 274px;
    background-color: rgb(65, 47, 65, 0.5);

    height: 216px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    position: absolute;
    left: 13%;
    bottom: 170px;
    box-shadow: 4px 8px 18px 3px rgb(134, 133, 133);
}
a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}


</style>