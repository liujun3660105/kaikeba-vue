<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <!-- 错误信息 -->
        <p v-if="error">{{error}}</p>
        <p>{{form.model.username}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator';
    export default {
        inject:["form"],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:{
                type:String
            }
        },
        data(){
            return {
                error:''
            }
        },
        components:{
            
        },
        mounted(){
            // this.$on('validate',()=>{
            //     this.validate();
            // });
            this.$on('validate',this.validate);
        },
        methods:{
            validate(){
                console.log('qqq');
                //做具体的校验和规则
                //1.获取数值和规则
                const value = this.form.model[this.prop];
                const rule = this.form.rules[this.prop];
                //2.创建校验规则
                const schema = new Schema({[this.prop]:rule});//指定校验规则
                return schema.validate({[this.prop]:value},errors=>{
                    console.log(errors);
                    if(errors){
                        console.log('youcuo')
                        // console.log('cuowu')
                        //有错
                        this.error = errors[0].message;
                    }
                    else{
                        this.error=''
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>