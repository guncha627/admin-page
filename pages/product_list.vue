<template>
  <section id="product-list">
    <div class="outer-container">
      <table>
        <tr>
          <th id="th1"></th>
          <th id="th2">
            Code
            <img src="@/assets/images/Polygon1.png" alt="" />
          </th>
          <th id="th3">Barcode</th>
          <th id="th4">Name</th>
          <th id="th5">Unit</th>
          <th id="th6">Case</th>
          <th id="th7">Weight (kg)</th>
        </tr>
        <tr>
            <td><input type="checkbox" /></td>
            <td>110001</td>
            <td>812585875</td>
            <td>MARMARA Olive oil bottle 9x100ml</td>
            <td>5836</td>
            <td>648.4</td>
            <td></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>110002</td>
            <td>822585455</td>
            <td>MARMARA Olive oil bottle 6x200ml</td>
            <td>125</td>
            <td>20.8</td>
            <td></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>110003</td>
            <td>821255875</td>
            <td>MARMARA Green Olive</td>
            <td></td>
            <td></td>
            <td>63.3</td>
          </tr>
        <ProductTable v-for="(e, i) in productTableData" :key="i" :info="e" />
      </table>
    </div>
    <div class="footer">
      <div class="inv-num">
        <p id="invoice">PRODUCTS</p>
      </div>
      <div class="outer-container2">
        <div class="icons">
          <ActionIcons v-for="(e, i) in actionIconData" :key="i" :info="e" />
        </div>
        <img src="@/assets/images/logoWithshadow.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import ActionIcons from '../components/action_icons.vue'
import ProductTable from './../components/product-tab.vue'
export default {
  components: {
    ActionIcons,
    ProductTable,
  },
   computed:{
    productTableData(){
        return this.$store.getters.newRow
    }
  },
  data() {
    let actionIconData = [
      {
        href: '/add_product',
        title: 'Add',
        icon: 'plus-circle.svg',
      },
      {
        href: '',
        title: 'Edit',
        icon: 'edit.svg',
      },
      {
        href: '',
        title: 'Save',
        icon: 'save.svg',
      },
      {
        href: '',
        title: 'Copy',
        icon: 'copy.svg',
      },
      {
        href: '',
        title: 'Delete',
        icon: 'trash-2.svg',
      },
      {
        href: '',
        title: 'Print',
        icon: 'printer.svg',
      },
      {
        href: '',
        title: 'Send',
        icon: 'send.svg',
      },
    ]
   
    return {
      actionIconData,
    }
  },
}
</script>

<style>
</style>