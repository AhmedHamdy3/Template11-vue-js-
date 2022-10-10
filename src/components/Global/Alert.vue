<template>
  <div class="alert alert-dismissible fade show">
    <div class="container">
      <div class="row">
        <div class="col-md-6 left d-flex">
          <div class="icon">
            <font-awesome-icon icon="volume-up"></font-awesome-icon>
          </div>
          <div class="text">
            Get the .NET 5 backend
            <div class="evil d-none d-lg-inline">
              form an app <a class="alert-link" herf="#">like this one</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 right">
          <button class="btn">Buy backend</button>
          <button class="btn">Download frontent</button>
        </div>
      </div>
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>
<style lang="scss" scoped>
div.alert {
  background-color: var(--main-color);
  margin-bottom: 0px;
  .left {
    color: white;
    .icon {
      background-color: #45435e52;
      padding: 8px;
      border-radius: 5px;
      font-size: 20px;
      margin-right: 20px;
    }
    .text {
      align-self: center;
      .evil {
        display: inline;
        a {
          color: white;
        }
      }
    }
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .right {
    button {
      background-color: white;
      color: var(--main-color);
      height: 100%;
      margin: 0px;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
      @media (max-width: 767px) {
        height: fit-content;
        margin-bottom: 10px;
        width: 100%;
      }
    }
  }
  .btn-close {
    top: 10px;
  }
  @media (max-width: 767px) {
    padding-right: 16px;
  }
}
</style>
