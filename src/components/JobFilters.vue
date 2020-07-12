<template>
  <div class="job-filters">
    <div class="job-filters__filter" v-for="filter in value" :key="filter">
      {{ filter }}
      <div class="job-filters__remove" @click="remove(filter)">
        <img src="@/assets/icon-remove.svg" alt="remove" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    remove(filter) {
      const index = this.value.indexOf(filter);
      this.value.splice(index, 1);

      this.$emit("input", this.value);
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
  border-radius: 0.5em;
  box-shadow: 0 10px 30px rgba(91, 164, 164, 0.3);

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

    &:not(:first-child) {
      margin-left: 1.5em;
    }
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
}

@media all and (max-width: 1000px) {
  .job-filters {
    max-width: 500px;
    margin: 1.5em;
  }
}
</style>
