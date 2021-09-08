<template>
<div class="section">
      
      <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
   <header>Dashboard</header>
  <ul>
<li><a href="#"><i class="fas fa-qrcode"></i>Profil</a></li>
<li><a href="#"><i class="fas fa-calendar-week"></i>Mes Rendez-Vous</a></li>
<li><a href="#"><i class="far fa-question-circle"></i>Prendre RDV</a></li>
<li><a href="#"><i class="fas fa-cart-plus"></i>Boutique</a></li>

</ul>
</div>
<section></section>

</div>
</template>
      
<script>
export default {
      
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body {
  font-family: 'Roboto', sans-serif;
}





.sidebar {
  position: fixed;
  left: -250px;
  width: 250px;
  top: 13px;
  height: 100%;
  background: #12081b;
  transition: all .5s ease;
}
.sidebar header {
  font-size: 24px;
  color: white;
  font-family: 'Spirax';
  line-height: 70px;
  text-align: center;
  background:#12081b;
  user-select: none;
}
.sidebar ul a{
  display: block;
  height: 100%;
  width: 100%;
  font-family: 'Galada';
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-top: 1px solid rgba(255,255,255,.1);
  transition: .4s;
}
ul li:hover a{
  padding-left: 50px;
}
.sidebar ul a i{
  margin-right: 16px;
}
#check{
  display: none;
}
label #btn,label #cancel{
  position: absolute;
  background:#12081b;
  border-radius: 3px;
  cursor: pointer;
}
label #btn{
  left: 40px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 6px 12px;
  transition: all .5s;
}

label #cancel{
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: #3c3244;
  padding: 4px 9px;
  transition: all .5s ease;
}
#check:checked ~ .sidebar{
  left: 0;
}
#check:checked ~ label #btn{
  left: 250px;
  opacity: 0;
  pointer-events: none;
}
#check:checked ~ label #cancel{
  left: 195px;
}
#check:checked ~ section{
  margin-left: 250px;
}
section{
  background: url("../assets/image-login.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 143vh;
  transition: all .5s;
  margin: -142px 0 0 0;
  margin-top: -268px;
}

</style>
