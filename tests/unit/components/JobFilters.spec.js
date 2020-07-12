import { shallowMount } from "@vue/test-utils";
import JobFilters from "@/components/JobFilters";

describe("<JobFilters />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(JobFilters, {
      propsData: {
        filters: ["Frontend", "CSS"]
      }
    });
  });

  it("renders all passed filters", () => {
    const filters = wrapper.findAll(".job-filters__filter");

    expect(filters.length).toBe(2);
    expect(filters.at(0).text()).toBe("Frontend");
    expect(filters.at(1).text()).toBe("CSS");
  });

  it("removes a filter when its remove icon is clicked", async () => {
    const removeFilter = wrapper.find(".job-filters__remove");
    removeFilter.trigger("click");

    await wrapper.vm.$forceUpdate();

    const filters = wrapper.findAll(".job-filters__filter");
    expect(filters.length).toBe(1);
    expect(filters.at(0).text()).toBe("CSS");
  });

  it("clears all filters when clear option is clicked", async () => {
    const clearOption = wrapper.find(".job-filters__clear");
    clearOption.trigger("click");

    await wrapper.vm.$forceUpdate();

    const filters = wrapper.findAll(".job-filters__filter");
    expect(filters.length).toBe(0);
  });
});
