import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import {
    Button,
    CellGroup,
    Cell,
} from 'vant';

Vue.use(Button)
    .use(CellGroup)
    .use(Cell);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
