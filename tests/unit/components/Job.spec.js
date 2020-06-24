import { shallowMount } from "@vue/test-utils";
import Job from "@/components/Job";
import jobsMock from "@/jobs.json";

describe("<Job />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Job, {
      propsData: {
        job: jobsMock[0]
      }
    });
  });

  it("should emit an event when click on a filter tablet", () => {
    const role = wrapper.find(".job__role");

    role.trigger("click");

    expect(wrapper.emitted("filterJobs")).toBeTruthy();
    expect(wrapper.emitted("filterJobs")[0]).toStrictEqual([
      wrapper.props("job").role
    ]);
  });

  it("should not emit an event when click outside a filter tablets", () => {
    const filters = wrapper.find(".job__filters");

    filters.trigger("click");

    expect(wrapper.emitted("filterJobs")).toBeFalsy();
  });
});
