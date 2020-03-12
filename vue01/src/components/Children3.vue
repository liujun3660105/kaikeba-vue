<template>
    <div>
        <h2>我是孙子组件Children3</h2>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name:"children3",
        inject:['msg'],
        data(){
            return {

            }
        },
        mounted(){
        },
        methods:{
        }

    }
</script>

<style lang="scss" scoped>

</style>