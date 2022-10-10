<template>
  <div class="question">
    <div class="container">
      <h1>Frequently asked questions</h1>
      <div class="boxes row">
        <div class="col-lg-4 col-md-6" v-for="box in boxes" :key="box.question">
          <div class="box">
            <h4>{{ box.question }}</h4>
            <p>{{ box.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "question",
  data() {
    return {
      boxes: [
        {
          question: "Question 1?",
          answer: "Answer 1.",
        },
        {
          question: "Question 2?",
          answer: "Answer 2.",
        },
        {
          question: "Question 3?",
          answer: "Answer 3.",
        },
        {
          question: "Question 4?",
          answer: "Answer 4.",
        },
        {
          question: "Question 5?",
          answer: "Answer 5.",
        },
        {
          question: "Question 6?",
          answer: "Answer 6.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.question {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  h1 {
    font-weight: 800;
    margin-bottom: 40px;
  }
  .boxes {
    .box {
      text-align: left;
      margin-bottom: 38px;
      @media (max-width: 767px) {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }
      h4 {
        font-weight: 600;
      }
    }
  }
}
</style>
