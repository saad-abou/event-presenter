<template>
<v-col align="center" class="accueil">
  <v-card max-width="1000" >
        <v-card-text class="white text--primary">
        <v-container grid-list-xs>
        <v-row >
        <v-col>
        <v-row
            align="end"
            class="fill-height"
          >
            <v-col
              align-self="start"
              class="pa-0"
              cols="12"
            >
                <v-img src="..\assets\chely.jpg" max-width="250"></v-img>
            </v-col>
            <v-col class="py-0">
            <p class="title"><b>Professeur Hassan Chelly</b></p>
            <p class="text" style="color:grey">
            ORL spécialisé en prise en charge de vertigo<br>
            Conférencier International et expert en technique de communication .<br>
               Membre de L'international Working Group on Endoscopic Ear Surcgery<br>(IWGEES)
            </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
        <v-img src="..\assets\Cerveau.jpg" max-width="400"></v-img>
        </v-col>
        </v-row>
        </v-container>
        </v-card-text>
    </v-card>
</v-col>    
</template>
<style>
.title{
  color:black; 
} 
.accueil{
   background-color: #14213d;
}

</style>

