<template>
  <div class="pricing">
    <div class="container">
      <h1>Pricing</h1>
      <div class="buttons row" @click="activate($event)">
        <div class="btn-group col-md-6">
          <div>
            <button class="btn active" type="button" @click="mxnCheck = true">
              {{ mxn }}
            </button>
            <button class="btn" type="button" @click="mxnCheck = false">
              {{ usd }}
            </button>
          </div>
        </div>
        <div class="btn-group col-md-6">
          <div>
            <button
              class="btn active"
              type="button"
              @click="monthlyCheck = true"
            >
              {{ monthly }}
            </button>
            <button class="btn" type="button" @click="monthlyCheck = false">
              {{ yearly }} <span>{{ descont }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="boxes row">
        <div class="col-lg-3 col-md-6" v-for="box in boxes" :key="box.title">
          <div class="box">
            <div class="title">
              <h6>{{ box.title }}</h6>
              <div class="icon">
                <font-awesome-icon :icon="box.icon"></font-awesome-icon>
              </div>
            </div>
            <p class="desc">{{ box.desc }}</p>
            <div class="money">
              <h2 v-show="mxnCheck && monthlyCheck">
                {{ box.mxnMonth }}<span>/month</span>
              </h2>
              <h2 v-show="!mxnCheck && monthlyCheck">
                {{ box.usdMonth }}<span>/month</span>
              </h2>
              <h2 v-show="mxnCheck && !monthlyCheck">
                {{ box.mxnYear }}<span>/year</span>
              </h2>
              <h2 v-show="!mxnCheck && !monthlyCheck">
                {{ box.usdYear }}<span>/year</span>
              </h2>
            </div>
            <a href="#">WHAT'S INCLUDED</a>
            <div class="features">
              <div
                class="feature"
                v-for="feature in box.features"
                :key="feature.title"
              >
                <div class="icon" :class="{ wrong: feature.icon == 'times' }">
                  <font-awesome-icon :icon="feature.icon"></font-awesome-icon>
                </div>
                <div class="text">{{ feature.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pricing",
  data() {
    return {
      mxnCheck: true,
      monthlyCheck: true,
      mxn: "MXN",
      usd: "USD",
      monthly: "MONTHLY",
      yearly: "YEARLY",
      descont: "-30%",
      boxes: [
        {
          title: "Basic",
          icon: "chess-knight",
          desc: "The perfect option for your new business.",
          mxnMonth: "$299",
          usdMonth: "$15",
          mxnYear: "$2.559",
          usdYear: "$126",
          features: [
            {
              icon: "check",
              text: "30 receipts/month",
            },
            {
              icon: "check",
              text: "1 user",
            },
            {
              icon: "check",
              text: "1 workspace",
            },
            {
              icon: "times",
              text: "send tickets on whatsApp",
            },
            {
              icon: "times",
              text: "30 min onboarding",
            },
            {
              icon: "times",
              text: "priority support",
            },
          ],
        },
        {
          title: "Essential ",
          icon: "rocket",
          desc: "Recommended for growing companies.",
          mxnMonth: "$1,449",
          usdMonth: "$75",
          mxnYear: "$12,599",
          usdYear: "$628",
          features: [
            {
              icon: "check",
              text: "100 receipts/month",
            },
            {
              icon: "check",
              text: "Up to 3 users",
            },
            {
              icon: "check",
              text: "Up to 2 workspaces",
            },
            {
              icon: "check",
              text: "Send tickets on WhatsApp",
            },
            {
              icon: "times",
              text: "30 min onboarding",
            },
            {
              icon: "times",
              text: "priority support",
            },
          ],
        },
        {
          title: "Professional  ",
          icon: "shopping-bag",
          desc: "Designed for professionals with large teams.",
          mxnMonth: "$5,999",
          usdMonth: "$299",
          mxnYear: "$50,299",
          usdYear: "$2,511",
          features: [
            {
              icon: "check",
              text: "300 receipts/month",
            },
            {
              icon: "check",
              text: "Up to 10 users",
            },
            {
              icon: "check",
              text: "Up to 5 workspaces",
            },
            {
              icon: "check",
              text: "Send tickets on WhatsApp",
            },
            {
              icon: "check",
              text: "30 min onboarding",
            },
            {
              icon: "times",
              text: "priority support",
            },
          ],
        },
        {
          title: "Corporate ",
          icon: "clipboard",
          desc: "For organizations with many collaborators.",
          mxnMonth: "contact us",
          usdMonth: "contact us",
          mxnYear: "contact us",
          usdYear: "contact us",
          features: [
            {
              icon: "check",
              text: "1,000+ receipts/month",
            },
            {
              icon: "check",
              text: "25 or more users",
            },
            {
              icon: "check",
              text: "10 or more workspaces",
            },
            {
              icon: "check",
              text: "Send tickets on WhatsApp",
            },
            {
              icon: "check",
              text: "2 hrs onboarding",
            },
            {
              icon: "check",
              text: "Priority support",
            },
          ],
        },
      ],
    };
  },
  methods: {
    activate(e) {
      Array.from(e.target.parentElement.children).forEach((child) => {
        if (child.classList.contains("active")) {
          child.classList.remove("active");
        }
      });
      e.target.classList.add("active");
    },
  },
};
</script>
<style lang="scss" scoped>
.pricing {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  h1 {
    font-size: 3rem;
    font-weight: 800;
  }
  .buttons {
    margin-top: 25px;
    margin-bottom: 15px;
    .btn-group {
      margin-bottom: 10px;
      button {
        background-color: var(--bg-color);
        border: 1px solid var(--border-color);
        padding: 5px 20px;
        &.active {
          background-color: white;
          box-shadow: 0px 0px 5px 1px var(--shadow-color);
        }
        span {
          background-color: #3ab93a78;
          padding: 5px;
          border-radius: 5px;
        }
      }
      &:first-child {
        justify-content: flex-end;
        @media (max-width: 767px) {
          justify-content: center;
        }
      }
      @media (max-width: 767px) {
        justify-content: center;
      }
    }
  }
  .boxes {
    .col-lg-3 {
      &:last-of-type {
        span {
          display: none;
        }
      }
      .box {
        text-align: left;
        background-color: var(--bg-color);
        padding: 40px 20px;
        cursor: pointer;
        border: 2px solid var(--white-color);
        transition: 0.4s;
        &:hover {
          border: 2px solid var(--border-color);
        }
        @media (max-width: 991px) {
          margin-bottom: 25px;
        }
        @media (max-width: 767px) {
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        h6 {
          font-size: 20px;
          font-weight: bold;
        }
        .icon {
          margin-left: 15px;
          font-size: 25px;
        }
      }
      .desc {
        color: var(--text-third);
        font-size: 14px;
        margin-bottom: 15px;
      }
      .money {
        margin-bottom: 25px;
        h2 {
          font-weight: 800;
          font-size: 1.5rem;
          span {
            font-size: 1rem;
            font-weight: 400;
          }
        }
      }
      a {
        text-decoration: none;
        font-size: 13px;
      }
      .features {
        margin-top: 15px;
        .feature {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          .icon {
            margin-right: 10px;
            font-size: 20px;
            color: #4eca4e;
            &.wrong {
              color: #f05e5e;
            }
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
  }
}
.dark-mode {
  .pricing {
    .buttons {
      button {
        &:not(.active) {
          color: white;
        }
      }
    }
  }
}
</style>
