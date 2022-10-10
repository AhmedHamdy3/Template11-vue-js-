<template>
  <div id="app">
    <Alert />
    <Header @changed="change" />
    <router-view />
    <Footer />
    <Bullets @changeTheColor="draw($event)" />
  </div>
</template>
<script>
import Alert from "@/components/Global/Alert";
import Header from "@/components/Global/Header.vue";
import Footer from "@/components/Global/Footer.vue";
import Bullets from "@/components/Global/Bullets.vue";
export default {
  name: "app",
  // props:[
  //   shown
  // ],
  components: {
    Alert,
    Header,
    Footer,
    Bullets,
  },
  data() {
    return {
      shown: true,
    };
  },
  methods: {
    change() {
      document.getElementById("app").classList.toggle("dark-mode");
    },
    draw(event) {
      if (localStorage.getItem("pageColor")) {
        document.documentElement.style.setProperty(
          "--color",
          localStorage.getItem("pageColor")
        );
      }

      Array.from(event.target.parentElement.children).forEach((li) => {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
        }
      });
      event.target.classList.add("active");

      document.documentElement.style.setProperty(
        "--color",
        event.target.dataset.color
      );

      localStorage.setItem("pageColor", event.target.dataset.color);
    },
  },

  mounted() {
    if (localStorage.getItem("pageColor")) {
      document.documentElement.style.setProperty(
        "--color",
        localStorage.getItem("pageColor")
      );
    }
    Array.from(document.querySelectorAll(".bullets ul li")).forEach((li) => {
      if (li.dataset.color == localStorage.getItem("pageColor")) {
        li.classList.add("active");
      }
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app.dark-mode {
  background-color: var(--between-color);
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
