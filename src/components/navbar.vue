<template>

  <div id="wrapN">
  <div class="containerN">
            <nav>
                  <input type="checkbox" id="nav" class="hidden">
                  <label for="nav" class="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
                  <div class="logoN">
                        <a href="/"><img src="../assets/logo2.png" alt="" class="logoNi"></a>
                  </div>
                  <div class="nav-wrapper">
                        <ul>
                              
                             
                              <li class="dropdown">
                                  <a href="/blog" class="arti">Article</a>
                              <div class="dropdown-content">
                                  <a href="/blogCoiffure">Coiffure</a>
                                  <a href="/blogBarbe">Barbe</a>
                              </div>
                              </li>
                              <li><a href="/Apropos" class="prop">A propos</a></li>
                        </ul>
                  </div>
            </nav>
      </div>

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
li.dropdown{
    display: inline-block;

}
a.prop[data-v-688b5e20] {
   position: absolute;
    left: 60%;
    top: 11px;
    font-size: 30px;
    font-family: 'Spirax';
}
a.arti{
    position: absolute;
    top: 11px;
    left: 417px;
    font-size: 30px;
    font-family: 'Spirax';
}
img.logoNi {
    
    width: 137px;
    position: absolute;
    left: 44%;
    top: 35px;
}

.dropdown-content{
    display: none;
    position: absolute;
       background-color: #7F6E6F;
    min-width: 160px;
    box-shadow: 5px 8px 16px 0px rgba(0, 0, 0, 0.2);
   left: 367px;
    top: 52px;
    border-radius: 7px;
}

.dropdown-content a{
    color:  #c4a1bf;
    padding: 13px 18px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 15px;
}

.dropdown-content a:hover {
    background-color:beige;
}

.dropdown:hover .dropdown-content {
    display: block;
}

nav {
      padding: 8px;
}
.logoN {
      float: left;
      padding: 8px;
      margin-left: 16px;
      margin-top: 8px;
}

.logoN a {
      color: #000;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0px;
      text-decoration: none;
}

nav ul {
      
    
    position: relative;
    top: -36px;
    left: 0%;

}

nav ul li {
      display: inline-block;
      float: left;
}

nav ul li:not(:first-child) {
      margin-left: 48px;
}

nav ul li:last-child {
      margin-right: 24px;
}
nav ul li a {
      display: inline-block;
      outline: none;
      color: #1f1220;
      text-decoration: none;
      font-size: 14px;
      font-family: "Crismon Text";
      letter-spacing: 1.2px;
      font-weight: 600;
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
      position: static;
}

.hidden {
      display: none;
}

@media screen and (max-width: 864px) {

    .containerN{
        width: 100%;
    height: 79px;
    }
      .logoN {
            padding: 0;
      }

      .nav-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 45%;
            z-index: -1;
            background: #fff;
            opacity: 0;
            transition: all 0.2s ease;
      }

      .nav-wrapper ul {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
      }
.nav-wrapper ul li {
            display: block;
            float: none;
            width: 100%;
            text-align: right;
            margin-bottom: 10px;
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
            font-size: 14px;
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
            background: #000;
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
      
}
</style>