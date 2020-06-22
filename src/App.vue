<template>
  <div id="app">
    <Job v-for="job in jobs" :job="job" :key="job.id" />
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

<style lang="scss"></style>
