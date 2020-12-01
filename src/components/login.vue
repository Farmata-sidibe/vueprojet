<template>
<div class="wrap">

     <div class="login">
       <h1 class="H">Se Connecter</h1>
      <form class="form1l" @submit.prevent="dologin">
        <img src="../assets/image-user.png" alt="" class="imageUser">
        <i class="fa fa-user-circle user user"></i>
        <input
          type="email"
          name="emaillogin"
          id="Emaillogin"
          placeholder="      | Saisissez votre e-mail"
          v-model="emaillogin"
        />
        <i class="fas fa-lock password"></i>
        <input
          type="password"
          name="passwordlogin"
          id="Passwordlogin"
          placeholder=" | Entrez votre mot de passe"
          v-model="passwordlogin"
        />
       
        <input
          class="check"
          type="checkbox"
          name="forget password"
          checked="checked"
        />
       

        <a href="/mpo" class="forget">Mot de passe oublié?</a>
      </form>
      <a href="/myProfil"><button  class="boutonl">Connexion</button></a>
      <form class="form2l">
        <p class="pl">Pas encore membre? <br> Inscrivez-vous maintenant</p>
      </form>
    <button  class="inscrire"><pop/></button>

    </div>

      
   
</div>
</template>
    
<script>
import pop from '../components/pop.vue'

