<template>
    <div>
        <slot></slot>
        <p v-if="errInfo">{{errInfo}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator';

    export default {
        name:'LFormItem',
        inject:['form'],
        data() {
            return {
                errInfo:'',
            }
        },
        props:{
            model:{
                type:Object
            },
            rules:{
                type:Object
            },
            name:{
                type:String
            },
        },
        mounted(){
            this.$on('validate',()=>{
                this.validate();
            });
            // this.$on('validate',this.validate);
        },
        methods: {
            validate() {
                console.log(this);
                const value = this.form.model[this.name];
                console.log(value);
                const rule = this.form.rules[this.name];
                const validator = new Schema({[this.name]:rule});
                return validator.validate({[this.name]:value},(errors)=>{
                    if(errors){
                        this.errInfo = errors[0].message;
                    }
                    else{
                        this.errInfo = ''
                    }
                })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>