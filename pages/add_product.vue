<template>
  <section id="new_product">
    <img src="@/assets/images/forProductBcgr.png" alt="" id="bcgr" />
    <div class="header">
      <p>Add New Product</p>
    </div>
    <GetInputs @newRow="onSaved" />
    <div class="footer">
      <img src="@/assets/images/logoWithshadow.png" alt="" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import GetInputs from '@/components/getInputs.vue'
export default {
  components: {
    GetInputs,
  },
  methods: {
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