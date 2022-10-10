<template>
  <div class="about">
    <Pricing />
    <Questions />
  </div>
</template>
<script>
import Pricing from "@/components/About/Pricing";
import Questions from "@/components/About/Questions";
export default {
  name: "about",
  components: {
    Pricing,
    Questions,
  },
};
</script>
