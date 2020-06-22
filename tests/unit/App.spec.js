import { shallowMount } from "@vue/test-utils";
import App from "@/App";
import jobsMock from "@/jobs.json";

describe("<App />", () => {
  it("renders all jobs components", () => {
    const wrapper = shallowMount(App);

    const jobs = wrapper.findAllComponents({ name: "Job" });

    expect(jobs.length).toBe(jobsMock.length);
    expect(jobs.at(0).props("job")).toBe(jobsMock[0]);
  });
});
