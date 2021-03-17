<template>
  <b-card
    :header="data.name"
    header-text-variant="dark"
    header-tag="header"
    header-bg-variant="Secondary"
    style="width: 31.5%"
  >
    <b-card-text>{{ data.description }}</b-card-text>
    <template #footer>
      <span @click="deleteData(data.name)"> Delete project </span></template
    >
  </b-card>
</template>

<script lang="ts" >
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { BCard, BCardText } from "bootstrap-vue";

@Component({
  components: {
    "b-card": BCard,
    "b-card-text": BCardText,
  },
})
/** Component for a SingleProject. */
export default class Project extends Vue {
  /**
   * Get the data value.
   * @return {object} The data value.
   */
  @Prop(Object) readonly data: object | undefined;
  /**
   * Delete a Project.
   * @return {void}.
   */
  @Emit()
  deleteData(name: string) {
    this.$store.dispatch("deleteData", name);
  }
}
</script>

<style lang="sass" scoped>
.card
  margin-bottom: 25px
.card-footer
  span
    color: crimson
  span:hover
    cursor: pointer
</style>