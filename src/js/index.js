// import './module'

import Vue from 'vue'
import store from './store'
import TestComponent from './components/TestComponent.vue'

new Vue({
   store,
   el: '#app',
   components: {
      TestComponent
   },
})
