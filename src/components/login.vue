<template>
<div class="plan">
 <!--<img src="../assets/KM8cBT3lsJ.jpg" alt="" class="plan ig">-->
     <div class="container">
         <router-link to="/">
       <button class="btnretour"> Back </button>
       </router-link>
            <div >
                
                <form @submit.prevent="dologin" class="forme">
                    <h2>Bienvenue </h2>
                    <h5>Connectez-vous à votre compte!</h5>

                    <i class="fas fa-envelope-square mail"></i>
                    <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
                    
                    <i class="fas fa-lock password"></i>
                    <input type="password" name="password" id="password" v-model="password"  placeholder=" |votre mot de passe">
                    <a href="/mpo" class="forget">Mot de passe oublié? Cliquez-ici</a>
                    <button type="submit" class="inscrit">S'identifier</button>
                   
                </form>
                <form class="formimage">
                   <p class="inscription">Pas encore membre? Inscrivez vous maintenent</p>
                   <router-link to="/registerClient">
                   <button class="show-btn">S'inscrire</button>
                   </router-link>
                </form>
            </div>

            

          </div>
    </div>
</template>
<script>


export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
            
        }
    },
   
    methods:{
        dologin: function (){
            this.axios.post(`${this.$apiurl}client/llogin`,{
                email:this.email,
                password:this.password,
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur dashboard */
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
.plan {
    background-image: url("../assets/KM8cBT3lsJ.jpg");
    background-attachment: fixed;
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 120vh;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1 1 27px;
    
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

.btnretour{
    color: rgb(197, 187, 202) !important;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Galada';
   border-radius: 7px;
    background: transparent;
    outline: none;
    height: 58px;
    width: 141px;
    box-shadow: 2px 2px 0px 0px #ce9ace !important;
    border-width: 2px;
    margin-left: 21px;
    margin-top: 28px;
}
.show-btn {
  border: none !important;
    border-radius: 15px !important;
    background-color: #1f1220 !important;
    color: white !important;
   font-size: 22px !important;
    outline: none !important;
    height: 47px !important;
    padding: 0;
    width: 135px !important;
    font-weight: bold !important;
   margin: 77px 0px 0px 34px;
    border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove !important;
    border-right-style: groove !important;
    border-top-style: groove !important;
    border-bottom-style: groove !important;
    border-width: 2px !important;
    font-family: 'Spirax' !important;
    text-transform: initial !important;
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
  margin-top: 1px;
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
   margin: 235px 0 0 62px;
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
    flex-basis: auto;
    flex-wrap: wrap;
    
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
    flex-basis: auto;
    flex-wrap: wrap;
}



</style>