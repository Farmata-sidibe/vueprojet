<template>
<div class="tout">
  <div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">S'inscrire</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Que Souhaitez-Vous
    </template>
    <div class="d-block text-center">

      <div class="on">
      <h3 class="he">Pour les coiffeurs</h3>
      <p class="pe">Vous-êtes coiffeur, vous possédez un salon ou vous exercez à domicile. 
        inscrivez-vous pour mieux developper votre activité
      </p>
      </div>

      <div class="of">
      <h3 class="he">Pour les client </h3>
      <p class="pe">inscrivez vous pour accéder a l'ensemble de notre  plateforme pour vos réservation rendez-vous en ligne</p>
    </div>

    </div>
    <a href="/registerCoiffeur"><b-button class="mt-3 dis" block @click="$bvModal.hide('bv-modal-example')">Ajouter</b-button></a>
    <a href="/registerClient"><b-button class="mt-3 dos" block @click="$bvModal.hide('bv-modal-example')">S'inscrire</b-button></a>
  </b-modal>
</div>
  </div>
</template>

<script>


export default {
  name: 'search',
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@media screen and (min-width: 1280px) {
  .pe{
  font-size: 27px;
  font-family: 'Bodini MT';
  font-style: italic;
  font-weight: bold;
  color:  #1d101dfb;
  display: table-caption;
    width: 197%;
    position: absolute;
    margin-left: -90px;
}
.on{
  position: absolute;
    left: 11%;
}
.of{
  position: absolute;
    left: 67%;
}
.modal-content {
    height: 114vh;
    position: relative;
    display: flex;
    flex-direction: column;
   width: 226% !important;
    left: -65%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 48px;
    font-family: 'Spirax';
    font-weight: bold;
    color: #1d101dfb;
    margin-left: 247px;
}
.he{
  font-size: 34px;
  font-family: 'Bodini MT';
  font-weight: bold;
  text-decoration-line: underline;
  color:  #1d101dfb;
}
.modal-header .close {
    padding: 0rem 0rem;
    margin: -1rem -1rem -1rem auto;
    display: none;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 337px;
    font-size: 31px;
}
.dos{
  position: absolute;
    left: 60%;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;
}
.dis{
  position: absolute;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;

}

#show-btn {
  border: none !important;
    border-radius: 15px !important;
    background-color: #1f1220 !important;
    color: white !important;
   font-size: 22px !important;
    outline: none !important;
    height: 47px !important;
    padding: 0;
    width: 135px !important;
    font-weight: bold !important;
    position: absolute !important;
    top: 364px !important;
    left: 702px !important;
    border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove !important;
    border-right-style: groove !important;
    border-top-style: groove !important;
    border-bottom-style: groove !important;
    border-width: 2px !important;
    font-family: 'Spirax' !important;
    text-transform: initial !important;
}
}

@media screen and (min-width: 1024px) and (max-width: 1279.99px) {
  .pe{
  font-size: 27px;
  font-family: 'Bodini MT';
  font-style: italic;
  font-weight: bold;
  color:  #1d101dfb;
  display: table-caption;
    width: 197%;
    position: absolute;
    margin-left: -90px;
}
.on{
  position: absolute;
    left: 11%;
}
.of{
  position: absolute;
    left: 67%;
}
.modal-content {
    height: 114vh;
    position: relative;
    display: flex;
    flex-direction: column;
   width: 226% !important;
    left: -65%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 48px;
    font-family: 'Spirax';
    font-weight: bold;
    color: #1d101dfb;
    margin-left: 247px;
}
.he{
  font-size: 34px;
  font-family: 'Bodini MT';
  font-weight: bold;
  text-decoration-line: underline;
  color:  #1d101dfb;
}
.modal-header .close {
    padding: 0rem 0rem;
    margin: -1rem -1rem -1rem auto;
    display: none;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 337px;
    font-size: 31px;
}
.dos{
  position: absolute;
    left: 60%;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;
}
.dis{
  position: absolute;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;

}

#show-btn {
  border: none !important;
    border-radius: 15px !important;
    background-color: #1f1220 !important;
    color: white !important;
   font-size: 22px !important;
    outline: none !important;
    height: 47px !important;
    padding: 0;
    width: 135px !important;
    font-weight: bold !important;
    position: absolute !important;
    top: 364px !important;
    left: 550px !important;
    border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove !important;
    border-right-style: groove !important;
    border-top-style: groove !important;
    border-bottom-style: groove !important;
    border-width: 2px !important;
    font-family: 'Spirax' !important;
    text-transform: initial !important;
}
}

