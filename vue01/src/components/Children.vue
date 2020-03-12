<template>
    <div>
        <p>{{msg}}</p>
        <p>{{$attrs.foo}}</p>
        <!-- <p>{{aa}}</p> -->
        <p>{{msgfrom}}</p>
        <input type="button" value="传给父组件" @click="transfer">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msgfrom:'通过$refs从父组件传过来的',
                aa:'我是传给父组件的值aa'
            }
        },
        props:{
            msg:{
                type:String,
                default:''
            }
        },
        methods:{
            transfer(){
                this.$emit('add',this.aa);
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>