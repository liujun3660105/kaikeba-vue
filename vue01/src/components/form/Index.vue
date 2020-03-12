<template>
  <div>
    <!-- <KInput :value="model.username" @input="onInput"/> -->
    <!-- <KInput v-model="model.username"/>
        <KInput :value.sync="model.username"/>

    <p>{{model.username}}</p>-->
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" type="text" placeholder="请输入用户名" />
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput v-model="model.password" type="password" placeholder="请输入密码" />
      </KFormItem>
      <KFormItem>
       <button @click="submit">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
import create from '@/utils/create';
import Notice from '@/components/Notice'


export default {
  name: "Index",
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    onInput(value) {
      this.model.username = value;
    },
    submit(){
        //找到当前的表单实例
        this.$refs.loginForm.validate((isValidate)=>{
          const notice = create(Notice,{
            title:'测试',
            message:isValidate?"请登录": "校验失败",
            duration: 1000
          });
          notice.show();

            // if(isValidate){
            //     console.log('登录中')
            // }
            // else{
            //     console.log('登录失败')

            // }

        })

    }
  }
};
</script>

<style lang="scss" scoped>
</style>