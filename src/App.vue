<template>
  <div id="app">
    <Header />
    <Navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/shared/Header/Header.vue";
import Navigation from "@/components/shared/Navigation/Navigation.vue";

@Component({
  components: { Header, Navigation },
})
export default class App extends Vue {}
</script>


<style lang="sass">
@import '@/scss/main.scss';

*
  margin: 0
  padding: 0

a 
  text-decoration: none 

.container
  max-width: 1440px
  margin: 0 auto  
</style>
