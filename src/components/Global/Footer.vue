<template>
  <div class="footer">
    <ul class="nav">
      <li class="nav-item" @click="scrollTop">
        <router-link to="/" class="nav-link">Product</router-link>
      </li>
      <li class="nav-item" @click="scrollTop">
        <router-link to="/about" class="nav-link">Pricing</router-link>
      </li>
      <li class="nav-item" @click="scrollTop">
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </li>
      <li class="nav-item" @click="scrollTop">
        <router-link to="/terms" class="nav-link">Terms</router-link>
      </li>
      <li class="nav-item" @click="scrollTop">
        <router-link to="/privacy" class="nav-link">Privacy</router-link>
      </li>
    </ul>
    <div class="icons">
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
      </div>
    </div>
    <div class="copy">2021, All rights reserved.</div>
  </div>
</template>
<script>
export default {
  name: "foot",
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  padding-bottom: 40px;
  padding-top: 60px;
  background-color: var(--bg-color);
  .nav {
    justify-content: center;
    margin-bottom: 20px;
    .nav-link {
      color: var(--text-third);
      &:hover {
        color: var(--text-primary);
      }
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    .icon {
      margin-right: 20px;
      font-size: 25px;
      color: var(--text-third);
      cursor: pointer;
      &:hover {
        color: var(--text-primary);
      }
    }
  }
  .copy {
    text-align: center;
    color: var(--text-third);
    font-size: 14px;
  }
}
</style>
