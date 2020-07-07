<template>
  <div class="job" :class="{ 'job--featured': job.featured }">
    <img class="job__logo" :src="job.logo" alt="job logo" />

    <div class="job__info">
      <div>
        <div class="job__company">{{ job.company }}</div>
        <div class="job__new" v-show="job.new">NEW!</div>
        <div class="job__featured" v-show="job.featured">FEATURED</div>
      </div>

      <div class="job__position">{{ job.position }}</div>

      <div>
        <div class="job__date">{{ job.postedAt }}</div>
        <div class="job__contract">{{ job.contract }}</div>
        <div class="job__location">{{ job.location }}</div>
      </div>
    </div>

    <div class="job__line"></div>

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
$logo-size: 88px;

.job {
  width: 100%;
  max-width: 1125px;
  display: flex;
  padding: 2em;
  margin: 1em;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 10px 30px rgba(91, 164, 164, 0.3);
  border-radius: 0.5em;

  &--featured {
    border-left: 4px solid hsl(180, 29%, 50%);
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2em;

    & > * {
      display: flex;
      align-items: center;
    }
  }

  &__company {
    font-weight: 700;
    font-size: 0.9em;
    color: hsl(180, 29%, 50%);
  }

  &__new,
  &__featured {
    border-radius: 1em;
    font-weight: 700;
    font-size: 0.75em;
    padding: 0.6em;
    height: 1em;
  }

  &__new {
    background: hsl(180, 29%, 50%);
    color: hsl(180, 31%, 95%);
    margin-left: 1.5em;
  }

  &__featured {
    background: hsl(180, 14%, 20%);
    color: hsl(180, 31%, 95%);
    margin-left: 1em;
  }

  &__position {
    color: hsl(180, 14%, 20%);
    font-weight: 700;
    font-size: 1.1em;
    transition: all 0.5s;

    &:hover {
      color: hsl(180, 29%, 50%);
      cursor: pointer;
    }
  }

  &__date,
  &__contract,
  &__location {
    color: hsl(180, 8%, 52%);
    font-weight: 500;
  }

  &__contract,
  &__location {
    &::before {
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
    margin-left: 1em;
    border-radius: 0.5em;
    background: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    font-size: 0.9em;
    height: 2.5em;
    padding: 0 0.75em;
    line-height: 2.8em;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      background: hsl(180, 29%, 50%);
      color: hsl(180, 31%, 95%);
    }
  }
}

@media all and (max-width: 1000px) {
  .job {
    flex-direction: column;
    position: relative;

    &__logo {
      width: $logo-size / 2;
      height: $logo-size / 2;
      position: absolute;
      top: -($logo-size / 4);
    }

    &__info {
      padding-left: 0;
      height: 7em;
    }

    &__line {
      height: 1px;
      width: 100%;
      background: hsl(180, 8%, 52%);
      margin: 1em 0;
    }

    &__filters {
      display: flex;
      flex-wrap: wrap;
      justify-content: unset;
    }
  }
}
</style>
