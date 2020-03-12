<template>
  <div>
    <!-- <LInput :value="value" @input="OnInput"></LInput> -->
    <LForm :model="model" :rules="rules" ref='loginForm'>
      <LFormItem name="username" >
        <div>
                  <label for>用户名：</label>
        <LInput v-model="model.username" type="text" placeholder="请输入用户名"></LInput>
        </div>

      </LFormItem>
      <LFormItem name="password">
        <label for>密码：</label>
        <LInput v-model="model.password" type="password" placeholder="请输入密码"></LInput>
      </LFormItem>
      <LFormItem name="password">
        <button @click="submit">提交</button>
      </LFormItem>
    </LForm>
  </div>
</template>

<script>
import LInput from "./LInput";
import LFormItem from "./LFormItem";
import LForm from './LForm'
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    LInput,
    LFormItem,
    LForm
  },
  methods: {
    submit(){
      this.$refs.loginForm.validate();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>