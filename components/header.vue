<template>
  <div class="header">
    <div class="logo">Nuxt</div>
    <ul>
      <li v-for="(e, i) in links" :key="i">
        <nuxt-link :to="e.href">{{ e.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const links = [
      {
        href: '/',
        name: 'Home',
      },
      {
        href: '/about',
        name: 'About',
      },
      {
        href: '/contact',
        name: 'Contact',
      },
      {
        href: '/login',
        name: 'Login',
      },
    ]
    return { links }
  },
}
</script>

<style scoped>
.header{
    background: red;
}
</style>