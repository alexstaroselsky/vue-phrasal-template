import { shallowMount } from "@vue/test-utils";
import PhrasalInput from "@/components/PhrasalInput.vue";

describe("PhrasalInput.vue", () => {
  it("renders props.data.text when passed", () => {
    const type = "noun";
    const wrapper = shallowMount(PhrasalInput, {
      propsData: {
        data: {
          type
        }
      }
    });
    expect(wrapper.text()).toMatch(type);
  });
});
