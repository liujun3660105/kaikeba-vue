<template>
    <div>
        <h2>这是emit组件</h2>
        <p>这是emit的数字{{count}}</p>
        <input type="button" value="触发emit" @click="add">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                count:0

            }
        },
        methods:{
            add(){
                this.$bus.$emit('add',this.count++)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>