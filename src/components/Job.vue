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

      <div class="job__additional-info">
        <div class="job__date">{{ job.postedAt }}</div>

        <div class="job__contract">{{ job.contract }}</div>

        <div class="job__location">{{ job.location }}</div>
      </div>
    </div>

    <div class="job__line"></div>

    <div class="job__filters" @click="emitFilter">
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
    emitFilter({ target }) {
      if (target.classList.contains("job__filters")) return;

      this.$emit("filter", target.textContent.trim());
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
  margin: 0.9em;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 10px 30px rgba(91, 164, 164, 0.3);
  border-radius: 0.5em;
  position: relative;

  &--featured::before {
    content: "";
    height: 100%;
    width: 4px;
    background: hsl(180, 29%, 50%);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5em 0 0 0.5em;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2em;

    & > * {
      display: flex;
      align-items: center;
    }
  }

  &__company {
    font-weight: 700;
    color: hsl(180, 29%, 50%);
  }

  &__new,
  &__featured {
    border-radius: 1em;
    font-weight: 700;
    font-size: 0.7em;
    padding: 0.65em;
    height: 0.85em;
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
    font-size: 1.15em;
    transition: color 300ms;

    &:hover {
      color: hsl(180, 29%, 50%);
      cursor: pointer;
    }
  }

  &__additional-info {
    color: hsl(180, 8%, 52%);
    font-weight: 500;
    display: flex;
    margin: 0;
  }

  &__contract,
  &__location {
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "\00a0\00a0•\00a0\00a0";
      color: lighten(hsl(180, 8%, 52%), 13%);
      font-size: 1.5em;
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
    transition: background 300ms, color 300ms;

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
    max-width: 500px;
    margin: 1.5em;

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
      margin: 1em 0;
      border-top: 1px solid hsl(180, 8%, 52%);
    }

    &__filters {
      display: flex;
      flex-wrap: wrap;
      justify-content: unset;
      margin-left: -1em;
      margin-top: -1em;
      height: 5em;

      & > * {
        margin-top: 1em;
      }
    }
  }
}
</style>
