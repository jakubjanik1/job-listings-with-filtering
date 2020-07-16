<template>
  <div id="app">
    <JobListing />
  </div>
</template>

<script>
import JobListing from "@/components/JobListing";

export default {
  name: "App",
  components: {
    JobListing
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

  @media (max-width: 800px) {
    background-image: url("assets/bg-header-mobile.svg");
  }
}
</style>
