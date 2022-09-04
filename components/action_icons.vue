<template>
  <nuxt-link :to="info.href"
    ><img :title="info.title" :src="require(`~/assets/images/icons/${info.icon}`)" alt=""
  /></nuxt-link>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>