import Vue from 'vue'
import VueRouter from './kvue-router';
import Home from './components/Home'
import About from './components/About'
Vue.use(VueRouter);
export default new VueRouter(
    {
        mode: 'hash',//还可是history
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path:'/about',
                component:About
            }
        ]
    }
) 