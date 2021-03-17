<template>
  <b-navbar class="container">
    <b-navbar-nav>
      <b-nav-item
        ><router-link :to="{ name: 'Home' }">Homepage</router-link></b-nav-item
      >
      <b-nav-item>
        <router-link :to="{ name: 'About' }">About</router-link></b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
/** Main navigation. */
export default class Navigation extends Vue {}
</script>



