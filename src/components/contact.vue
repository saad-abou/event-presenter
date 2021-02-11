<template>
    <v-container class="propo" grid-list-xs fluid>
    <v-row>
    <v-col align="center">
    <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-envelope</v-icon>CONTACT</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row class="mt-10">
    <v-col class="inscrireInfo" align="center">
    <p><v-icon color="green" class="mr-1">fab fa-whatsapp</v-icon>Numéro WhatsApp  : <b style="color:green">+216 29 884 259</b></p>
    <p><v-icon color="green" class="mr-1">fas fa-paper-plane</v-icon>Adresse e-mail : <b style="color:green">pm5@millesima-events.com</b></p>
    </v-col>
    </v-row>
    <v-row class="footer" >
    <v-col align="center" class="mt-5">
    <p>© Copyright 2021 <b style="color:green">ASCREA</b></p>
    <img  class="img-responsive ascreaLogo" src="..\assets\unnamed.png" width="50" >
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style> 

@media (max-width: 480px) {
 .inscrireInfo{
    font-size:1em
}
.ascreaLogo{
    width:50px
}
  
}
.footer{
    color:black;
    margin-top:100px;
    height:150px
}

</style>