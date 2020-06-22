<template>
  <div id="app">
    <header></header>
    <main>
      <Job v-for="job in jobs" :job="job" :key="job.id" />
    </main>
  </div>
</template>

<script>
import jobs from "@/jobs.json";
import Job from "@/components/Job";

export default {
  name: "App",
  components: {
    Job
  },
  data() {
    return {
      jobs
    };
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
  background: hsl(180, 52%, 96%);
}
</style>
