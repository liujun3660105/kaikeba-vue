import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from './kvuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        add(state){
            state.count++;
        }
    },
    actions:{
        increment({commit}){
            commit('add');
        }
    },
    getters:{
        newValue(state){
            return state.count++
        }
    }
});
export default store;