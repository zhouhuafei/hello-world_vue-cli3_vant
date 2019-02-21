import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import {
    Button,
    CellGroup,
    Cell,
    Field,
    Checkbox,
    CheckboxGroup,
    Toast,
    Dialog,
    Notify,
    Loading,
} from 'vant';

Vue
    .use(Loading)
    .use(Toast)
    .use(Dialog)
    .use(Notify)
    .use(Button)
    .use(CellGroup)
    .use(Cell)
    .use(Field)
    .use(Checkbox)
    .use(CheckboxGroup);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
