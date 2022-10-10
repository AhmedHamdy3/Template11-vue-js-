<template>
  <div class="blog">
    <div class="container">
      <div class="alert alert-warning">
        <div class="header">
          <div class="icon">
            <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
          </div>
          <h3>Setup...</h3>
        </div>
        <p>
          Update the .env variables VUE_APP_BLOG_GHOST_URL and
          VUE_APP_BLOG_GHOST_CONTENT_API_KEY
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog",
};
</script>
<style lang="scss" scoped>
.alert {
  padding-top: 30px;
  padding-bottom: 30px;
  border: 2px solid #ffeb3b;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .icon {
      margin-right: 15px;
      font-size: 22px;
    }
    h3 {
      margin: 0;
    }
  }
  p {
    word-break: break-all;
    @media (min-width: 991) {
      padding-left: 100px;
      text-align: left;
    }
  }
}
</style>
