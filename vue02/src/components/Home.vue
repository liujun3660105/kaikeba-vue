<template>
    <div>
        <h2>Home</h2>
        <button @click = "handleAdd">加1</button>
        <button @click = "handleActonAdd">action加1</button>
        <p>{{$store.state.count}}</p>
        <p>{{newValue}}</p>
    </div>
</template>

<script>
    export default {
        methods:{
            handleAdd(){
                this.$store.commit('add');
            },
            handleActonAdd(){
                this.$store.dispatch('increment');
            }
        },
        computed:{
            newValue(){
                return this.$store.getters.newValue
            }
        }
        

    }
</script>

<style lang="scss" scoped>

</style>