<template>
  <div class="job-filters">
    <div class="job-filters__filters">
      <div class="job-filters__filter" v-for="filter in filters" :key="filter">
        {{ filter }}
        <div class="job-filters__remove" @click="remove(filter)">
          <img src="@/assets/icon-remove.svg" alt="remove" />
        </div>
      </div>
    </div>
    <div class="job-filters__clear" @click="clear">Clear</div>
  </div>
</template>

<script>
export default {
  name: "JobFilters",
  props: ["filters"],
  methods: {
    remove(filter) {
      const index = this.filters.indexOf(filter);
      this.filters.splice(index, 1);
    },
    clear() {
      this.filters.splice(0);
    }
  }
};
</script>

<style lang="scss" scoped>
.job-filters {
  width: 100%;
  max-width: 1125px;
  background: #fff;
  margin-top: calc(-4em - 39px);
  margin-bottom: 2em;
  padding: 1.5em 3em;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 0.5em;
  box-shadow: 0 10px 30px rgba(91, 164, 164, 0.3);

  &__filters {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1.5em;
    margin-top: -1.5em;
  }

  &__filter {
    border-radius: 0.5em;
    background: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    font-size: 0.9em;
    height: 2.5em;
    padding-left: 0.75em;
    line-height: 2.8em;
    display: flex;
    margin-left: 1.5em;
    margin-top: 1.5em;
  }

  &__remove {
    padding: 0 0.75em;
    background-color: hsl(180, 29%, 50%);
    color: #fff;
    border-radius: 0 0.5em 0.5em 0;
    margin-left: 0.75em;
    display: flex;
    align-items: center;
    transition: background-color 300ms;

    &:hover {
      background-color: hsl(180, 14%, 20%);
      cursor: pointer;
    }
  }

  &__clear {
    color: hsl(180, 8%, 52%);
    font-weight: 700;
    margin-left: auto;
    padding-left: 2em;
    transition: color 300ms;
    font-size: 0.9em;

    &:hover {
      color: hsl(180, 29%, 50%);
      text-decoration: underline;
      text-decoration-thickness: 2px;
      cursor: pointer;
    }
  }
}

@media all and (max-width: 1000px) {
  .job-filters {
    max-width: 500px;
    padding: 2em;
  }
}
</style>
