<template>
  <section id="home-page">
    <nav>
      <div class="buttons">
        <nuxt-link to="" class="btn_login">Register</nuxt-link>
        <nuxt-link to="/login/" class="btn_login">Log in</nuxt-link>
      </div>
    </nav>
    <img src="@/assets/images/homeBackground.png" id="home-page-bcgr" alt="" />
    <img
      id="home-profile-background"
      src="@/assets/images/Rectangle5.png"
      alt=""
    />
    <nuxt-link class="prof" to="/main-page/">
      <div class="profile">
        <img id="house_el" src="@/assets/images/Ellipse1.png" alt="" />
        <img id="house" src="@/assets/images/home.png" alt="" />
      </div>
    </nuxt-link>
    <img id="main-logo" src="@/assets/images/logo.png" alt="" />
    <p id="company-ltd">COMPANY LTD</p>
  </section>
</template>

<script>
export default {
  data() {
    const links = [
      {
        id: 1,
        href: '/login',
      },
      {
        id: 1,
        href: '/main-page',
      },
    ]
    return {
      links,
    }
  },
}
</script>

<style>
</style>