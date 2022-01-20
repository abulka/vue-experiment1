<template>
  <p>Example of a component which has a mounted() method and a manual listener which updates local component model data.</p>
  <div class="bluey">
    <p>hi there {{ msg }}</p>
    <p>hi there {{ mycount }} / {{ mycount2 }} </p>
  </div>
  <!-- <webaudio-knob ref="knobRef" src="../knobs/LittlePhatty.png" min="0" max="100"></webaudio-knob> -->
  <button @click="click">regular button</button>
  <button ref="buttRef">button wired in mounted, with an addEventListener() and watch: on 'mycount'</button>
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
  },
  watch: {
    // whenever question changes, this function will run
    mycount: function (newValue, oldValue) {
      console.log('watch triggered', newValue, oldValue)
      this.mycount2 = 3.14
      this.$refs.buttRef.innerText = "raw has been ALTERED";
    }
  },  
}
</script>


<style>
.bluey {
  color: blue;
}
</style>
