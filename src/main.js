import Vue from 'vue';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(Loading);

Sentry.init({
  dsn: 'https://200ff2abff6743159bdc1cc9a5d70686@sentry.io/3900152',
  integrations: [new Integrations.Vue({
    Vue,
    attachProps: true,
    logErrors: true,
  })],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
