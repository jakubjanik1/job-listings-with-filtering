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
    expect(jobs.at(0).props("job")).toBe(jobsMock[0]);
  });

  it('should filter jobs when "filterJobs" event is captured', async () => {
    jobs.at(0).vm.$emit("filterJobs", "Fullstack");
    await wrapper.vm.$nextTick();

    const filteredJobs = wrapper.findAllComponents({ name: "Job" });

    expect(filteredJobs.length).toBe(2);
    expect(
      filteredJobs.wrappers.every(job => job.props("job").role === "Fullstack")
    ).toBe(true);
  });
});
