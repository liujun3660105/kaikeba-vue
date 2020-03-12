import Vue from 'vue';
// export default function create(Component, props) {

//     const vm = new Vue({
//         render(h) {
//             return h(Component, { props })
//         }
//     }).$mount();
//     // console.log(vm);
//     const comp = vm.$children[0];
//     document.body.appendChild(comp.$el);
//     //获取组件实例
//     // const comp = vm.$children[0];
//     comp.remove = () => {
//         document.body.removeChild(comp.$el);
//         vm.$destroy();
//     }
//     return comp
// }

// 方法二
// const Ctor = Vue.extend(Component);
// const comp = new Ctor({propsData:props}).$mount();
// document.body.appendChild(comp.$el);

export default function create(Component, props) {

    const Ctor = Vue.extend(Component);
    const comp = new Ctor({ propsData: props }).$mount();
    document.body.appendChild(comp.$el);
    comp.remove = () => {
        document.body.removeChild(comp.$el);

    }
    return comp
}