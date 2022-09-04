<template>
  <section id="add-invoice">
    <img id="inv_bcgr" src="@/assets/images/background-main.png" alt="" />
    <div class="header">
      <img id="minus" src="@/assets/images/minus-square.png" alt="" />
      <img id="x" src="@/assets/images/x-square.png" alt="" />
    </div>
    <div class="inv-info">
      <div class="left">
        <label for="inv_num">Invoice number </label>
        <input type="number" name="inv_num" id="inv_num" />
        <label for="inv_date">Invoice date </label>
        <input type="date" name="inv_date" id="inv_date" />
        <label for="inv_time">Time</label>
        <input type="time" name="inv_time" id="inv_time" />
        <label for="inv_name">Invoice Name</label>
        <input type="text" name="inv_name" id="inv_name" />
      </div>
      <div class="right">
        <div class="action">
          <label for="from">From</label>
          <select name="from" id="from">
            <option value=""></option>
            <option value="dept_1">Department 1</option>
            <option value="dept_2">Department 2</option>
            <option value="dept_3">Department 3</option>
          </select>
        </div>
        <div class="action">
          <label for="to">To</label>
          <select name="to" id="to">
            <option value=""></option>
            <option value="mr">Mary</option>
            <option value="lb">Lebap</option>
            <option value="dz">Dashoguz</option>
          </select>
        </div>
      </div>
    </div>
    <div class="inv-list">
      <table>
        <tr>
          <th id="th1"></th>
          <th id="th2">
            Code
            <img src="@/assets/images/Polygon1.png" alt="" />
          </th>
          <th id="th3">Name</th>
          <th id="th5">Unit Price (USD)</th>
          <th id="th6">Quantity</th>
          <th id="th7">Total (USD)</th>
        </tr>
        <tr>
          <td class="center"><input type="checkbox" /></td>
          <td class="center">00102</td>
          <td>Black olives with pepper</td>
          <td class="end">25.00</td>
          <td class="end">12</td>
          <td class="end">300.00$</td>
        </tr>
      </table>
    </div>
    <div class="inv-sub">
      <div class="container">
        <label for="mnt">Sum in MNT</label>
        <input type="number" name="mnt" id="mnt" />
        <label for="usd">Sum in USD</label>
        <input type="number" name="usd" id="usd" />
      </div>
      <div class="buttons">
        <button id="save" @click="display">Save</button>
        <nuxt-link to="/invoice_list/"
          ><button id="cancel">Cancel</button></nuxt-link
        >
      </div>
    </div>
    <section id="save_inv" v-if="alert_cancel">
      <div class="header"></div>
      <div class="content">
        <p>Do you want to save changes to Invoice?</p>
        <div class="buttons">
          <nuxt-link to="/invoice_list"><button>Save</button></nuxt-link>
          <nuxt-link to="/invoice_list"><button>Don't Save</button></nuxt-link>
          <button onclick="" @click="display">Cancel</button>
        </div>
      </div>
    </section>
    <div class="footer">
      <div class="inv-num">
        <p id="invoice">INVOICE</p>
        <p id="id_num">000000000020</p>
      </div>
      <div class="outer-container">
        <div class="icons">
          <img src="@/assets/images/icons/plus-circle.png" alt="" />
          <img src="@/assets/images/icons/edit.png" alt="" />
          <img src="@/assets/images/icons/save.png" alt="" />
          <img src="@/assets/images/icons/copy.png" alt="" />
          <img src="@/assets/images/icons/trash-2.png" alt="" />
          <img src="@/assets/images/icons/printer.png" alt="" />
          <img src="@/assets/images/icons/send.png" alt="" />
        </div>
        <img src="@/assets/images/logoWithshadow.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      alert_cancel: false,
    }
  },
  methods: {
    display() {
      this.alert_cancel = !this.alert_cancel
    },
    onSaved(product) {
      axios.post(
        'https://account-debe0-default-rtdb.firebaseio.com/posts.json',
        product
      )
    },
  },
}
</script>

<style>
</style>