<template>
  <div class="ctn">
       <div id="wrap">
  <div class="container">
            <nav>
                  <input type="checkbox" id="nav" class="hidden">
                  <label for="nav" class="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
                  <div >
                        <a href="#" class="alogo"><img src="../assets/TAILOR.png" alt="" class="logo" ></a>
                  </div>
                  <div class="nav-wrapper">
                        <ul>
                              <li><a href="/">Accueil</a></li>
                              <li><a href="http://localhost:8080/blog">Blog</a></li>
                              <li><a href="/panier">Panier</a></li>
                              <li><a href="/navproduit"><i class="fas fa-cart-plus"></i>Boutique</a></li>
                              <li><a href="/login"><i class="fas fa-user-circle"></i>Compte</a></li>
                        </ul>
                  </div>
                   
            </nav>
      </div>

  </div>
  </div>
</template>

<script>
export default {
name:"navnav"
}
</script>

<style scoped>

@media screen and (min-width: 1280px) {
li.dropdown{
    display: inline-block;

}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: beige;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 59%;
}

.dropdown-content a{
    color: black;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
}



nav {
      padding: 8px;
}
.logo {
    width: 221px;
    position: absolute;
    top: 31px;
    left: 557px;
}
i.fas.fa-user-circle{
    width: 25px;
}
i.fas.fa-cart-plus{
    width: 25px;
}

nav ul {
     margin-top: -228px;
    position: absolute;
    left: 379px;
}

nav ul li {
      display: inline-block;
      
      margin-right: -17px;
}

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}
.nav-wrapper a.active,.nav-wrapper a:hover{
 background: #7F6E6F;
    transition: .5s;
    width: 113%;
    height: 31px;
    text-align: -webkit-center;
    border-radius: 5px;
    border: groove;
}
nav ul li a {
      display: inline-block;
    outline: none;
    font-family: myriad pro regular;
    color: #5b4461;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
}
#nav:checked + .nav-btn {
      transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
      background: #000;
      transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
      opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
      z-index: 9990;
      opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
      opacity: 1;
      transform: translateX(0);
}

.hidden {
      display: none;
}


    
}

@media screen and (min-width: 768px) and (max-width: 1023.99px){

      .logo {
         margin-top: -57px;
    margin-left: -222px;
    width: 233px;
      }

      .nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
      }
      .hidden {
      display: none;
}

      .nav-wrapper ul {
            position: absolute;
    top: 18%;
    transform: translateY(-50%);
    width: 89%;
      }
.nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: -16px;
      }

      .nav-wrapper ul li:nth-child(1) a {
            transition-delay: 0.2s;
      }

      .nav-wrapper ul li:nth-child(2) a {
            transition-delay: 0.3s;
      }

      .nav-wrapper ul li:nth-child(3) a {
            transition-delay: 0.4s;
      }
.nav-wrapper ul li:nth-child(4) a {
            transition-delay: 0.5s;
      }

      .nav-wrapper ul li:not(:first-child) {
            margin-left: 0;
      }

      .nav-wrapper ul li a {
            padding: 10px 24px;
            opacity: 0;
            color: #000;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 1.2px;
            transform: translateX(-20px);
            transition: all 0.2s ease;
      }

      .nav-btn {
            position: fixed;
            right: 10px;
            top: 10px;
            display: block;
            width: 48px;
            height: 48px;
            cursor: pointer;
            z-index: 9999;
            border-radius: 50%;
      }

      .nav-btn i {
            display: block;
            width: 20px;
            height: 2px;
            background: #fff;
            border-radius: 2px;
            margin-left: 14px;
      }

      .nav-btn i:nth-child(1) {
            margin-top: 16px;
      }

      .nav-btn i:nth-child(2) {
            margin-top: 4px;
            opacity: 1;
      }

      .nav-btn i:nth-child(3) {
            margin-top: 4px;
      }

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}
.nav-wrapper a.active,.nav-wrapper a:hover{
 background: #7F6E6F;
    transition: .5s;
    width: 113%;
    height: 31px;
    text-align: -webkit-center;
    border-radius: 5px;
    border: groove;
}
nav ul li a {
      display: inline-block;
    outline: none;
    color: rgba(255, 255, 255, 0.945);
    text-decoration: none;
    font-size: 13px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
#nav:checked + .nav-btn {
      transform: rotate(45deg);
}

#nav:checked + .nav-btn i {
      background: #000;
      transition: transform 0.2s ease;
}

#nav:checked + .nav-btn i:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
}

#nav:checked + .nav-btn i:nth-child(2) {
      opacity: 0;
}

#nav:checked + .nav-btn i:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
}

#nav:checked ~ .nav-wrapper {
      z-index: 9990;
      opacity: 1;
}

#nav:checked ~ .nav-wrapper ul li a {
      opacity: 1;
      transform: translateX(0);
}




li.dropdown{
    display: inline-block;

}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: beige;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    left: 59%;
}

.dropdown-content a{
    color: black;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}


#wrap{
    background-color: #0f080ffb;
    opacity: 0.85;
    height: 90px;
    position: fixed;
    width: 100%;
    Z-INDEX: 1071;
          
}
 
.logo {
    width: 231px;
}
i.fas.fa-user-circle{
    width: 41px;
}
i.fas.fa-cart-plus{
    width: 41px;
}
.compte a{
    text-decoration: none;
     display: inline-block;
    outline: none;
    color: floralwhite;
    text-decoration: none;
    font-size: 26px;
    font-family: "Crimson Text";
    letter-spacing: 1.2px;
    font-weight: 600;
    text-transform: uppercase;
}
.compte{
        position: absolute;
    top: 4px;
    left: 73%;
}

}
</style>