<template>
  <router-link :to="to">
    <i :class="icon" :style="{background: color}"></i>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    to: [Object, String],
    icon: String,
    color: String,
  },
};
</script>

<style scoped>
.fas{
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  height: 40px;
}
</style>