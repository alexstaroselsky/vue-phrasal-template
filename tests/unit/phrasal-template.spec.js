import { shallowMount } from "@vue/test-utils";
import PhrasalTemplate from "@/components/PhrasalTemplate.vue";
import PhrasalInput from "@/components/PhrasalInput.vue";
import PhrasalText from "@/components/PhrasalText.vue";

describe("PhrasalTemplate.vue", () => {
  it("renders props.data.text when passed", () => {
    const wrapper = shallowMount(PhrasalTemplate, {
      propsData: {
        template: "Lorem [0] ipsum",
        replacements: [
          {
            type: "noun"
          }
        ]
      }
    });

    expect(wrapper.findAll(PhrasalText).length).toEqual(2);
    expect(wrapper.findAll(PhrasalInput).length).toEqual(1);
  });
});
