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
<router-view></router-view>
</v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style >
.appnav{
  background-color:white
}
</style>