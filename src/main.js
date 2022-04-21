import Vue from 'vue/dist/vue.js'
import ElementUI from 'element-ui';
import * as echarts from 'echarts';
import {Button, Select, Divider} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '~/theme/index.css';
import '~/theme/bootstrap.min.css'
import '~/main.css';
// 以下是组件
import Home from "~/components/Home";
import ToolsBeautifyJSON from "./page/demo/ToolsBeautifyJSON";
import Clock from "./page/demo/Clock";
import Table from "./page/table/TableDemo";
// 这里是常量组件
const NotFound = {template: '<h1>404 ~</h1> <a href="/">回到首页</a>'};

const routes = {
    '/': Home,

    '/demo': Clock,
    '/demo/clock': Clock,
    '/table': Table,
    '/table/demo': Table,
    '/demo/beautify_json': ToolsBeautifyJSON,
};

Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);
Vue.use(Divider);

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});