<template>
  <tr>
    <td><input type="checkbox" /></td>
    <td>{{ info.code }}</td>
    <td>{{ info.barcode }}</td>
    <td>{{ info.name }}</td>
    <td>{{ info.unit }}</td>
    <td>{{ info.cases }}</td>
    <td>{{ info.weight }}</td>
  </tr>
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