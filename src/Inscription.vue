<template>
<v-app>
    <inscription/>
</v-app>
</template>

<script>
import inscription from './components/inscription';

export default {
  name: 'Inscription',

  components: {
     inscription,
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