<template>
  <div class="job-filters">
    <div class="job-filters__filter" v-for="filter in filters" :key="filter">
      {{ filter }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["filters"]
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
    padding: 0 0.75em;
    line-height: 2.8em;

    &:not(:first-child) {
      margin-left: 1.5em;
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
