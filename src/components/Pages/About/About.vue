<template>
  <div class="about-page container">
    <b-card
      header="About"
      header-text-variant="dark"
      header-tag="header"
      header-bg-variant="Secondary"
      style="width: 100%"
    >
      <b-card-text
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi est
        pariatur soluta. Ex obcaecati suscipit nesciunt eligendi ea aperiam
        velit sunt voluptas pariatur, consectetur omnis quisquam, necessitatibus
        vel excepturi. Voluptates?</b-card-text
      >
    </b-card>
  </div>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";
import { BCard, BCardText } from "bootstrap-vue";

@Component({
  components: {
    "b-card": BCard,
    "b-card-text": BCardText,
  },
})
/** Class representing a About page. */
export default class About extends Vue {}
</script>
