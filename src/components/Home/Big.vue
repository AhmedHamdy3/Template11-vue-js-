<template>
  <div class="big">
    <div class="container">
      <div class="row bigger" v-for="(row, index) in rows" :key="row.subtitle">
        <div class="col-lg-6 image" :class="{ right: index % 2 == 0 }">
          <div>
            <img
              :src="require(`../../assets/img${index + 1}.jpg`)"
              :class="{
                'img-fluid': true,
                rounded: true,
              }"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            <div class="main-heading">
              <h2>{{ row.title }}</h2>
              <p>{{ row.desc }}</p>
            </div>
            <div
              class="row smaller"
              v-for="item in row.items"
              :key="item.subtitle"
            >
              <div class="icon">
                <font-awesome-icon :icon="item.icon"></font-awesome-icon>
              </div>
              <div class="text">
                <h5>{{ item.subtitle }}</h5>
                <p>{{ item.subdesc }}</p>
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
  name: "big",
  data() {
    return {
      rows: [
        {
          title: "Clean Architecture",
          desc: "We've split the project into multiple layers",
          img: "../../assets/img1.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "Layers",
              subdesc:
                "Domain, Application, Infrastructure, WebApi, IntegrationTests, UnitTests",
            },
            {
              icon: "check-circle",
              subtitle: "Repositories",
              subdesc:
                "Every entity has its own repository interface and implementation",
            },
            {
              icon: "check-circle",
              subtitle: "Unit of Work",
              subdesc:
                "You can control if an entity belongs to a tenant or in the master database",
            },
          ],
        },
        {
          title: "Unit and Integration Tests",
          desc: "Almost every controller method has its own integration test",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "+130 Tests",
              subdesc:
                "Tests for Authentication, Users, Tenants, Subscriptions, Transactions...",
            },
            {
              icon: "check-circle",
              subtitle: "Stripe customers",
              subdesc:
                "Include your 'testing' keys, and each test will create new stripe customers",
            },
            {
              icon: "check-circle",
              subtitle: "Stripe subscriptions / products",
              subdesc:
                "Test how your subscription mechanism will work against a real world API",
            },
          ],
        },
        {
          title: "Multi-organization & multi-workspace",
          desc: "Each user can create its own organizations (tenants) and each organization has its own workspaces",
          img: "../../assets/img3.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "Owner",
              subdesc:
                "The owner of the organization can update general settings",
            },
            {
              icon: "check-circle",
              subtitle: "Admin",
              subdesc: "Can manage members and update subscription",
            },
            {
              icon: "check-circle",
              subtitle: "Member",
              subdesc: "You decide!",
            },
          ],
        },
        {
          title: "Multi-tenancy",
          desc: "Decide if you want only one database or one database per tenant",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "Standalone App",
              subdesc:
                "You only have one database, and a tenant column of your core models",
            },
            {
              icon: "check-circle",
              subtitle: "Database per Tenant",
              subdesc:
                "Each tenant will have its own database for data isolation",
            },
          ],
        },
        {
          title: "Multi-language",
          desc: "You can launch internationally by adding your language",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "3 pre-configured languaged",
              subdesc: "English, Spanish and Hindi",
            },
            {
              icon: "check-circle",
              subtitle: "Customization",
              subdesc:
                "Files easy to configure to customize your own languages",
            },
          ],
        },
        {
          title: "Multi-database",
          desc: "Entity Framework Core supported databases",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "PostgreSQL",
              subdesc: "",
            },
            {
              icon: "check-circle",
              subtitle: "MySQL",
              subdesc: "",
            },
          ],
        },
        {
          title: "Dashboard",
          desc: "A better, data-driven dashboard to enlighten your customers",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "Summary",
              subdesc:
                "Count, sum or Average your most important entities (transactions, users, storage usage...)",
            },
            {
              icon: "check-circle",
              subtitle: "Quicklinks",
              subdesc: "Give your customers a faster way to do things",
            },
            {
              icon: "check-circle",
              subtitle: "Workspaces",
              subdesc:
                "Change the current workspace to load data related to it",
            },
          ],
        },
        {
          title: "Dynamic pricing",
          desc: "3 simple steps to generate your Stripe subscriptions/products:",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "1. Open default-pricing.ts file",
              subdesc:
                "Modify your plans, currencies, billing periods, titles and more",
            },
            {
              icon: "check-circle",
              subtitle: "2. Generate them on DB and Stripe",
              subdesc:
                "Go to /admin/products and click on 'Generate prices on database and stripe'",
            },
            {
              icon: "check-circle",
              subtitle: "3. Create development or production accounts",
              subdesc:
                "Depending on your Database and Stripe environment variables, test however your app should work",
            },
          ],
        },
        {
          title: "And more!",
          desc: "Features based on real world SaaS applications",
          img: "../../assets/img2.jpg",
          items: [
            {
              icon: "check-circle",
              subtitle: "Member managment",
              subdesc: "Manage your organization members",
            },
            {
              icon: "check-circle",
              subtitle: "Invitation link",
              subdesc: "Invite users by email or send them an invitation link",
            },
            {
              icon: "check-circle",
              subtitle: "Resources",
              subdesc:
                "Add resources and assign them to certain subscriptions and roles",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.big {
  background-color: var(--bg-color);
  padding-top: var(--section-padding);
  padding-bottom: 20px;
  .bigger {
    text-align: left;
    margin-bottom: 50px;
    @media (max-width: 991px) {
      max-width: 550px;
      margin-right: auto;
      margin-left: auto;
    }
    .image {
      @media (max-width: 991px) {
        margin-bottom: 40px;
      }

      img {
        box-shadow: 0px 0px 10px 6px var(--shadow-color);
      }
    }
    .right {
      order: 2;
      @media (max-width: 991px) {
        order: 0;
      }
    }

    .col-lg-6 {
      display: flex;
      align-items: center;
    }
    .main-heading {
      margin-bottom: 25px;
      h2 {
        font-weight: 800;
      }
      > p {
        color: var(--para-color);
      }
    }
    .smaller {
      .icon {
        color: var(--main-color);
        flex-basis: 10%;
        font-size: 25px;
      }
      .text {
        flex-basis: 80%;
        flex-grow: 1;
        h5 {
          font-weight: 800;
        }
        p {
          color: var(--para-color);
        }
      }
    }
  }
}
</style>
