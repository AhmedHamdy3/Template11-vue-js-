<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container">
      <div class="images">
        <div class="navbar-brand">
          <img
            src="../../assets/logo-light.png"
            class="img-fluid d-none d-lg-inline"
            v-if="shown"
            alt=""
          />
          <img
            src="../../assets//logo-dark.png"
            class="img-fluid d-none d-lg-inline"
            v-if="!shown"
            alt=""
          />
          <img
            src="../../assets/icon-light.png"
            class="img-fluid d-lg-none"
            v-if="shown"
            alt=""
          />
          <img
            src="../../assets/icon-dark.png"
            class="img-fluid d-lg-none"
            v-if="!shown"
            alt=""
          />
        </div>
      </div>
      <button class="log-in btn d-none order-md-5 d-md-inline">Log in</button>
      <div class="small d-md-none">
        <div class="flags">
          <div class="flag"></div>
        </div>
        <div class="imgs" @click="lightAndDark">
          <img
            src="../../assets/sun.png"
            class="img-fluid"
            v-if="!shown"
            alt=""
          />
          <img
            src="../../assets/moon.svg"
            class="img-fluid"
            v-if="shown"
            alt=""
          />
        </div>
        <div class="button">
          <button class="btn">Log in</button>
        </div>
      </div>
      <div
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <font-awesome-icon icon="bars" class="icon"></font-awesome-icon>
      </div>
      <div class="collapse navbar-collapse" id="navbar" dismissible>
        <ul class="navbar-nav">
          <li class="d-md-none d-sm-flex menue-header">
            <div class="image">
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
            <div class="icon" @click="close">
              <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
          </li>
          <li
            class="nav-item"
            v-for="(link, index) in links"
            :key="link.name"
            @click="closeMenue"
          >
            <router-link
              :class="{ 'nav-link': true, active: index == 0 }"
              :to="link.path"
              >{{ link.name }}
            </router-link>
          </li>
          <li class="small d-none d-md-flex">
            <div class="flags">
              <div class="flag"></div>
            </div>
            <div class="imgs" @click="lightAndDark">
              <img
                src="../../assets/sun.png"
                class="img-fluid"
                v-if="!shown"
                alt=""
              />
              <img
                src="../../assets/moon.svg"
                class="img-fluid"
                v-if="shown"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      shown: true,
      links: [
        {
          name: "Product",
          path: "/",
        },
        {
          name: "Pricing",
          path: "/about",
        },
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Blog",
          path: "/blog",
        },
      ],
    };
  },
  methods: {
    lightAndDark() {
      this.shown = !this.shown;
      this.$emit("changed");
      document.querySelector(".navbar").classList.toggle("navbar-dark-mode");
    },
    close() {
      document.getElementById("navbar").classList.toggle("show");
    },
    closeMenue() {
      document.getElementById("navbar").addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
          if (document.getElementById("navbar").classList.contains("show")) {
            document.getElementById("navbar").classList.remove("show");
          }
        }
      });
    },
  },
};
</script>
<style lang="scss">
.navbar {
  .images {
    flex-basis: 20%;
    .navbar-brand {
      width: 100%;
      @media (max-width: 991px) {
        width: 35px;
      }
    }
  }
  .navbar-toggler {
    border-width: 0px;
    .icon {
      color: var(--text-primary);
    }
  }
  .log-in {
    color: var(--main-color);
    box-shadow: 0px 0px 4px 1px var(--shadow-color);
  }
  .small {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    > div {
      display: inline-block;
      margin-right: 18px;
      text-align: right;
    }
    .flags {
      width: 52px;
      height: 39px;
      .flag {
        background-image: url("../../assets/flags.png");
        background-position: 0px -9881px;
        background-repeat: no-repeat;
        z-index: 10;
        height: 100%;
        cursor: pointer;
        transform: scale(0.5);
      }
    }
    .imgs {
      width: 20px;
      cursor: pointer;
    }
    .buttons {
      font-size: 14px;
    }
  }
  .collapse {
    color: var(--text-primary);
    flex-basis: 60%;
    justify-content: center;
    @media (max-width: 767px) {
      background-color: var(--bg-color);
      padding: 20px;
    }
    .navbar-nav {
      .menue-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .image {
          flex-basis: 30px;
          transition: 0s;
        }
        .icon {
          flex-basis: 20%;
          font-size: 30px;
        }
      }
      a.nav-link {
        color: var(--text-primary);
        margin: auto 20px 0px 0px;
        border-radius: 5px;
        @media (max-width: 767px) {
          margin: auto;
        }
        &.router-link-exact-active {
          color: var(--black-color);
          background-color: var(--bg-color);
          @media (max-width: 767px) {
            background-color: var(--white-color);
          }
        }
        &:hover {
          color: var(--black-color);
          background-color: var(--bg-color);
          @media (max-width: 767px) {
            background-color: var(--always-white-color);
            color: black;
            transition: 0.4s;
          }
        }
      }
    }
  }
  .navbar-collapse {
    @media (max-width: 767px) {
      position: absolute;
      width: 0px;
      top: 5px;
      left: 0;
      height: fit-content;
      padding: 15px 20px;
      border: 2px solid rgba(#374151, 0.2);
      left: 3%;
      border-radius: 10px;
      transition: 0s;
      display: block;
      z-index: 100;
    }
    &.show {
      width: 94%;
    }
  }
  &.navbar-dark-mode {
    button {
      color: white;
      background-color: var(--bg-color);
    }
  }
}
</style>
