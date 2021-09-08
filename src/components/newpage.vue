<template>
<div>
<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="img-responsive" src="../assets/imgprestafemmnoirblonde.jpg" alt="" height="300">
        <div class="overlay">
           <h2>Coiffure Femme</h2>
           
        </div>
    </div>

     <div class="hovereffect">
        <img class="img-responsive" src="../assets/image_homme.jpg" alt="" height="300">
        <div class="overlay">
           <h2>Coupe Et Soin Barbe</h2>
           
        </div>
    </div>

     <div class="hovereffect">
        <img class="img-responsive" src="../assets/image_enfant.jpg" alt="" height="300">
        <div class="overlay">
           <h2>Coupe Enfant</h2>
           
        </div>
    </div>

     <div class="hovereffect">
        <img class="img-responsive" src="../assets/LEBEAU.jpg" alt="" height="300">
        <div class="overlay">
           <h2>Coupe Cheveux Homme</h2>
          
        </div>
    </div>
</div>
</div>
</template>

<script>
  
  export default {
    
  };
</script>

<style scoped>
.hovereffect {
  margin-right: 18px;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  box-shadow: 5px -8px 2px 1px #211322f6;
}
.col-lg-3 {
  display: -webkit-inline-box;
    margin-top: -37px;
    margin-left: 18px; 
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  background-color: rgba(0,0,0,0.5);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  width: 335px;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0,0,0,0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  padding: 10px;
  top: 90px;
}


.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}


/** 
@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  .hovereffect {
  margin-right: 18px;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  box-shadow: 5px -8px 2px 1px #211322f6;
}
.col-lg-3 {
  display: -webkit-inline-box;
    margin-top: -37px;
    margin-left: 18px;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  background-color: rgba(0,0,0,0.5);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  width: 335px;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0,0,0,0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  padding: 10px;
  top: 90px;
}


.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

}

@media screen and (min-width: 768px) and (max-width: 1023.99px) {
  .hovereffect {
  margin-right: 18px;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  box-shadow: 5px -8px 2px 1px #211322f6;
}
.col-lg-3 {
  display: -webkit-inline-box;
    margin-top: -37px;
    margin-left: 190px;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  background-color: rgba(0,0,0,0.5);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  width: 242px;
    HEIGHT: 200px;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0,0,0,0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  padding: 10px;
  top: 90px;
}


.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
  .hovereffect {
  margin-right: 18px;
  width: 43%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  box-shadow: 5px -8px 2px 1px #211322f6;
}
.col-lg-3 {
  display: -webkit-inline-box;
    margin-top: -37px;
    margin-left: 156px;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  background-color: rgba(0,0,0,0.5);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
 width: 228px;
    HEIGHT: 194px;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  background: rgba(0,0,0,0.6);
  -webkit-transform: translatey(-100px);
  -ms-transform: translatey(-100px);
  transform: translatey(-100px);
  -webkit-transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88,-0.99, 0, 1.81);
  padding: 10px;
  top: 90px;
}


.hovereffect:hover img {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -ms-transform: translatey(0);
  -webkit-transform: translatey(0);
  transform: translatey(0);
}

}*/

</style>