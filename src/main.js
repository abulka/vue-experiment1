const { createApp } = require('vue');
import App from './App.vue';

/*
Andy Note: Interesting that this app is composed out of components only - there is no 'master' root HTML document!!

The root HTML is the 'App' component - which in turn includes other components, defined in .vue files:

- The HelloWorld component
- My comp2 component

I also create an 'inline' component below 'button-counter', just to show off this capability. 

The 'button-counter' component is actually USED in the App component - which is interesting, because by defining a component here using 'app.component' it becomes available in .vue components. On the other hand, to make a .vue component available you have to import it.
*/

//createApp(App).mount("#app");
let app = createApp(App);

// Define a new global component called button-counter
// Note, this is done 'inline' and not via a .vue file
app.component('button-counter', {
  data() {
    return {
      count: 0
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
});

app.mount('#app');
