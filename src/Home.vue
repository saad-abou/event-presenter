<template>
<v-app>
    <accueil/>
    <agenda/>
</v-app>
</template>

<script>
import accueil from './components/accueil';
import agenda from './components/agenda';

export default {
  name: 'Home',

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


</style>