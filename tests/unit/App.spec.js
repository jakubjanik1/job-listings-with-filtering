import { shallowMount } from "@vue/test-utils";
import App from "@/App";
import jobsMock from "@/jobs.json";

describe("<App />", () => {
  let wrapper, jobs;

  beforeEach(() => {
    wrapper = shallowMount(App);
    jobs = wrapper.findAllComponents({ name: "Job" });
  });

  it("should render all jobs components", () => {
    expect(jobs.length).toBe(jobsMock.length);
    expect(jobs.at(0).props("job")).toStrictEqual(jobsMock[0]);
  });

  it('should filter jobs when "filterJobs" event is captured', () => {
    const filters = ["role", "level", "languages", "tools"];
    const values = ["Fullstack", "Midweight", "Python", "React"];

    filters.forEach(async (filter, index) => {
      jobs
        .at(0)
        .vm.$emit("filterJobs", { field: filter, value: values[index] });

      await wrapper.vm.$nextTick();

      const filteredJobs = wrapper.findAllComponents({ name: "Job" });

      expect(
        filteredJobs.wrappers.every(job =>
          job.props("job")[filter].includes(values[index])
        )
      ).toBe(true);
    });
  });
});
