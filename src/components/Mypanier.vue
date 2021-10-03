<template>
<div class="tou">
  <navnav/>
  <div class="panier">
    <h1>Panier</h1>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Quantite</th>
          <th>Prix</th>
          <th>Soustotal</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in panier" :key="index">
          <!--<td>
            <img 
            :src="require(`@/assets/${item.image}.jpg`)" 
            alt="Product photo"
            />
          </td>-->
          <td>{{ item.produitId }}</td>
          <td class="na">{{ item.nom }}</td>
          <td>
            <input type="button" class="btn1 btn-dark plus" @click="updateqtn(index)" value="-" />
            {{ item.quantite }}
            <input type="button" class="btn1 btn-dark plus" @click="update(index)" value="+" />
          </td>
          <td>{{ item.prix_unitaire }} €</td>
          <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }} €</td>
          <td>
            <button class="btn1 btn-dark btn-block plus" @click="supprimer(index)">
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
        <tr>
          
          <td colspan="7"></td>
          <td class="total">{{ total }}</td>
          <td colspan="2"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-dark btn-block valid" @click="valide">
      Validez<i class="fa fa-check-circle"></i>
    </button>
  </div>
 </div>
</template>

<script>
 import VueJwtDecode from "vue-jwt-decode"; 
import navnav from '../components/navnav.vue'

export default {
  name: "Mypanier",
  components: {
    navnav
  },
  props: ["panier"],
  data() {
    return {};
  },
  computed: {
    total: function () {
      let total = 0;
      for (let el of this.panier) {
        total += el.prix_unitaire * el.quantite;
      }
      return total.toFixed(2);
    },
  },
  methods: {
    update: function (index) {
      this.panier[index].quantite++;
      this.panier[index].soustotal = this.panier[index].quantite * this.panier[index].prix_unitaire;
      console.log(this.panier);
      localStorage.removeItem("panier");
      localStorage.setItem("panier", JSON.stringify(this.panier));
    },
    updateqtn: function (index) {
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite--;
        console.log(this.panier);
        localStorage.removeItem("panier");
        localStorage.setItem("panier", JSON.stringify(this.panier));
      } else {
        this.supprimer(index);
      }
    },
    supprimer: function (index) {
      this.panier.splice(index, 1);
      localStorage.removeItem("panier");
      if (this.panier.length > 0) {
        localStorage.setItem("panier", JSON.stringify(this.panier));
      }
    },
    valide: function () {
       if (localStorage.getItem("token")) {
        var client = VueJwtDecode.decode(localStorage.getItem("token")); 

      var produitId = [];
      var quantiteprix = { prix: "", qtn: "" };
      var prix = [];
      var quantite = [];
      this.panier.forEach((item) => {
        produitId.push(item.produitId);
        quantiteprix.prix = item.prix_unitaire;
        quantiteprix.qtn = item.quantite;
        prix.push(item.prix_unitaire);
        quantite.push(item.quantite);
      });
      this.axios
        .post(`${this.$apiurl}commande/new`, {
          clientId: client.id,
          panier: this.panier,
          produitId: produitId,
          quantite: quantite,
          prix: prix,
          quantiteprix: quantiteprix,
        })
        .then((res) => {
          console.log(res.data);
            this.$router.push({
              name: "paypal",
              params: { total: this.total },
            }); 
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
     } else {
        this.$router.push({ name: "login" });
      } 
    },
  },
};
</script>

<style scoped>

.valid{
  font-size: 30px;
  font-weight: 900;
    font-family: 'Spirax';
    text-align: -webkit-center;
    margin-left: 398px;
    width: 216px !important;
    height: 80px !important;
    border-radius: 6px;
    color: rgb(24, 13, 27);
    background: transparent;
    border-color: rgb(22, 13, 26);
    
}
.plus{
  background-color: rgb(22, 13, 26);
    font-size: 25px;
    border-color: rgb(79, 66, 83);
}
.panier {
  width: 1136px;
    position: relative;
    background: rgba(253, 249, 255, 0.5);
    top: 100px;
    border: 2px solid #b0abb3;
}
.tou{
  width: 100%;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
  background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/L7B5sVx2dn.jpg");
}
.table .thead-dark th {
    color: rgb(23, 14, 26);
    background:transparent;
    width: 50% !important;
    font-size: 25px;
    font-family: 'Galada';
}

.na{
  font-size: 15px  !important;
  font-weight: bold !important;
}
.table {
    width: 107%  !important;
}
.table td {
    padding: 0.55rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
.table td{
  font-size: 20px;
  color: #1e161f;
  
}
.total{
  font-size: 26px;
  color: #1e161f;
  font-weight: 900;
}
h1{
  font-size: 50px;
    font-family: 'Spirax';
    color: #1d0f1dfb;
    text-align: center;
}
</style>