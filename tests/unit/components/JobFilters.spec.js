import { shallowMount } from "@vue/test-utils";
import JobFilters from "@/components/JobFilters";

describe("<JobFilters />", () => {
  it("renders all passed filters", () => {
    const filters = ["Frontend", "CSS"];
    const wrapper = shallowMount(JobFilters, {
      propsData: { filters }
    });

    expect(filters.every(filter => wrapper.html().includes(filter))).toBe(true);
  });
});
