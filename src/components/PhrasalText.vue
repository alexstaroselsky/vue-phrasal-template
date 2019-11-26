<template>
  <span class="phrasal-text">{{ data.text }}</span>
</template>

<script>
export default {
  name: "PhrasalText",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.phrasal-text {
  display: inline-block;
}
</style>
