<template>
  <div class="create-form">
    <b-form-input placeholder="Project name" v-model="name"></b-form-input>
    <b-form-input
      placeholder="Project description"
      v-model="description"
    ></b-form-input>
    <!-- <input
      type="text"
      class="base-inpit"
      placeholder="Project name"
      v-model="name"
    />
    <input
      type="text"
      class="base-inpit"
      placeholder="Project description"
      v-model="description"
    /> -->
    <b-button variant="primary" @click="createProject">Create project</b-button>
  </div>
</template>

<script lang="ts">
import { BFormInput, BButton } from "bootstrap-vue";
import { Vue, Component, Emit } from "vue-property-decorator";

@Component({
  components: { "b-button": BButton, "b-form-input": BFormInput },
})
/** Component for creating s Project. */
export default class CreateData extends Vue {
  /**
   * Inputs data.
   * @param {string} name - The name value.
   * @param {string} description - The description value.
   */
  private name: string = "";
  private description: string = "";
  /**
   * Function for create a Project.
   * @return {void} The value.
   */
  @Emit()
  createProject(): void {
    const projectData = {
      name: this.name,
      description: this.description,
    };
    this.$store.dispatch("createProject", projectData);
  }
}
</script>

<style lang="sass">
.create-form
  width: 60%
  display: flex
  justify-content: space-between

  .btn-primary
    min-width: 150px
  .form-control
    margin-right: 1rem
</style>