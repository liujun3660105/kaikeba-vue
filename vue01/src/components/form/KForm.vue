<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    provide(){
        return {
            form:this
        }
    },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
      validate(cb) {
          const tasks = this.$children
          .filter(item => item.prop) //只留下拥有props属性的FormItem
          .map(item=>item.validate());
          //判断所有的输入项必须全部通过
          Promise.all(tasks).then(()=>{
              cb(true)
          }).catch(()=>{
              cb(false)

          })
          //这里做全局校验
          
      }
  },
};
</script>

<style lang="scss" scoped>
</style>