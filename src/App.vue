<template>
<v-app>
<v-container>
 <nav id="navbar-app" class="nav appnav" >
  <ul class="nav navbar-nav navbar-left">
         <img  class="img-responsive logonav" src="pngegg.png" width="150" >
    </ul>
    <ul class = "navbar-nav ml-auto">
      <p >

        <img  class="img-responsive logonav" src="vertigo.png" width="130" >
      </p>
    </ul>
  </nav>
  </v-container>
    <accueil/>
    <agenda/>
</v-app>
</template>

<script>
import accueil from './components/accueil';
import agenda from './components/agenda';

export default {
  name: 'App',

  components: {
     accueil,
     agenda,
  },

  data: () => ({
    scrollPosition: null
  }),
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
};
</script>
<style >
html{
  scroll-behavior: smooth;
}

.appnav{
  background-color:white
}
</style>