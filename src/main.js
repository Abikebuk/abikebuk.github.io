/* Vue imports */
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import store from './store';
import router from './router';
/* app imports */
import GLOBAL from './Global.json';
import mixinGlobal from './mixin/global';

/* Bootstrap import */
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/* Data imports */
import _text from './data/Text.json';
import _lang from './data/Language.json';

Vue.mixin(mixinGlobal);
Vue.use(VueCookies);
Vue.config.productionTip = false;

/* Global variables import */
Vue.prototype.$GLOBAL = GLOBAL;
/* Data Imports */
Vue.prototype.$_text = _text;
Vue.prototype.$_lang = _lang;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
