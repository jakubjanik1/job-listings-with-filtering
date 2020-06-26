<template>
  <div class="job">
    <img class="job__logo" :src="job.logo" alt="job logo" />

    <div class="job__info">
      <div class="job__company">{{ job.company }}</div>
      <div class="job__position">{{ job.position }}</div>

      <div class="job__additional-info">
        <div class="job__date">{{ job.postedAt }}</div>
        <div class="job__contract">{{ job.contract }}</div>
        <div class="job__location">{{ job.location }}</div>
      </div>
    </div>

    <div class="job__filters" @click="filterJobs">
      <div class="job__role">{{ job.role }}</div>
      <div class="job__level">{{ job.level }}</div>

      <div
        class="job__languages"
        v-for="language in job.languages"
        :key="language"
      >
        {{ language }}
      </div>

      <div class="job__tools" v-for="tool in job.tools" :key="tool">
        {{ tool }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["job"],
  methods: {
    filterJobs({ target }) {
      if (target.classList.contains("job__filters")) return;

      const field = target.className.slice(5);
      const value = target.textContent.trim();

      this.$emit("filterJobs", { field, value });
    }
  }
};
</script>

<style lang="scss" scoped>
.job {
  width: 1000px;
  display: flex;
  padding: 2em;
  margin: 1em;
  background: #fff;
  box-shadow: 0 10px 30px rgba(91, 164, 164, 0.3);

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2em;
  }

  &__company {
    font-weight: 700;
    color: hsl(180, 29%, 50%);
  }

  &__position {
    color: hsl(180, 14%, 20%);
    font-weight: 700;
  }

  &__additional-info {
    display: flex;
    color: hsl(180, 8%, 52%);
    font-weight: 500;

    & * + *::before {
      content: "\00a0\00a0\00a0•\00a0\00a0\00a0";
    }
  }

  &__filters {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
  }

  &__role,
  &__level,
  &__languages,
  &__tools {
    line-height: 2.3em;
    height: 2em;
    padding: 0 0.5em;
    margin-left: 1em;
    border-radius: 0.5em;
    background: hsl(180, 31%, 95%);
    color: #5ba4a4;
    font-weight: 700;
    font-size: 0.9em;
  }
}
</style>
