<template>
  <div>
    <h1>我是父组件</h1>
    <Children>
      <template v-slot:default>
        <h2>这里是插槽显示的内容</h2>
      </template>
      <template v-slot:title>
        <p>这里是插槽的标题</p>
      </template>
      <template v-slot:content>
        <p>这里是插槽的内容</p>
      </template>
      <!-- <template v-slot:scope="slotProps">
        <p>这里是作用域插槽的内容{{slotProps.xx}}</p>
      </template>-->
      <template v-slot:scope="{xx}">
        <p>这里是作用域插槽的内容{{xx}}</p>
      </template>
    </Children>
  </div>
</template>

<script>
import Children from "./Children";
export default {
  components: {
    Children
  }
};
</script>

<style lang="scss" scoped>
</style>