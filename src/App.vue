<template>
  <div id="app">
    <JobFilters v-show="filters.length" :filters="filters" />
    <Job v-for="job in jobs" :job="job" :key="job.id" @filter="filterJobs" />
  </div>
</template>

<script>
import allJobs from "@/jobs.json";
import Job from "@/components/Job";
import JobFilters from "@/components/JobFilters";

export default {
  name: "App",
  components: {
    Job,
    JobFilters
  },
  data() {
    return {
      jobs: allJobs,
      filters: []
    };
  },
  methods: {
    filterJobs(filter) {
      this.jobs = this.jobs.filter(job =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
      );

      this.filters.push(filter);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

body {
  margin: 0;
  font-size: 15px;
  font-family: "Spartan", sans-serif;
  background: url("assets/bg-header-desktop.svg") hsl(180, 52%, 96%) no-repeat;
  background-size: 100% 156px;
  padding-top: 156px;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;
}

@media (max-width: 1000px) {
  main {
    padding: 2em 1.5em;
  }
}

@media (max-width: 800px) {
  body {
    background-image: url("assets/bg-header-mobile.svg");
  }
}
</style>
