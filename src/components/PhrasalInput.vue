<template>
  <span class="phrasal-input">{{ data.type }}</span>
</template>

<script>
export default {
  name: "PhrasalInput",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.phrasal-input {
  display: inline-block;
}
</style>
