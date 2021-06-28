<template>
  <div class="freddy">
    <h1>---- {{ msg }} ----</h1>
    <p>hi there {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Comp2',
  props: {
    msg: String
  }
}
</script>


<style>
.freddy {
  color: blue;
}
</style>
