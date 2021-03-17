<template>
  <div class="homepage container">
    <div class="form-container">
      <CreateData />
      <SearchData />
    </div>
    <div class="data-container">
      <Project v-for="(todo, index) in projects" :key="index" :data="todo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Project from "../../shared/Project/Project.vue";
import SearchData from "../../shared/SearchData/SearchData.vue";
import CreateData from "../../shared/CreateData/CreateData.vue";

@Component({
  components: { Project, SearchData, CreateData },
  /**
   * Get the all Projects.
   * @return {Array}.
   */
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
})
/** Class representing a Home page. */
export default class Home extends Vue {
  protected projects!: [];
}
</script>

<style lang="sass" scoped>
.form-container,
.data-container
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.form-container
  margin-bottom: 40px
</style>