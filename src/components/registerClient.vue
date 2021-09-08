<template>
<div class="plan">
 
     <div class="container">
       
            <div >
                
                <form @submit.prevent="doregister" class="forme">
                    
                    <img src="../assets/image-user.png" alt=""  class="imageU">

                    <i class="fa fa-user-circle nom"></i>
                    <input type="nom" name="nom" id="nom" v-model="nom"  placeholder=" |saisissez votre nom">
                    
                    <i class="fa fa-user-circle prenom"></i>
                    <input type="prenom" name="prenom" id="prenom" v-model="prenom" placeholder=" |votre prenom">
                    
                    <i class="fas fa-home adresse"></i>
                    <input type="text" name="adresse" id="adresse" v-model="adresse"  placeholder=" |saisissez votre adresse">
                    
                    <i class="fas fa-home ville"></i>
                    <input type="text" name="ville" id="ville" v-model="ville"  placeholder=" |saisissez votre ville">
                    
                    <i class="fas fa-home cp"></i>
                    <input type="text" name="cp" id="cp" v-model="cp"  placeholder=" |votre Code Postale">
                    
                    <i class="fas fa-tty"></i>
                    <input type="tel" name="tel" id="tel" v-model="tel"  placeholder=" |saisissez votre telephone">
                   
                    <i class="fas fa-envelope-square mail"></i>
                    <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
                    
                    <i class="fas fa-lock password"></i>
                    <input type="password" name="password" id="password" v-model="password"  placeholder=" |votre mot de passe">
                    
                    <a href="/login"><button class="inscrit">S'inscrire</button></a>
                   
                </form>
                <form class="formimage">
                   <h1 class="inscription">Inscription</h1>
                </form>
            </div>

            

          </div>
    </div>
</template>
<script>
export default {
    name: "registerClient",
    data() {
        return {
            email: "",
            password: "",
            emaillogin: "",
            passwordlogin: "",
            nom: "",
            prenom: "",
            adresse: "",
            ville: "",
            cp: "",
            tel: "",
            image: "",
        }
    },
    components:{},
    methods:{
        doregister: function (){
            this.axios.post("http://localhost:3000/client/registor",{
                email:this.email,
                password:this.password,
                nom:this.nom,
                prenom:this.prenom,
                adresse:this.adresse,
                ville:this.ville,
                cp:this.cp,
                tel:this.tel,
                image:this.image,

            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recperer et stockés il va nous renvoyer sur home */
                    this.$router.push({name: 'msgvalide'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "msgvalide", params: {msg: "non connecté"} })
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
    background-image: url("../assets/arriere-plan-fleur1.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 120vh;
}

.nom{
    position: absolute;
  z-index: 3;
    font-size: 23px;
    color: #f1e9f1;
    left: 11%;
    TOP: 118px;
}

.prenom{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 58%;
    TOP: 118px;
}

.adresse{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 23%;
    TOP: 179px;
}

.ville{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 11%;
    TOP: 237px;
}

.cp{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 55%;
    TOP: 235px;
}

.fa-tty{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 24%;
    TOP: 299px;
}

.mail{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 11%;
    TOP: 362px;
}

.password{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 56%;
    TOP: 361px;
}





::placeholder{
    color: #ffffff;
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
    bottom: 428px;
    width: 118px;
    left: 36%;
    height: 124px;
}
.forme::placeholder{
    
    font-family: 'Bodini MT';
    font-size: initial;
}
.inscrit{
    border: none;
    border-radius: 16px;
    background:#304558;;
    box-shadow: -6px 2px 4px 2px #283b4d;
    color: white;
    font-size: 25px;
    outline: none;
    height: 58px;
    width: 163px;
    font-weight: bold;
    position: absolute;
    top: 445px;
    left: 619px;
    border-color:#304558;
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
    top: 174px;
    left: 19%;
    font-weight: bold;
    font-size: 42px;
    color: #212e3b;
}
input{
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background:#304558;
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
  margin-bottom: 15px;
  font-size: initial;
  padding-left: 30px;
  
}
input#nom{
    position: absolute;
    width: 41%;
    height: 40px;
    top: 109px;
}
input#prenom{
    position: absolute;
    width: 41%;
    height: 40px;
    left: 55%;
    top: 109px;
}
input#adresse{
position: absolute;
    width: 60%;
    height: 40px;
    bottom: 271px;
    left: 21%;
}
input#ville{
    position: absolute;
    width: 41%;
    height: 40px;
    bottom: 213px;
}
input#cp{
    position: absolute;
   width: 41%;
    height: 40px;
    bottom: 213px;
    left: 53%;
}
input#tel{
    position: absolute;
    width: 60%;
    height: 40px;
    left: 21%;
    bottom: 152px;
}
input#email{
    position: absolute;
    width: 41%;
    height: 40px;
    bottom: 89px;
}
input#password{
    position: absolute;
    width: 41%;
    height: 40px;
    bottom: 89px;
    left: 53%;
}
.forme{
    width: 376px;
    height: 496px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 22px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: 17px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 43%;
    bottom: 15px;
    
}
.formimage{
    width: 341px;
    height: 378px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #1f1220;
    position: absolute;
    left: 19%;
    bottom: 80px;
    box-shadow: -17px 2px 35px rgb(34, 34, 34);
    background-image: url("../assets/image-login.jpg");
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


</style>