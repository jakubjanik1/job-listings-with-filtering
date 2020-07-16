<template>
  <div class="job-listing">
    <JobFilters v-show="filters.length" :filters="filters" />
    <Job v-for="job in jobs" :job="job" :key="job.id" @filter="filterJobs" />
  </div>
</template>

<script>
import allJobs from "@/jobs.json";
import Job from "@/components/Job";
import JobFilters from "@/components/JobFilters";

export default {
  name: "JobListing",
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
      if (this.filters.includes(filter)) return;
      this.filters.push(filter);
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(newFilters) {
        this.jobs = allJobs.filter(job =>
          newFilters.every(filter =>
            [job.role, job.level, ...job.languages, ...job.tools].includes(
              filter
            )
          )
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.job-listing {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 2em;

  @media (max-width: 1000px) {
    padding: 2em 1.5em;
  }
}
</style>
