<template>
<v-col class="agenda">
    <v-container class="d-non">
    <v-row>
    <v-col align="center">
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row>
    <v-col align="center">
    <template>
    <v-card class="rounded-lg">
       <v-card color="#fca311" class="rounded-lg">
            <v-card-title class="title" style="text-align:center">
            <v-col class="py-0">
            <p class="title" style="color:#019CA0"><b><h3>Module 1</h3></b></p>
            <p class="text">
            Histoires de Vertiges :
            bien comprendre pour mieux interroger !
            </p>
            </v-col>
            </v-card-title>
            <v-card-text class="white text--primary">
            <v-row >
            <v-col>
            <div class="video">
           <!-- <iframe class="responsive-iframe" src="https://www.youtube.com/embed/x2PQXORoKBM"></iframe> -->
            </div>
            </v-col>
            </v-row>
            </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card color="#fca311" class="rounded-lg">
            <v-card-title class="title" style="text-align:center">
            <v-col class="py-0">
            <p class="title" style="color:#019CA0"><b><h3>Module 2</h3></b></p>
            <p class="text">
            Histoires de Vertiges :
            Savoir écouter pour mieux diagnostique !
            </p>
            </v-col>
            </v-card-title>
            <v-card-text class="white text--primary">
            <v-row >
            <v-col align="center">
            <div class="video">
           <!-- <iframe class="responsive-iframe" src="https://www.youtube.com/embed/vczYAINdTDw"></iframe> -->
            </div>
            </v-col>
            </v-row>
            </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card color="#fca311" class="rounded-lg">
            <v-card-title class="title" style="text-align:center">
            <v-col class="py-0">
            <p class="title" style="color:#019CA0"><b><h3>Module 3</h3></b></p>
            <p class="text">
            Histoires de Vertiges :
            comment examiner et faire la synthése !
            </p>
            </v-col>               
            </v-card-title>
            <v-card-text class="white text--primary">
            <v-row >
            <v-col align="center">
            <div class="video">
           <!-- <iframe class="responsive-iframe" src="https://www.youtube.com/embed/WXkV__9BL7U"></iframe> -->
            </div>
            </v-col>
            </v-row>
            </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card color="#fca311" class="rounded-lg">
            <v-card-title class="title" style="text-align:center">
            <v-col class="py-0">
            <p class="title" style="color:#019CA0"><b><h3>Module 4</h3></b></p>
            <p class="text">
            Histoires de Vertiges :
            Traitement des vertigineux, entre recommandation et pratique courante.
            </p>
            </v-col> 
            </v-card-title>
            <v-card-text class="white text--primary">
            <v-row >
            <v-col align="center">
            <div class="video">
          <!--  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/phITxIOPark"></iframe> -->
            </div>
            </v-col>
            </v-row>
            </v-card-text>
        </v-card>
    </v-card>
    </template>
    </v-col>
    </v-row>
    </v-container>
</v-col>    
</template>
<script>
export default {
    
}
</script>
<style>
.title{
      word-break: keep-all;
 } 
.agenda{
   background-color: #14213d;
}
.video {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.rounded-card{
    border-radius:50px;
}
</style>