<template>
  <div class="search-form">
    <b-form-input
      placeholder="Search project by name..."
      v-model="search"
      @input="searchProject"
    ></b-form-input>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import { BFormInput } from "bootstrap-vue";

@Component({
  components: { "b-form-input": BFormInput },
})
/** Component for Search. */
export default class SearchData extends Vue {
  /**
   * Data for Input.
   * @param {string} search - The search value.
   */
  private search: string = "";
  /**
   * Search for a Project.
   * @return {array | array[]}. The project/s data
   */
  @Emit()
  searchProject() {
    this.$store.dispatch("searchProject", this.search);
  }
}
</script>

<style lang="sass" scoped>
.search-form
  width: 30%
  display: flex
  justify-content: flex-end

input
  width: 50%
</style>