<template>
  <div id="app">
    <header></header>
    <main>
      <Job
        v-for="job in jobs"
        :job="job"
        :key="job.id"
        @filterJobs="filterJobs"
      />
    </main>
  </div>
</template>

<script>
import allJobs from "@/jobs.json";
import Job from "@/components/Job";

export default {
  name: "App",
  components: {
    Job
  },
  data() {
    return {
      jobs: allJobs
    };
  },
  methods: {
    filterJobs({ field, value }) {
      this.jobs = this.jobs.filter(job => job[field].includes(value));
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
}

header {
  height: 156px;
  background: url("assets/bg-header-desktop.svg") hsl(180, 29%, 50%) no-repeat;
  background-size: cover;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 2em;
  background: hsl(180, 52%, 96%);
}

@media all and (max-width: 1000px) {
  main {
    padding: 2em 1em;
  }
}
</style>
