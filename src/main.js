import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules'
import { InlineSvgPlugin } from 'vue-inline-svg'
import App from './App.vue'

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'This field must be a valid email'
});

extend('confirmed', {
  ...confirmed,
  message: 'The password confirmation does not match'
});

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.use(InlineSvgPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
