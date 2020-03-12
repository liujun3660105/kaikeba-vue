<template>
    <div>
        <h2>这是children2</h2>
        <input type="button" value="传给children1" @click = "to">
        <Children3 />
    </div>
</template>

<script>
import Children3 from './Children3'
    export default {
        name:"children2",
        data(){
            return {
                msg:'children2的信息，要传给children1'

            }
        },
        methods:{
            to(){
                this.$parent.$emit('send',this.msg)
            }

        },
        components:{
            Children3
        }

    }
</script>

<style lang="scss" scoped>

</style>