import { shallowMount } from "@vue/test-utils";
import App from "@/App";

describe("<App />", () => {
  it("renders JobListing component", () => {
    const wrapper = shallowMount(App);
    const jobListing = wrapper.findComponent({ name: "JobListing" });

    expect(jobListing.exists()).toBe(true);
  });
});
