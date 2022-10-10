<template>
  <div class="landing">
    <div class="container">
      <div class="brand d-none d-lg-block">
        <img
          src="../../assets/icon-light.png"
          class="img-fluid"
          v-if="shown"
          alt=""
        />
        <img
          src="../../assets/icon-dark.png"
          class="img-fluid"
          v-if="!shown"
          alt=""
        />
      </div>
      <h2>
        Free frontend for
        <span>SaaS</span>
        apps
      </h2>
      <div class="lefted">
        <div class="free">Free</div>
        <div class="vue">Vue 2</div>
        <div class="tailwind">Tailwind css2</div>
      </div>
      <div class="buttons">
        <button class="btn first">Buy backend</button>
        <button class="btn last">Download frontend</button>
      </div>
      <span>start your free trial, no credit card necessary</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Landing",
  props: {
    shown: {
      required: true,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
.landing {
  padding-top: var(--section-padding);
  .container {
    .brand {
      width: 75px;
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      max-width: 380px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
      font: {
        weight: 700;
        size: 50px;
      }
      @media (max-width: 767px) {
        font-size: 35px;
      }
      span {
        color: var(--main-color);
        background-color: var(--opacity-color);
        display: inline-block;
        padding: 10px;
        font-style: normal;
        transform: skewX(-20deg);
        // font-size: ;
      }
    }
    .lefted {
      display: flex;
      justify-content: center;
      margin-bottom: 25px;
      > div {
        margin-right: 10px;
        padding: 0px 10px;
        transform: skewX(-15deg);
        font: {
          weight: bold;
        }
      }
      .free {
        background-color: rgb(216, 180, 254);
      }
      .vue {
        background-color: rgb(134, 239, 172);
      }
      .tailwind {
        background-color: rgb(94, 234, 212);
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      cursor: pointer;
      margin-bottom: 25px;
      .first {
        color: var(--main-color);
        background-color: white;
        box-shadow: 0px 0px 2px 2px var(--shadow-color);
        font-size: 20px;
        margin-right: 15px;
      }
      .last {
        color: white;
        background-color: rgb(31, 41, 55);
        box-shadow: 0px 0px 2px 2px var(--shadow-color);
        font-size: 20px;
      }
    }
    > span {
      color: var(--text-secondary);
      font-size: 13px;
    }
  }
}
</style>
