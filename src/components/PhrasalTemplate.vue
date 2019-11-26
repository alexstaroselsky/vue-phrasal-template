<template>
  <div class="phrasal-template">
    <component
      v-for="item in items"
      :key="item.id"
      :is="item.component"
      :data="item.data"
    ></component>
  </div>
</template>

<script>
import PhrasalInput from "./PhrasalInput.vue";
import PhrasalText from "./PhrasalText.vue";

export default {
  name: "PhrasalTemplate",
  components: {
    PhrasalInput,
    PhrasalText
  },
  props: {
    template: {
      type: String,
      required: true
    },
    replacements: {
      type: [Array],
      required: true
    }
  },
  computed: {
    items: function() {
      const replacementPattern = /(\[\d+\])/;

      const items = this.template
        .split(replacementPattern)
        .map((text, index) => {
          if (replacementPattern.test(text)) {
            const idx = +text.replace("[", "").replace("]", "");
            const replacement = this.replacements[idx];

            return {
              id: index,
              component: "PhrasalInput",
              data: {
                ...replacement
              }
            };
          }

          return {
            id: index,
            component: "PhrasalText",
            data: {
              text
            }
          };
        });

      return items;
    }
  }
};
</script>

<style>
.phrasal-template {
  display: block;
}
</style>
