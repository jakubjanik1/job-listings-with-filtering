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
    const values = ["Fullstack", "Midweight", "Python", "React"];

    filters.forEach((filter, index) => {
      const filterTablet = wrapper.find(`.job__${filter}`);

      filterTablet.trigger("click");

      expect(wrapper.emitted("filter")).toBeTruthy();
      expect(wrapper.emitted("filter")[index]).toStrictEqual([values[index]]);
    });
  });

  it("should not emit an event when click outside a filter tablets", () => {
    const filters = wrapper.find(".job__filters");

    filters.trigger("click");

    expect(wrapper.emitted("filter")).toBeFalsy();
  });
});
