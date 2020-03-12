<template>
    <div>
        <Children :msg="message" foo="这是我通过$attr传过来的信息" ref='son1'/> 
        <p>=========================================================</p>
        <Children :msg="message" foo="这是我通过$attr传过来的信息" ref='son1'/> 
                <p>=========================================================</p>
        <Children :msg="message" foo="这是我通过$attr传过来的信息" ref='son1' @add="receive"/> 

        <Children1 />
        <Children2 />

        <p>{{messagefromson}}</p>
    </div>
</template>

<script>
import Children from './Children'
import Children1 from './Children1'
import Children2 from './Children2'
    export default {
        provide(){
            return {
                msg:'传给孙子的信息'
            }
        },
        data(){
            return {
                message:'这是我通过props传过来的信息：Welcome Son',
                messagefromson:''
            }
        },
        mounted(){
            this.$refs.son1.msgfrom='这是父组件通过$refs传过去的值';
            this.$children[1].msgfrom="这是父组件通过$children传过去的值";
        },
        components:{
            Children,
            Children1,
            Children2
        },
        methods:{
            receive(value){
                this.messagefromson = value
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>