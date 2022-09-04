<template>
  <div class="main">
    <!-- <Header /> -->
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
  data() {
    return {}
  },
  computed:{
    router_path(){
      return this.$route.path
    }
  },
}
</script>
