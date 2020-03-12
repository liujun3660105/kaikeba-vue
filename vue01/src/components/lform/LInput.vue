<template>
    <div>
        <input  @input="onInput" v-bind="$attrs"/>
    </div>
</template>

<script>
import emitter from '@/mixins/emitter';
    export default {
        mixins:[emitter],
        data(){
            return {
            }
        },
        props:{
            value:{
                type:String
            },
            type:{
                type:String
            }
        },
        methods: {
            onInput(e) {
                console.log(this.$parent.$options);
                this.$emit('input',e.target.value);
                // this.$parent.$emit('validate');
                this.$dispatch('LFormItem','validate');
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>