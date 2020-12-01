<template>
    <div>
        <div class="toutfoot">
        <img src="../assets/image-footer.jpg" alt="footer image" class="footerimg">
        <button class="btn"><a href="/registerClient" class="now"> Inscrivez-Vous maintenant</a></button>

         <div class="footer">
             
             
               <ul>
      <li>
        <a href>
          <i class="fab fa-facebook-f icon"></i>
        </a>
      </li>

      <li>
        <a href>
          <i class="fab fa-twitter icon"></i>
        </a>
      </li>

      <li>
        <a href>
          <i class="fab fa-instagram icon"></i>
        </a>
      </li>

      <li>
        <a href>
          <i class="fab fa-google-plus-g icon"></i>
        </a>
      </li>
    </ul>
            <h5 class="copy"> <i class="far fa-copyright"></i>2020 Farmata Sidibe</h5>
        </div>

        </div>
        
        
      
    </div>
</template>


<script>
export default {
    name: "myFooter"
}
</script>


<style scoped>
@media screen and (min-width: 1280px) {

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 188px;
    font-size: 31px;
}
.toutfoot{
    margin-top: -109px;
    overflow: hidden;
}
.footer{
    background-color: #0f080ffb;
    height: 200px;
    position: relative;

}

.footerimg{
    width: 100%;
    position: relative;
    BOTTOM: -109px;
}

button.btn{
    border: none;
    border-radius: 9px;
    background-color: #1f1220;
    outline: none;
    height: 82px;
    width: 213px;
    position: relative;
    left: 64%;
    bottom: 218px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
   
    
}
.now{
   font-weight: bold;
    text-decoration: none;
    font-family: 'Spirax';
    color: white;
    font-size: 20px;
    position: absolute;
    top: 10px;
    left: 5%;
}




h5.copy{
    color: #fff;
    position: relative;
    left: 43%;
    font-family: 'Spirax';
    font-size: 18px;
    bottom: -154px;
}


@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

ul {
      display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 48%;
     top: 82px;
}

ul li {
  width: 54px;
    height: 50px;
  background-color: white;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
  top: -17px;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover::before {
  top: 0;
}

/* ca veut dire tu prends le premier enfants de l'élément  */
ul li:nth-child(1) a:before {
  background: #3b5999;
}
ul li:nth-child(2) a:before {
  background: #55acee;
}
ul li:nth-child(3) a:before {
  background: linear-gradient( #dd4b39,  #3978dd,  #a139dd);
}
ul li:nth-child(4) a:before {
  background: #dd4b39;
}  
}

@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  .toutfoot{
    margin-top: -109px;
    overflow: hidden;
}
.footer{
    background-color: #0f080ffb;
    height: 200px;
    position: relative;

}

.footerimg{
    width: 100%;
    position: relative;
    BOTTOM: -109px;
}

button.btn{
    border: none;
    border-radius: 9px;
    background-color: #1f1220;
    outline: none;
    height: 82px;
    width: 213px;
    position: relative;
    left: 64%;
    bottom: 218px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
   
    
}
.now{
   font-weight: bold;
    text-decoration: none;
    font-family: 'Spirax';
    color: white;
    font-size: 20px;
    position: absolute;
    top: 10px;
    left: 5%;
}




h5.copy{
    color: #fff;
    position: relative;
    left: 43%;
    font-family: 'Spirax';
    font-size: 18px;
    bottom: -154px;
}


@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

ul {
      display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 48%;
     top: 82px;
}

ul li {
  width: 54px;
    height: 50px;
  background-color: white;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
  top: -17px;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover::before {
  top: 0;
}

/* ca veut dire tu prends le premier enfants de l'élément  */
ul li:nth-child(1) a:before {
  background: #3b5999;
}
ul li:nth-child(2) a:before {
  background: #55acee;
}
ul li:nth-child(3) a:before {
  background: linear-gradient( #dd4b39,  #3978dd,  #a139dd);
}
ul li:nth-child(4) a:before {
  background: #dd4b39;
}
}

@media screen and (min-width: 768px) and (max-width: 1023.99px) {
   .toutfoot{
    margin-top: -109px;
    
}
.footer{
    background-color: #0f080ffb;
    height: 200px;
    position: relative;
    overflow: hidden;
}

.footerimg{
   
    position: relative;
    BOTTOM: -109px;
}

button.btn{
    border: none;
    border-radius: 9px;
    background-color: #1f1220;
    outline: none;
    height: 98px;
    width: 252px;
    position: relative;
    left: 192%;
    bottom: 280px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
   
    
}
.now{
   font-weight: bold;
    text-decoration: none;
    font-family: 'Spirax';
    color: white;
    font-size: 27px;
    position: absolute;
    top: 10px;
    left: 5%;
}




h5.copy{
    color: #fff;
    position: relative;
    left: 43%;
    font-family: 'Spirax';
    font-size: 18px;
    bottom: -154px;
}


@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

ul {
      display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 48%;
     top: 82px;
}

ul li {
  width: 54px;
    height: 50px;
  background-color: white;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
  top: -17px;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover::before {
  top: 0;
}

/* ca veut dire tu prends le premier enfants de l'élément  */
ul li:nth-child(1) a:before {
  background: #3b5999;
}
ul li:nth-child(2) a:before {
  background: #55acee;
}
ul li:nth-child(3) a:before {
  background: linear-gradient( #dd4b39,  #3978dd,  #a139dd);
}
ul li:nth-child(4) a:before {
  background: #dd4b39;
}
}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
  .toutfoot{
    margin-top: -109px;
    
}
.footer{
    background-color: #0f080ffb;
    height: 200px;
    position: relative;
    overflow: hidden;
    width: 281vw;

}

.footerimg{
    width: 281vw;
    position: relative;
    BOTTOM: -109px;
}

button.btn{
    border: none;
    border-radius: 9px;
    background-color: #1f1220;
    outline: none;
    height: 98px;
    width: 252px;
    position: relative;
    left: 192%;
    bottom: 280px;
    border-color: #fff;
    border-left-style: groove;
    border-right-style: groove;
    border-top-style: groove;
    border-bottom-style: groove;
    border-width: 2px;
   
    
}
.now{
   font-weight: bold;
    text-decoration: none;
    font-family: 'Spirax';
    color: white;
    font-size: 27px;
    position: absolute;
    top: 10px;
    left: 5%;
}




h5.copy{
    color: #fff;
    position: relative;
    left: 43%;
    font-family: 'Spirax';
    font-size: 18px;
    bottom: -154px;
}


@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

ul {
      display: flex;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 48%;
     top: 82px;
}

ul li {
  width: 54px;
    height: 50px;
  background-color: white;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  margin: 0 10px;
  display: block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid #fff;
  z-index: 1;
}

ul li a .icon {
  position: relative;
  color: #262626;
  transition: 0.5s;
  z-index: 3;
  top: -17px;
}

ul li a:hover .icon {
  color: #fff;
  transform: rotateY(360deg);
}

ul li a:before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f00;
  transition: 0.5s;
  z-index: 2;
}

ul li a:hover::before {
  top: 0;
}

/* ca veut dire tu prends le premier enfants de l'élément  */
ul li:nth-child(1) a:before {
  background: #3b5999;
}
ul li:nth-child(2) a:before {
  background: #55acee;
}
ul li:nth-child(3) a:before {
  background: linear-gradient( #dd4b39,  #3978dd,  #a139dd);
}
ul li:nth-child(4) a:before {
  background: #dd4b39;
}
}
</style>