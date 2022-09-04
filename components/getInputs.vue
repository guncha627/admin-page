<template>
  <form class="inputs" @submit.prevent="onSave">
    <div class="left">
      <label for="date">Date</label>
      <label for="code">Code</label>
      <label for="barcode">Barcode</label>
      <label for="name">Name</label><br /><br />
      <label for="unit">Unit</label>
      <label for="cases">Cases</label>
      <label for="weight">Weight</label>
      <label for="price">Price</label>
      <label for="country">Country</label>
    </div>
    <div class="right">
      <input
        type="date"
        id="date"
        name="date"
        autocomplete="off"
        v-model="editedPost.date"
      />
      <input
        type="text"
        name="code"
        id="code"
        autocomplete="off"
        v-model="editedPost.code"
      />
      <input
        type="text"
        name="barcode"
        id="barcode"
        autocomplete="off"
        v-model="editedPost.barcode"
      />
      <textarea
        rows="4"
        cols="50"
        name="name"
        id="name"
        v-model="editedPost.name"
      ></textarea>
      <input
        type="text"
        name="unit"
        id="unit"
        autocomplete="off"
        v-model="editedPost.unit"
      />
      <input
        type="text"
        name="cases"
        id="cases"
        autocomplete="off"
        v-model="editedPost.cases"
      />
      <input
        type="number"
        name="weight"
        id="weight"
        autocomplete="off"
        v-model="editedPost.weight"
      />
      <input
        type="number"
        name="price"
        id="price"
        autocomplete="off"
        v-model="editedPost.price"
      />
      <input
        type="text"
        name="country"
        id="country"
        autocomplete="off"
        v-model="editedPost.country"
      />
    </div>
    <div class="buttons">
      <button>Save</button>
      <button>Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.table
        ? { ...this.table }
        : {
            date: '',
            code: '',
            barcode: '',
            name: '',
            unit: '',
            cases: '',
            weight: null,
            price: null,
            country: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('newRow', this.editedPost);
      
    },
  },
}
</script>

<style>
</style>