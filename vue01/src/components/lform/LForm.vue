<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'LForm',
        provide(){
            return {
                form: this
            }
        },
        props:{
            model:{
                type:Object
            },
            rules:{
                type:Object
            }
        },
        data(){
            return {

            }
        },
        methods: {
            validate() {
                const tasks = this.$children.filter(item => item.name)
                .map(item =>item.validate());
                Promise.all(tasks).then(()=>{
                    console.log('校验成功');
                })
                .catch(()=>{
                    console.log('校验失败');
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>