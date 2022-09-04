<template>
  <div id="main-page">
    <img
      src="@/assets/images/backgr-main(Traced).png"
      id="main-page-bcgr"
      alt=""
    />
    <div class="profile-background"></div>
    <div class="profile-container">
      <p><b>LOGISTIC SPECIALIST</b></p>
      <p>JOSH HAMEDANI</p>
      <img src="@/assets/images/profile-img.png" alt="" />
    </div>
    <div class="tabs">
      <nuxt-link class="one" v-for="(e,i) in tabInfos" :key="i" :to="tabInfos[i].href">
        <p class="tab"><span></span>{{ tabInfos[i].title }}</p>
        <span class="after"></span>
      </nuxt-link>
    </div>
    <div class="main-page-footer">
      <img src="@/assets/images/logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let tabInfos = [
      {
        href: '/product_list',
        title: 'PRODUCTS',
      },
      {
        href: '/invoice_list',
        title: 'INVOICES',
      },
      {
        href: '',
        title: 'ACCOUNTS',
      },
      {
        href: '',
        title: 'PURCHASE',
      },
      {
        href: '',
        title: 'SALES',
      },
      {
        href: '',
        title: 'FINANCE',
      },
    ]
    return {
      tabInfos,
    }
  },
}
</script>

<style>
</style>