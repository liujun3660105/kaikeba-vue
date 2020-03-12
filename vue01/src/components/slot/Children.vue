<template>
    <div>
        <h2>我是子组件</h2>
        <slot></slot>
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="scope" :xx="name"></slot>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:'作用域插槽'
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>