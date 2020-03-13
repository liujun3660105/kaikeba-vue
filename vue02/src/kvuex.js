//1.插件实现
let Vue;
function install (_Vue){
    Vue = _Vue
    //混入store
    Vue.mixin({
        beforeCreate(){
            if(this.$options.store){
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}

//2.实现store类
class Store{
    constructor(options = {}){
        //1. 响应化处理
        this.state = new Vue({
            // data: ()=>{
            //     return options.state
            // }
            data:options.state
        })
        this.mutations = options.mutations || {};
        this.actions = options.actions || {};
        options.getters && this.handleGetters(options.getters);
    }
    //type是mutations中的函数名称
    commit = (type,arg) => {
        this.mutations[type](this.state,arg)
    }
    dispatch(type, arg){
        this.actions[type]({
            commit:this.commit,
            state:this.state
        },arg)
    }
    handleGetters(getters){
        this.getters = {};
        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters,key,{
                get:()=>{
                    return getters[key](this.state)
                }
            })
            
        })
    }
}
export default {Store, install}