export default {
    name: "login",
    components: {
      pop
    },
    data() {
        return {
            email: "",
            password: "",
            emaillogin: "",
            passwordlogin: ""
        }
    },
    methods:{
         dologin: function (){
            this.axios.post("http://localhost:3000/client/login",{
                email:this.emaillogin,
                password:this.passwordlogin
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                    this.$router.push({name: 'profil'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "profil", params: {msg: "non connecté"} })
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
  .wrap{
  background-image: url("../assets/arriere-plan-masquefleur6.jpg");
   width: 100%;
        height: 120vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
}
.user{
  position: absolute;
  z-index: 3;
    font-size: 37px;
    top: 107px;
    left: 48px;
  color: #3a2b3b;
}
.password{
  position: absolute;
   z-index: 3;
    font-size: 37px;
    top: 214px;
    left: 48px;
  color: #3a2b3b;
}
::placeholder{
  color: #1f1220;
  font-size: 14px;
  font-family: 'Bodini MT';
  position: absolute;
}

h1.H{
  color: #1f1220;
    font-family: 'Spirax';
    position: absolute;
    bottom: 675px;
    left: 14%;
    font-size: 42px;
}
.pl{
  color: #fff;
  font-family: 'Bodini MT';
  font-size: 18px;
    position: absolute;
    top: 12px;
    TEXT-ALIGN: -webkit-center;
}
a.forget{
  text-decoration: none;
  color: #fff;
  position: relative;
    left: 17%;
    top: -62px;
    font-size: 14px;
    font-family: 'Bodini MT';
}
.check {
  position: absolute;
    top: 282px;
    height: 20px;
    left: 14%;
}
.boutonl{
  border: none;
    border-radius: 15px;
    background-color: #1f1220;
    color: white;
    outline: none;
    height: 53px;
    width: 146px;
    font-weight: bold;
    position: absolute;
    top: 487px;
    left: 225px;
    border-color: #1f1220;
    box-shadow: 0px 2px 9px 3px #2b1e2c;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
    font-size: 21px;
}

.form2l{
   width: 249px;
    height: 167px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: -6px 2px 4px 2px #261627;
    opacity: 0.80;
    position: relative;
    top: -152px;
    left: 48%;
}
.imageUser {
    position: absolute;
    bottom: 359px;
    width: 116px;
    left: 33%;
    height: 127px;

}
.form1l{
   width: 339px;
    height: 420px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 34px;
    /*background-color: #1f1220;*/
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: 0px 32px 34px 2px #261627;
    position: relative;
    top: 151px;
    left: 10%;
}

#Emaillogin,
#Passwordlogin {
  border: none;
    border-radius: 15px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 3px -6px 3px #968f97;
    outline: none;
    height: 60px;
    font-size: 12px;
    width: 100%;
    margin-bottom: -9px;
    position: relative;
    top: -17px;
 padding-left: 59px;
}
}

@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  .wrap{
  background-image: url("../assets/arriere-plan-masquefleur6.jpg");
   width: 100%;
        height: 120vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
}
.user{
  position: absolute;
  z-index: 3;
    font-size: 37px;
    top: 107px;
    left: 48px;
  color: #3a2b3b;
}
.password{
  position: absolute;
   z-index: 3;
    font-size: 37px;
    top: 204px;
    left: 48px;
  color: #3a2b3b;
}
::placeholder{
  color: #1f1220;
  font-size: 14px;
  font-family: 'Bodini MT';
  position: absolute;
}

h1.H{
  color: #1f1220;
    font-family: 'Spirax';
    position: absolute;
    bottom: 675px;
    left: 14%;
    font-size: 42px;
}
.pl{
  color: #fff;
  font-family: 'Bodini MT';
  font-size: 18px;
    position: absolute;
    top: 12px;
    TEXT-ALIGN: -webkit-center;
}
a.forget{
  text-decoration: none;
  color: #fff;
  position: relative;
    left: 17%;
    top: -20px;
    font-size: 17px;
    font-family: 'Bodini MT';
}
.check {
  position: absolute;
    top: 282px;
    height: 20px;
    left: 14%;
}
.boutonl{
  border: none;
    border-radius: 15px;
    background-color: #1f1220;
    color: white;
    outline: none;
    height: 53px;
    width: 146px;
    font-weight: bold;
    position: absolute;
    top: 487px;
   left: 204px;
    border-color: #1f1220;
    box-shadow: 0px 2px 9px 3px #2b1e2c;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
    font-size: 21px;
}

.form2l{
   width: 249px;
    height: 167px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: -6px 2px 4px 2px #261627;
    opacity: 0.80;
    position: relative;
    top: -152px;
    left: 48%;
}
.imageUser {
    position: absolute;
    bottom: 359px;
    width: 116px;
    left: 33%;
    height: 127px;

}
.form1l{
   width: 339px;
    height: 420px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 34px;
    /*background-color: #1f1220;*/
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: 0px 32px 34px 2px #261627;
    position: relative;
    top: 151px;
    left: 10%;
}

#Emaillogin,
#Passwordlogin {
  border: none;
    border-radius: 15px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 3px -6px 3px #968f97;
    outline: none;
    height: 60px;
    font-size: 12px;
    width: 100%;
    margin-bottom: 7px;
    position: relative;
    top: 6px;
 padding-left: 59px;
}
}

@media screen and (min-width: 768px) and (max-width: 1023.99px) {
  .wrap{
  background-image: url("../assets/arriere-plan-masquefleur6.jpg");
   width: 100%;
        height: 120vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
}
.user{
  position: absolute;
  z-index: 3;
    font-size: 37px;
    top: 107px;
    left: 48px;
  color: #3a2b3b;
}
.password{
  position: absolute;
   z-index: 3;
    font-size: 37px;
    top: 214px;
    left: 48px;
  color: #3a2b3b;
}
::placeholder{
  color: #1f1220;
  font-size: 14px;
  font-family: 'Bodini MT';
  position: absolute;
}

h1.H{
  color: #1f1220;
    font-family: 'Spirax';
    position: absolute;
    bottom: 675px;
    left: 14%;
    font-size: 42px;
}
.pl{
  color: #fff;
  font-family: 'Bodini MT';
  font-size: 18px;
    position: absolute;
    top: 12px;
    TEXT-ALIGN: -webkit-center;
}
a.forget{
  text-decoration: none;
  color: #fff;
  position: relative;
    left: 17%;
    top: 4px;
    font-size: 14px;
    font-family: 'Bodini MT';
}
.check {
      position: absolute;
    top: 299px;
    height: 20px;
    left: 14%;
}
.boutonl{
  border: none;
    border-radius: 15px;
    background-color: #1f1220;
    color: white;
    outline: none;
    height: 53px;
    width: 146px;
    font-weight: bold;
    position: absolute;
    top: 487px;
    left: 171px;
    border-color: #1f1220;
    box-shadow: 0px 2px 9px 3px #2b1e2c;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
    font-size: 21px;
}

.form2l{
   width: 249px;
    height: 167px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: -6px 2px 4px 2px #261627;
    opacity: 0.80;
    position: relative;
    top: 183px;
    left: 16%;
}
.imageUser {
    position: absolute;
    bottom: 359px;
    width: 116px;
    left: 33%;
    height: 127px;

}
.form1l{
   width: 339px;
    height: 420px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 34px;
    /*background-color: #1f1220;*/
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: 0px 32px 34px 2px #261627;
    position: relative;
    top: 151px;
    left: 10%;
}

#Emaillogin,
#Passwordlogin {
  border: none;
    border-radius: 15px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 3px -6px 3px #968f97;
    outline: none;
    height: 60px;
    font-size: 12px;
    width: 100%;
    margin-bottom: 21px;
    position: relative;
    top: 29px;
 padding-left: 59px;
}
}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
  .wrap{
  background-image: url("../assets/arriere-plan-masquefleur6.jpg");
   width: 100%;
        height: 120vh;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
}
.user{
  position: absolute;
  z-index: 3;
    font-size: 37px;
    top: 118px;
    left: 48px;
  color: #3a2b3b;
}
.password{
  position: absolute;
   z-index: 3;
    font-size: 37px;
    top: 212px;
    left: 48px;
  color: #3a2b3b;
}
::placeholder{
  color: #1f1220;
  font-size: 14px;
  font-family: 'Bodini MT';
  position: absolute;
}