@media screen and (min-width: 768px) and (max-width: 1023.99px) {
  .pe{
  font-size: 27px;
  font-family: 'Bodini MT';
  font-style: italic;
  font-weight: bold;
  color:  #1d101dfb;
  display: table-caption;
    width: 197%;
    position: absolute;
    margin-left: -90px;
}
.on{
  position: absolute;
    left: 11%;
}
.of{
  position: absolute;
    left: 67%;
}
.modal-content {
    height: 114vh;
    position: relative;
    display: flex;
    flex-direction: column;
   width: 226% !important;
    left: -65%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 48px;
    font-family: 'Spirax';
    font-weight: bold;
    color: #1d101dfb;
    margin-left: 247px;
}
.he{
  font-size: 34px;
  font-family: 'Bodini MT';
  font-weight: bold;
  text-decoration-line: underline;
  color:  #1d101dfb;
}
.modal-header .close {
    padding: 0rem 0rem;
    margin: -1rem -1rem -1rem auto;
    display: none;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 337px;
    font-size: 31px;
}
.dos{
  position: absolute;
    left: 60%;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;
}
.dis{
  position: absolute;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;

}

#show-btn {
  border: none !important;
    border-radius: 15px !important;
    background-color: #1f1220 !important;
    color: white !important;
   font-size: 22px !important;
    outline: none !important;
    height: 47px !important;
    padding: 0;
    width: 135px !important;
    font-weight: bold !important;
    position: absolute !important;
    top: 693px !important;
    left: 177px !important;
    border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove !important;
    border-right-style: groove !important;
    border-top-style: groove !important;
    border-bottom-style: groove !important;
    border-width: 2px !important;
    font-family: 'Spirax' !important;
    text-transform: initial !important;
}
}

@media screen and (min-width: 480px) and (max-width: 767.99px) {
  .pe{
  font-size: 27px;
  font-family: 'Bodini MT';
  font-style: italic;
  font-weight: bold;
  color:  #1d101dfb;
  display: table-caption;
    width: 197%;
    position: absolute;
    margin-left: -90px;
}
.on{
  position: absolute;
    left: 11%;
}
.of{
  position: absolute;
    left: 67%;
}
.modal-content {
    height: 114vh;
    position: relative;
    display: flex;
    flex-direction: column;
   width: 226% !important;
    left: -65%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 48px;
    font-family: 'Spirax';
    font-weight: bold;
    color: #1d101dfb;
    margin-left: 247px;
}
.he{
  font-size: 34px;
  font-family: 'Bodini MT';
  font-weight: bold;
  text-decoration-line: underline;
  color:  #1d101dfb;
}
.modal-header .close {
    padding: 0rem 0rem;
    margin: -1rem -1rem -1rem auto;
    display: none;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    width: 337px;
    font-size: 31px;
}
.dos{
  position: absolute;
    left: 60%;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;
}
.dis{
  position: absolute;
    cursor: pointer;
    width: 254px;
    font-size: 36px;
    margin-left: 58px;
    top: 244px;
    background-color:  #1f111ffb !important;
    box-shadow: 1px 2px 27px #1d101dfb;
    font-family: 'Bodini MT';
  font-weight: 400;
  font-style: italic;

}

#show-btn {
  border: none !important;
    border-radius: 15px !important;
    background-color: #1f1220 !important;
    color: white !important;
   font-size: 22px !important;
    outline: none !important;
    height: 47px !important;
    padding: 0;
    width: 135px !important;
    font-weight: bold !important;
    position: absolute !important;
    top: 654px !important;
    left: 171px !important;
    border-color: #1f1220 !important;
    box-shadow: 0px 2px 9px 3px #2b1e2c !important;
    border-left-style: groove !important;
    border-right-style: groove !important;
    border-top-style: groove !important;
    border-bottom-style: groove !important;
    border-width: 2px !important;
    font-family: 'Spirax' !important;
    text-transform: initial !important;
}
}


</style>