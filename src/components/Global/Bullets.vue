<template>
  <div class="bullets">
    <ul>
      <li
        v-for="color in colors"
        :key="color"
        :data-color="color"
        :style="{ 'background-color': `rgb(${color})` }"
        @click="colorChanged($event)"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "bullets",
  data() {
    return {
      colors: [
        "79, 70, 229",
        "244, 67, 54",
        "156, 39, 176",
        "63, 81 ,181",
        "0 ,188 ,212",
        "76 ,175, 80",
        "158, 158 ,158",
        "96, 125, 139",
        "255 ,152, 0",
      ],
    };
  },
  methods: {
    colorChanged(event) {
      this.$emit("changeTheColor", event);
    },
  },
};
</script>
<style lang="scss" scoped>
.bullets {
  position: fixed;
  left: 30px;
  bottom: 30px;
  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    li {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      opacity: 0.5;
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
      &.active {
        opacity: 1;
        box-shadow: 0px 0px 5px 2px var(--main-color);
      }
    }
  }
}
</style>
