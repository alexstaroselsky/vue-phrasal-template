<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PhrasalTemplate :template="template" :replacements="replacements" />
  </div>
</template>

<script>
import PhrasalTemplate from "./components/PhrasalTemplate.vue";

export default {
  name: "app",
  components: {
    PhrasalTemplate
  },
  data: function() {
    return {
      template: `Lorem ipsum [0] sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [1] et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation [2] laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia [3] mollit anim id est laborum.`,
      replacements: [
        {
          type: "noun"
        },
        {
          type: "verb"
        },
        {
          type: "adjective"
        },
        {
          type: "noun"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
