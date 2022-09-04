<template>
 <section id="invoice-list">
      <div class="outer-container">
        <table>
          <tr>
            <th id="th1"></th>
            <th id="th2">
              Date
              <img src="@/assets/images/Polygon1.png" alt="" />
            </th>
            <th id="th3">Invoice Number</th>
            <th id="th4">Invoice Name</th>
            <th id="th5">Account/Warehouse</th>
            <th id="th6">Price</th>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td>01.01.2022</td>
            <td>000000000001</td>
            <td>MADO</td>
            <td>0000112</td>
            <td>6 021.12</td>
          </tr>
        </table>
      </div>
      <div class="footer">
        <div class="inv-num">
          <p id="invoice">INVOICE</p>
        </div>
        <div class="outer-container2">
          <div class="icons">
            <nuxt-link to="/add_invoice/"><img title="Add" src="@/assets/images/icons/plus-circle.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Edit" src="@/assets/images/icons/edit.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Save" src="@/assets/images/icons/save.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Copy" src="@/assets/images/icons/copy.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Delete" src="@/assets/images/icons/trash-2.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Print" src="@/assets/images/icons/printer.svg" alt="" /></nuxt-link>
            <nuxt-link to=""><img title="Send" src="@/assets/images/icons/send.svg" alt="" /></nuxt-link>
          </div>
          <img src="@/assets/images/logoWithshadow.png" alt="" />
        </div>
      </div>
    </section>
</template>

<script>
export default {
}
</script>

<style>

</style>