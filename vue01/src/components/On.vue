<template>
    <div>
        <h1>这是on组件</h1>
        <p>触发传过来的值是{{onCount}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                onCount:0
            }
        },
        mounted(){
            this.$bus.$on('add',this.handleAdd);
        },
        methods:{
            handleAdd(value){
                this.onCount = value;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>