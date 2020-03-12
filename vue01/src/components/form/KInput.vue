<template>
    <div>
        <!-- 父组件传过来的属性 比如type placeholder等，传过来的每一个值都需要在props中声明，这样很麻烦。所以通过$attrs可以将所有属性全部一次性绑定过来（v-bind有一个特殊功能是对象展开）
        所以下面这句话 就相当于是这样
        <input :value="value" @input="onInput" type="text" placeholder="请输入用户名">
         -->
        <input :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,//当为true时子组件的顶层标签元素，会渲染出父组件传过来的值，比如placeholder
        name:'KInput',
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data(){
            return {
            }
        },
        methods:{
            onInput(e){

                this.$emit('input',e.target.value);
                // this.$emit('update:value',e.target.value);支持.sync语法糖
                this.$parent.$emit('validate');
            
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>