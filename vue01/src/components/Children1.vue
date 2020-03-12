<template>
    <div>
        <h2>这是children1</h2>
        <p>{{msg}}</p>
        
    </div>
</template>

<script>
    export default {
        name:"children1",
        data(){
            return {
                msg:'aa'

            }
        },
        mounted(){
            this.$parent.$on('send',this.recevie)
        },
        methods:{
            recevie(value){
                    this.msg = value;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>