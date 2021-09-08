<template>

    <div class="ctn">
        <a href="/" class="retour"> <button class="btnretour"> Back</button></a>
        <form class="fo">
        <p>Nous venons de vous envoyez un mail, veillez valider votre inscription en cliquant sur le lien envoyez</p>
        </form>
        <!--<input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
        <button @click="validemail" value="test"> </button>-->
    </div>

</template>


<script>
export default {
    data(){
        return {
            email: "",
        };
    },
    name: "validemail",
    //add method
   
};
</script>

<style scoped>
.ctn{
    width: 100%;
        height: 120vh;
        background-image: url("../assets/rn4m23TKAA.jpg");
        /*-moz-background-inline-policy: ;mettre l'image en couverture*/
        background-attachment: fixed;
        background-position: center;
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
p{
    font-size: 37px;
    color:darkgoldenrod;
    font-family: 'Galada';
}
.fo{
    width: 421px;
    height: 416px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: -1px -6px 23px rgb(34, 34, 34);
    position: absolute;
    left: 5%;
    bottom: 92px;
}

</style>