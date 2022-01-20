<template>
  <p>Example of a component which has a mounted() method and a manual listener which updates local component model data.</p>
  <div class="bluey">
    <p>hi there {{ msg }}</p>
    <p>hi there {{ mycount }} / {{ mycount2 }} </p>
  </div>
  <!-- <webaudio-knob ref="knobRef" src="../knobs/LittlePhatty.png" min="0" max="100"></webaudio-knob> -->
  <button @click="click">my button</button>
  <button ref="buttRef">my button raw click handler</button>
  <hr>
</template>

<script>
export default {
  name: 'ManualWiring',
  props: {
    msg: String
  },
  data() {
    return {
      mycount: 55,
      mycount2: 98765,
    };
  },
  methods: {
    click: function(e) {
      this.mycount++
    }
  },  
  mounted: function(el) {
    console.log("mounted on: ", this.$refs.buttRef)
    let self = this // must preserve 'this' for handlers to make use of
    this.$refs.buttRef.addEventListener('click', function(e) {
      console.log('got a click')
      self.mycount = 10
    })
  }
}
</script>


<style>
.bluey {
  color: blue;
}
</style>
