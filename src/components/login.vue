<template>
<div class="wrap">

     <div class="login">
       <h1>Se Connecter</h1>
      <form class="form1" @submit.prevent="dologin">
        <img src="../assets/image-user.png" alt="" class="imageUser">
        <input
          type="email"
          name="emaillogin"
          id="emaillogin"
          placeholder=" | Saisissez votre e-mail"
          v-model="emaillogin"
        />
        <input
          type="password"
          name="passwordlogin"
          id="passwordlogin"
          placeholder=" | Entrez votre mot de passe"
          v-model="passwordlogin"
        />
       <img src="../assets/icon-user.png" alt="" class="iconUser">
        <input
          class="check"
          type="checkbox"
          name="forget password"
          checked="checked"
        />
       <img src="../assets/icon-password.png" alt="" class="iconPassword">

        <a href="#" class="forget">Mot de passe oublié?</a>
      </form>
      <a href="/"><button  class="bouton">Connexion</button></a>
      <form class="form2">
        <p>Pas encore membre? <br> Inscrivez-vous maintenant</p>
      </form>
      <a href="/"><button  class="inscrire">S'inscrire</button></a>
    </div>

      
   
</div>
</template>
    
<script>
export default {
    
}
</script>

<style>
.wrap{
  background-image: url("../assets/image-login.jpg");
   margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 143vh;
}
.iconPassword{
  width: 29px;
    position: absolute;
    top: 155px;
    right: 239px;
    
}

.iconUser{
  width: 29px;
    position: absolute;
    right: 237px;
    top: 93px;
}
h1{
  color: #1f1220;
    font-family: 'Spirax';
    position: relative;
    bottom: -105px;
    left: 14%;
}
p{
  color: #fff;
  font-family: 'Bodini MT';
  font-size: 14px;
  position: absolute;
  top: 12px;
}
a.forget{
  text-decoration: none;
  color: #fff;
  position: relative;
    left: 17%;
    top: 39px;
    font-size: 12px;
    font-family: 'Bodini MT';
}
.check {
  position: absolute;
    top: 223px;
    height: 20px;
    left: 14%;
}
.bouton{
  border: none;
    border-radius: 9px;
    background-color: #1f1220;
    color: white;
    outline: none;
    height: 47px;
    width: 135px;
    font-weight: bold;
    position: absolute;
    top: 494px;
    left: 201px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
   font-size: 21px;

}
.inscrire{
  border: none;
    border-radius: 9px;
    background-color: #1f1220;
    color: white;
   font-size: 21px;
    outline: none;
    height: 47px;
    width: 135px;
    font-weight: bold;
    position: absolute;
    top: 369px;
    left: 611px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
}
.form2{
 width: 209px;
    height: 136px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
    background-color: #1f1220;
    opacity: 0.85;
    position: relative;
    top: -125px;
    left: 53%;
}
.imageUser {
      position: absolute;
    bottom: 311px;
    width: 103px;
    left: 32%;

}
.form1{
    width: 305px;
    height: 372px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 9px;
    background-color: #1f1220;
    opacity: 0.85;
    position: relative;
    top: 151px;
    left: 10%;
}

.wrap input[type="email"],
input[type="password"] {
  border: none;
    border-radius: 9px;
    border-left: 5px solid #3a2b3b;
    background: lightgray;
    box-shadow: 2px 2px 2px #1f1220;
    outline: none;
    height: 45px;
    font-size: 12px;
    width: 100%;
  margin-bottom: 15px;
  position: relative;
    top: 27px;
    
}

</style>

