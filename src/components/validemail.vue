<template>

    <div class="ctn">
        <a href="/" class="retour"> <button class="btnretour"> Back</button></a>
        <h1>Veuillez valider votre adresse email</h1>
        <form class="fo">
        <input type="email" 
        name="email" 
        v-model="email"  
        placeholder=" |saisissez votre email">
        <button @click="validemail" value="test"> Je Valide</button>
        </form>
        
    </div>

</template>


<script>
export default {
  name: "validemail",
  components: {},
  data() {
    return {
      email: this.$route.params.email,
    };
  },
  methods: {
    validemail: function () {
      this.axios
        .post(`${this.$apiurl}client/validemail`, {
          email: this.email,
        })
        .then((result) => {
          alert(result);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.ctn{
    width: 100%;
        height: 120vh;
        background-image: url("../assets/rn4m23TKAA.jpg");
        background-attachment: fixed;
        background-position: center;
}
.retour{
    color: rgb(63, 55, 66);
    font-size: 30px;
    font-weight: bold;
    font-family: 'Galada';
}
.btnretour{
   border-radius: 7px;
    background: transparent;
    outline: none;
    height: 58px;
    width: 141px;
    box-shadow: 2px 2px 0px 0px #3b2f3b !important;
    border-width: 2px;
    margin-top: -212px;
    margin-left: -422px;
}
h1{
    font-family: 'Bodini MT';
    position: absolute;
    top: 195px;
    left: 5%;
    Z-INDEX: 1;
    text-decoration: underline;
    font-weight: bold;
    font-size: 24px;
    color: #212e3b;
}
button{
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
    top: 245px;
    left: 35%;
    z-index: 1;
    border-color: #304558;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
    font-family: 'Spirax';
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
  position: absolute;
    width: 75%;
    height: 55px;
    bottom: 128px;
    border-left-color: #283b4d;
    left: 12%;
}
.fo{
    width: 376px;
    height: 327px;
    padding: 60px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    background: linear-gradient(90deg, #bbb7bb,#fff,#cac2ca);
    box-shadow: -1px -6px 23px rgb(34, 34, 34);
    position: relative;
    left: 5%;
    bottom: -141px;
}

</style>