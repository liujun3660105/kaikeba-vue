





为何Vue内部  回调 不涉及this问题 而类中却涉及



# Vue组件用法

Vue.component

render函数













# vue-router源码

* 创建Router类

  - 解析routes配置，生成map {'/':Home,   '/about':About}

  - 监听url的变化

  - 声明、注册router-link  router-view

    

- 实现插件s
  - 挂载$routerd
  - 注册组件
  - 声明$route  响应式  url变化 通知组件更新
  - init()







## 问题

history  hash 有什么特点  原理

## hash

- #号后的就是hash内容
- 可以通过location.hash拿到
- 可以通过onhashchange监听hash的改版

## history

- history即正常的路径
- location.pathname
- 可以用onpopstate监听history变化



# Vue.use插件机制

Vue.use()  就是把传给它的东西执行了一遍，如果给他的是东西中有install属性，则会执行install

```js
function a(){
    console.log(a);
}
a.install=functioin(vue){
    //这里面可以传递vue，这个vue就是Vue的实例
    console.log(b)
}
Vue.use(a);
```

# Vuex源码



- 实现Store类
  - state响应式处理
  - 保存状态、实现dispatch、commit、getters
- 实现挂载
  - 挂载store实例



