<template>

  <div id="wrapN">
<b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><img src="../assets/TAILOR.png" alt=""  class="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Accueil</b-nav-item>
        <b-nav-item href="/navproduit" >Boutique</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em class="ar">Article</em>
          </template>
          <b-dropdown-item href="/blogCoiffure">Coiffure</b-dropdown-item>
          <b-dropdown-item href="/blogBarbe">Barbe</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/login" >Compte</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </div>

 
  
</template>

<script>
export default {
  name: "myMenu",
};
</script>

<style scoped>
* {
      box-sizing: border-box;
       margin: 0;
      padding: 0;
}
.logo{
  width: 200px;
  margin-left: 26px;
}
.ml-auto{
      font-size: 20px !important;
      font-family: "Crimson text";
}
.bg-info {
    background-color: #ffffff !important;
}


.navbar-dark .navbar-nav .nav-link {
    color: rgb(177 130 165) !important;
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(177 130 165) !important;
}
.ar{
    color: rgba(177 130 165);
}
.navbar-nav {
    margin-left: 500px !important;
}
.navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #7F6E6F;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}


.home{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background:url("../assets/zQaGxRSYck.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
}

.home .imageF img{
    width:40vw;
    animation: float 3s linear infinite;
}

@keyframes float{
    0%, 100%{
        transform: translateY(4px);
    }
    50%{
        transform: translateY(-9.5px);
    }
}

.home .contentF h3{
   font-size: 80.5px;
    color: rgb(120, 177, 167);
    text-transform: uppercase;
    font-family: 'Galada';
    margin-right: 305px;
}

.home .contentF h3 span{
    color:var(--pink);
    text-transform: uppercase;
}

.home .contentF p{
    font-size: 16.7px;
    color:#666;
    padding:1px 0;
}
/**FIN NAVBAR */


    
@media screen and (max-width: 991px){
  .navbar-nav[data-v-a08a2138] {
    margin-left: 0px;
}
  
}

</style>