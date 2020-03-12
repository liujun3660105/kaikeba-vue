let Vue;
//不希望Vue和Router耦合
//声明Router类
class VueRouter {
    //1.解析route配置，生成map
    constructor(options) {
        this.$options = options;
        this.routerMap = {};

        //url的响应化处理:只要url变化，用到url的组件重新render，重新渲染
        //vue-router跟Vue强耦合，只能用于Vue
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }
    //声明初始化函数
    init() {
        //1.事件监听
        this.bindEvents();
        //2.路由映射操作
        this.createRouteMap();
        //3.组件声明和注册
        this.initComponent();
    }
    //监听hashchange
    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this), false);
        window.addEventListener('load', this.onHashChange.bind(this), false);
    }

    //路径变更处理
    onHashChange() {
        // #/index  => /index
        this.app.current = window.location.hash.slice(1) || '/'
    }

    //做路由映射操作
    createRouteMap() {
        this.$options.routes.forEach(item => {
            this.routerMap[item.path] = item
        })
    }
    initComponent() {
        //router-link
        Vue.component('router-link', {
            props: {
                to: {
                    type: String
                }
            },
            render(h) {
                // h(tag,data,chiildren)
                return h('a', {
                    attrs: {
                        href: '#' + this.to
                    }
                },
                    [this.$slots.default]
                )

            }
        })
        //router-view
        Vue.component('router-view', {
            render: h=> {
                var component = this.routerMap[this.app.current].component
                return h(component)
            }
        })
    }

}
//实现插件
//插件接受Vue的构造函数
VueRouter.install = function (_Vue) {
    Vue = _Vue;//保存Vue的构造函数，就可以方便使用了

    //混入：执行挂在操作
    Vue.mixin({
        //组件对router有依赖，而router对组件没有依赖，所以越早越好
        beforeCreate() {
            if (this.$options.router) {//router挂在在根组件实例，这里判断这里是不是跟组件，只有根组件执行一次
                //这里的this是根组件的实例
                Vue.prototype.$router = this.$options.router;//将router实例挂在在Vue原型上
                this.$options.router.init();
            }

        }
    })
}
export default VueRouter;