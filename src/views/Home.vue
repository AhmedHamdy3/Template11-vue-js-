<template>
  <div class="home">
    <Landing :shown="shown" />
    <Between />
    <Benefits />
    <Big />
  </div>
</template>

<script>
import Landing from "@/components/Home/Landing.vue";
import Between from "@/components/Home/Between.vue";
import Benefits from "@/components/Home/Benefits.vue";
import Big from "@/components/Home/Big.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Landing,
    Between,
    Benefits,
    Big,
  },
  props: {
    shown: {
      type: Boolean,
      requited: true,
    },
  },
  data() {
    return {
      // shown: true,
    };
  },
  updated() {
    if (document.getElementById("app").classList.contains(".dark-mode")) {
      this.shown = false;
    } else {
      this.shown = true;
    }
  },
};
</script>
