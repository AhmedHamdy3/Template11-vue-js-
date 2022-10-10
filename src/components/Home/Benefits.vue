<template>
  <div class="benefits">
    <div class="container">
      <div class="main-heading">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="box in boxes" :key="box.subtitle">
          <div class="box">
            <h3>{{ box.subtitle }}</h3>
            <p>{{ box.subtext }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "benefits",
  data() {
    return {
      title: "Benefits headline",
      text: "Benefits subheadline",
      boxes: [
        {
          subtitle: "45",
          subtext: "sample1",
        },
        {
          subtitle: "5 min",
          subtext: "sample2",
        },
        {
          subtitle: "up to 30%",
          subtext: "sample3",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.benefits {
  background-color: var(--bg-color);
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  .main-heading {
    margin-bottom: 25px;
    h2 {
      font-weight: 800;
    }
    > p {
      color: var(--text-primary);
    }
  }
  .row {
    box-shadow: 0px 0px 10px 4px var(--shadow-color);
    @media (max-width: 767px) {
      box-shadow: none;
    }
    .col-md-4 {
      padding: 0;

      @media (max-width: 767px) {
        padding-left: 12px;
        padding-right: 12px;
      }
      .box {
        background-color: var(--white-color);
        padding-top: 45px;
        padding-bottom: 45px;
        margin-right: 2px;

        @media (max-width: 767px) {
          margin-right: 0px;
          margin-bottom: 2px;
        }
        h3 {
          color: var(--main-color);
          font-weight: 800;
          font-size: 3rem;
          @media (max-width: 991px) {
            font-size: 2rem;
          }
          @media (max-width: 767px) {
            font-size: 3rem;
          }
        }
        > p {
          margin-bottom: 0px;
          color: var(--text-primary);
        }
      }
    }
  }
}
</style>
