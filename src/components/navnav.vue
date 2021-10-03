<template>
  <div class="ctn">
       <div id="wrap">
   <header>

    <a href="#"><img src="../assets/TAILOR.png" alt=""  class="logo"></a>

    <input type="checkbox" id="menu-bar">
    <label for="menu-bar" class="fas fa-bars"></label>

    <nav class="navbar">
        <a href="#home">Accueil</a>
        <a href="/panier">Panier</a>
        <a href="/blog">Blog</a>
        <a href="/navproduit">Boutique</a>
        <a href="/login">Compte</a>
        <a v-on:click="logout" href="/login">Déconnexion</a>
    </nav>

</header>

  </div>
  </div>
</template>

<script>
export default {
name:"navnav"
}
</script>

<style scoped>

header{
    width:100%;
    display: flex;
    align-items: center;
    z-index: 1000;
}
header .navbar {
      margin-left: 432px;
}

header .logo{
    width: 151px;
    margin-left: 80px;
}

header .logo span{
    color:var(--pink);
}

header .navbar a{
    font-size: 17px;
    margin-left: 27px;
    color:var(--purple);
}

header .navbar a:hover{
    color:var(--pink);
}

header input{
    display: none;
}

header label{
    font-size: 30px;
    color:var(--purple);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
}


@media screen and (max-width: 768px){

 header label{
        visibility: visible;
        opacity: 1;
    }

    header .navbar{
        position: absolute;
        top:100%; left: 0;
        width:100%;
        background:#fff;
        padding:59px 2px;
        border-top: .1px solid rgba(0,0,0,.2);
        box-shadow: 0 .5px 1px rgba(0,0,0,.1);
        transform-origin: top;
        transform: scaleY(0);
        opacity: 0;
        transition: .2s linear;
    }

    header .navbar a{
        display: block;
        margin:2px 0;
        font-size: 12px;
    }

    header input:checked ~ .navbar{
        transform: scaleY(1);
        opacity: 1;
    }

    header input:checked ~ label::before{
        content:'\f00d';
    }

   

}
</style>