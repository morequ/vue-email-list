<template>
  <header>
    <h1>{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
  components: {},
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}
</style>