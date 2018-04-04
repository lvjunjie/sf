<template>
  <div id="app">
    <!--顶部-->
    <top-nav></top-nav>
    <!--中部-->
    <transition >
      <router-view/>
    </transition>

    <!--底部-->
    <bottom-info></bottom-info>

    <login></login>
  </div>
</template>

<script>
  import TopNav from "./components/topNav";
  import BottomInfo from "./components/bottomInfo";
  import Login from "./components/login";

  export default {
    components: {
      Login,
      TopNav,BottomInfo},
    name: 'App'
  }
</script>

<style scoped>

  #app {
    padding-top: 48px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
