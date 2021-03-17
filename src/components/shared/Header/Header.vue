<template>
  <div class="header">
    <div class="container">
      <h1>My Portfolio</h1>
      <p>Welcome to my site</p>
    </div>
  </div>
</template>

 <script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
/** Class representing a Header. */
export default class CreateData extends Vue {
  created() {
    /**
     * Get all Projects.
     * @return {Array}.
     */
    this.$store.dispatch("getData");
  }
}
</script>

<style lang="sass" scoped>
.header
  min-height: 80px
  background-color: #ccc
  padding: 20px

  h1
    margin-bottom: .5rem
</style>