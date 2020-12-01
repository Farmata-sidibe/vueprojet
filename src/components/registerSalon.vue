<template>
     <div class="content">
       
            <div >
                
                <form @submit.prevent="doregister" class="forma">
                    <h1 class="ajout">Ajouter votre Institut</h1>
                    <img src="../assets/image-user.png" alt=""  class="image">
                    
                     <i class="fa fa-user-circle nom"></i>
                    <input type="nom" name="nom" id="Nom" v-model="nom"  placeholder="saisissez votre nom">
                    
                    <i class="fas fa-home adresse"></i>
                    <input type="text" name="adresse" id="Adresse" v-model="adresse"  placeholder="saisissez votre adresse">
                    
                    <i class="fas fa-home ville"></i>
                    <input type="text" name="ville" id="Ville" v-model="ville"  placeholder="saisissez votre ville">
                    
                     <i class="fas fa-home cp"></i>
                    <input type="text" name="cp" id="Cp" v-model="cp"  placeholder=" votre Code Postale">
                    
                    <i class="fas fa-tty"></i>
                    <input type="tel" name="tel" id="Tel" v-model="tel"  placeholder="saisissez votre numero">
                    
                    
                    
    <div class="form-row align-items-center" v-on="type">
    <div class="col-auto my-1">
      <select id="inlineFormCustomSelect" >
        <option selected>Gérant d'un salon de coiffure...</option>
        <option value="1">Gérant d'un Barbier</option>
        <option value="2">Coiffeur à domicile</option>
        <option value="3">Gérant d'un salon et coiffeur à domicile</option>
      </select>
    </div>
    
  </div>



                    <a href="/login"><button class="inscri">S'inscrire</button></a>
                   
                </form>
            </div>

            

            
      
    </div>
</template>
<script>
export default {
    name: "registerSalon",
    data() {
        return {
            nom: "",
            adresse: "",
            ville: "",
            cp: "",
            tel: "",
            type: "",
        }
    },
    components:{},
    methods:{
        doregister: function (){
            this.axios.post("http://localhost:3000/salon/new",{
                nom:this.nom,
                adresse:this.adresse,
                ville:this.ville,
                cp:this.cp,
                tel:this.tel,
                type:this.type,

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

.col-auto {
    flex: 0 0 auto;
    width: 36%;
    max-width: 100%;
}

#inlineFormCustomSelect {
    width: 407%;
    height: 44px;
    font-size: 13px;
    color: #fff;
    border: none;
    border-radius: 9px;
    border-left: 5px solid #213141;
    background:#304558;
    box-shadow: 2px 2px 2px  #283b4d;
    outline: none;
    margin-left: -40px;
  
}
.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 46px;
    margin-left: 52px;
    margin-top: 216px;
}


.content{
   background-image: url("../assets/image-register-salon.jpg") ;
    margin: 0 ;
  padding: 0;
  background-repeat: no-repeat ;
  background-position: center ;
  background-size: cover ;
  background-attachment: fixed;
  height: 811px;
  width: 100% ;
  position: absolute;
  
}

.nom{
    position: absolute;
  z-index: 3;
    font-size: 23px;
    color: #f1e9f1;
    left: 14%;
    TOP: 89px;
}



.adresse{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 14%;
    TOP: 143px;
}

.ville{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 14%;
    TOP: 197px;
}

.cp{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 14%;
    TOP: 252px;
}

.fa-tty{
     position: absolute;
  z-index: 3;
   font-size: 23px;
    color: #f1e9f1;
    left: 14%;
    TOP: 309px;
}




::placeholder{
    color: #1f1220;
    font-size: 10px;
}
.image {
    position: absolute;
    bottom: 439px;
    width: 100px;
    left: 36%;
    height: 99px;
}
.forma::placeholder{
    font-size: 10px;
    font-family: 'Bodini MT';
    
}
.inscri{
    top: 438px;
    left: 621px;
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
    border-color:#304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.ajout{
    font-family: 'Spirax';
    position: absolute;
    top: -115px;
    left: 6%;
    font-size: 39px;
    font-weight: 900;
    width: 100%;
}
::placeholder{
    color: #ffffff;
    font-size: 13px;
    font-family: 'Bodini MT';
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
input#Nom{
    position: absolute;
    width: 75%;
    height: 40px;
    bottom: 362px;
    left: 12%;
}

input#Adresse{
position: absolute;
   width: 75%;
    height: 40px;
    bottom: 308px;
    left: 12%;
}
input#Ville{
    position: absolute;
    width: 75%;
    height: 40px;
   bottom: 253px;
    left: 12%;
}
input#Cp{
    position: absolute;
    width: 75%;
    height: 40px;
    bottom: 198px;
    left: 12%;
}
input#Tel{
    position: absolute;
    width: 75%;
    height: 40px;
    left: 12%;
    bottom: 142px;
}

.forma{
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

a{
    position: absolute;
    left: -137%;
    top: -26px;
    
}
</style>