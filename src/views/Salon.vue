<template>
  <div>
   <form  class="barre">
        <div class="barreUn">

      <input type="search" name="recherche" placeholder="Tape le nom d'un salon d'une ville"  v-model="search" id="recherche" >
      <button type="submit" class="btn-submit"><i class="fas fa-search"></i></button>
        </div>
      
        
        
        </form>

    <listeSalon :salons="salons" :benj="filteredList" />
  </div>
</template>
<script>
import listeSalon from "../components/listeSalon.vue";


export default {
  name: "Salon",
  components: {
    listeSalon,
   
  },
  data() {
    return {
      salons: {},
      search: '',
      benj:[],
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/salon/all")
      .then((res) => {
      console.log(res);
        this.salons = res.data.salons;
      })
      .catch((err) => {
        alert(err);
      });
  },
  computed: {
    filteredList() {
        if(this.search != ''){
      return this.salons.filter(item => {
        return item.ville.toLowerCase().includes(this.search.toLowerCase())
      })
        }
        else{
            return null;
        }
    }
  },
};
</script>

<style scoped>
.btn-submit{
  width: 58px;
    height: 51px;
    background-color: rgb(19, 6, 24);
    border-radius: 6px;
    border: groove;
    border-color: rgb(28, 12, 31);
    margin-top: 51px;
    margin-left: -60px;
    position: absolute;
}
.fa-search{
  width: 22px;
  color: rgb(241, 237, 243);
  color: rgb(241, 237, 243);
  font-size: 29px;
  position: absolute;
  margin-top: -13px;
  margin-left: -13px;
}
#recherche{
  background: rgb(248, 248, 248);
    border: groove;
    border-color: rgb(53, 40, 54);
    width: 703px;
    height: 51px;
    font-size: 20px;
    padding-left: 32px;
    font-family: 'Bodini MT';
    color: rgb(48, 39, 53);
    border-radius: 6px;
    margin-left: 279px;
}
</style>
