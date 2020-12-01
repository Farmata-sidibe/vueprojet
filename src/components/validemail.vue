<template>
    <div>
        <input type="email" name="email" id="email" v-model="email"  placeholder=" |saisissez votre email">
        <button @click="validemail" value="test"> </button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            email: "",
        };
    },
    name: "validemail",
    //add method
    method: {
        validemail: function(){
            this.axios.post("http:localhost:3000/client/validemail",{email:this.client.email,
            })
            .then((result) => {
                alert(result);
            })
            .catch((err)=>{
                alert(err);
            });
        },
    },
};
</script>

<style scoped>

</style>