import { shallowMount } from "@vue/test-utils";
import Job from "@/components/Job";
import jobsMock from "@/jobs.json";

describe("<Job />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Job, {
      propsData: {
        job: jobsMock[1]
      }
    });
  });

  it("should emit an event with correct arguments when click on any filter", () => {
    const filters = ["role", "level", "languages", "tools"];

    filters.forEach((filter, index) => {
      const filterTablet = wrapper.find(`.job__${filter}`);
      const expectedValue = wrapper.props("job")[filter];

      filterTablet.trigger("click");

      expect(wrapper.emitted("filterJobs")).toBeTruthy();
      expect(wrapper.emitted("filterJobs")[index]).toStrictEqual([
        {
          field: filter,
          value: Array.isArray(expectedValue) ? expectedValue[0] : expectedValue
        }
      ]);
    });
  });

  it("should not emit an event when click outside a filter tablets", () => {
    const filters = wrapper.find(".job__filters");

    filters.trigger("click");

    expect(wrapper.emitted("filterJobs")).toBeFalsy();
  });
});
