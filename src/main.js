// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入必要插件、全局样式
import $ from 'jquery'
import 'font-awesome/css/font-awesome.css'
import 'lodash'

import Axios from 'axios'
import moment from 'moment'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/main.css'
import VueI18n from 'vue-i18n'




import Fuc from './js/common'

import filters from './js/filter'
import directives from './js/directive'

Vue.config.productionTip = false


Vue.prototype.Fuc = Fuc;
Vue.prototype.$http = Axios;

Vue.prototype.moment = moment;

Vue.prototype.eventBus = new Vue();

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


Vue.use(ElementUI);
Vue.use(VueI18n);

// console.log(i18nConfig)

/*配置语言包*/

import LangZhCHS from './js/zhCHS'
import LangEn from './js/en'
import LangJa from './js/ja'


const i18n = new VueI18n({
  //默认
  locale:'zhCHS',
  messages:{
    'en': LangEn,
    'zhCHS': LangZhCHS,
    'ja': LangJa
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
