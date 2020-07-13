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

  it('should filter jobs when "filter" event is captured', () => {
    const filters = ["role", "level", "languages", "tools"];
    const values = ["Fullstack", "Midweight", "Python", "React"];

    values.forEach(async (value, index) => {
      jobs.at(0).vm.$emit("filter", value);

      await wrapper.vm.$nextTick();

      const filteredJobs = wrapper.findAllComponents({ name: "Job" });

      expect(
        filteredJobs.wrappers.every(job =>
          job.props("job")[filters[index]].includes(value)
        )
      ).toBe(true);
    });
  });

  it("should pass filters to JobFilters component", () => {
    jobs.at(0).vm.$emit("filter", "CSS");
    jobs.at(1).vm.$emit("filter", "React");

    const jobFilters = wrapper.findComponent({ name: "JobFilters" });

    expect(jobFilters.props("filters")).toStrictEqual(["CSS", "React"]);
  });

  it("should not allow to duplicate filters", () => {
    jobs.at(0).vm.$emit("filter", "CSS");
    jobs.at(1).vm.$emit("filter", "CSS");

    const jobFilters = wrapper.findComponent({ name: "JobFilters" });

    expect(jobFilters.props("filters")).toStrictEqual(["CSS"]);
  });
});
