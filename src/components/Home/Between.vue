<template>
  <div class="parent">
    <div class="between-parent">
      <div class="between"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "between",
};
</script>
<style lang="scss" scoped>
.between-parent {
  background-color: var(--bg-color);
  .between {
    width: 100%;
    border: {
      width: 40px;
      // top-width: 0px;
      style: solid;
      color: var(--between-color);
      radius: 100%;
      top-left-radius: 0;
      top-right-radius: 0px;
    }
  }
}
</style>
