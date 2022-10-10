<template>
  <div class="call">
    <div class="main-heading">
      <h2>Contact Sales</h2>
      <p>We'd love to know how we can add value to your company</p>
    </div>
    <div class="container">
      <form action="">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="first name">First name</label>
            <input type="text" class="form-control" id="first name" />
          </div>
          <div class="col-md-6 mb-3">
            <label for="last name">Last name</label>
            <input type="text" class="form-control" id="last name" />
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" />
          </div>
          <div class="mb-3">
            <label for="Organization"
              ><span>Organization</span><span>Optional</span></label
            >
            <input type="text" class="form-control" id="Organization" />
          </div>
          <div class="mb-3">
            <label for="Phone"><span>Phone</span><span>Optional</span></label>
            <input type="phone" class="form-control" id="Phone" />
          </div>
          <div class="mb-3">
            <label for="tax">Tax ID's that you manage</label>
            <select name="" id="tax" class="form-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3-5">3-5</option>
              <option value="6-10">6-10</option>
              <option value="11-20">11-20</option>
              <option value="21-50">21-50</option>
              <option value="+50">+50</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="receipts">Monthly invoiced receipts</label>
            <select name="" id="receipts" class="form-select">
              <option value="30">30</option>
              <option value="31-100">31-100</option>
              <option value="101-300">101-300</option>
              <option value="301-500">301-500</option>
              <option value="501-1000">501-1000</option>
              <option value="1001-2000">1001-2000</option>
              <option value="2001-5000">2001-5000</option>
              <option value="+50">+5000</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="users">Number of users</label>
            <select name="" id="users" class="form-select">
              <option value="1">1</option>
              <option value="2-3">2-3</option>
              <option value="4-10">4-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="50">50</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="" class="mb-2"
              >Who would you like to invoice your receipts?</label
            >
            <div class="form-check">
              <input
                id="you"
                name="youOrWe"
                class="form-check-input"
                type="radio"
              />
              <label for="you" class="form-check-label"
                >You'll generate the invoices.</label
              >
            </div>
            <div class="form-check">
              <input
                id="we"
                class="form-check-input"
                type="radio"
                name="youOrWe"
              />
              <label for="we" class="form-check-label"
                >We'll generate the invoices.</label
              >
            </div>
          </div>
          <div class="mb-3">
            <label for="message">Comments, questions, or concerns</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="7"
              class="form-control"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="hear"
              ><span>How did you hear about us?</span
              ><span>Optional</span></label
            >
            <input type="phone" class="form-control" id="hear" />
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "call",
};
</script>
<style lang="scss" scoped>
.call {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  .main-heading {
    margin-bottom: 40px;
    h2 {
      font-weight: 800;
    }
  }
  .row {
    text-align: left;
    .mb-3 {
      > label {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        span {
          &:last-of-type {
            font-weight: 400;
          }
        }
      }
      button {
        display: block;
        margin-left: auto;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}
</style>
