import { shallowMount } from "@vue/test-utils";
import PhrasalText from "@/components/PhrasalText.vue";

describe("PhrasalText.vue", () => {
  it("renders props.data.text when passed", () => {
    const text = "Lorem Ipsum";
    const wrapper = shallowMount(PhrasalText, {
      propsData: {
        data: {
          text
        }
      }
    });
    expect(wrapper.text()).toMatch(text);
  });
});