h1.H{
  color: #1f1220;
    font-family: 'Spirax';
    position: absolute;
    bottom: 675px;
    left: 14%;
    font-size: 42px;
}
.pl{
  color: #fff;
  font-family: 'Bodini MT';
  font-size: 18px;
    position: absolute;
    top: 12px;
    TEXT-ALIGN: -webkit-center;
}
a.forget{
  text-decoration: none;
  color: #fff;
  position: relative;
    left: 17%;
    top: 4px;
    font-size: 14px;
    font-family: 'Bodini MT';
}
.check {
  position: absolute;
    top: 282px;
    height: 20px;
    left: 14%;
}
.boutonl{
  border: none;
    border-radius: 15px;
    background-color: #1f1220;
    color: white;
    outline: none;
    height: 53px;
    width: 146px;
    font-weight: bold;
    position: absolute;
    top: 426px;
    left: 170px;
    border-color: #1f1220;
    box-shadow: 0px 2px 9px 3px #2b1e2c;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
    font-size: 21px;
}

.form2l{
   width: 249px;
    height: 167px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: -6px 2px 4px 2px #261627;
    opacity: 0.80;
    position: relative;
    top: 140px;
    left: 15%;
}
.imageUser {
    position: absolute;
    bottom: 359px;
    width: 116px;
    left: 33%;
    height: 127px;

}
.form1l{
   width: 339px;
    height: 420px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 34px;
    /*background-color: #1f1220;*/
    background: linear-gradient(325deg,rgb(31, 22, 37) 25%, #1a0f1b, rgb(117, 99, 124) 100%);
    box-shadow: 0px 32px 34px 2px #261627;
    position: relative;
    top: 86px;
    left: 10%;
}

#Emaillogin,
#Passwordlogin {
  border: none;
    border-radius: 15px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 3px -6px 3px #968f97;
    outline: none;
    height: 60px;
    font-size: 12px;
    width: 100%;
    position: relative;
    top: 16px;
    margin-top: 32px;
 padding-left: 59px;
}
}
</style>

