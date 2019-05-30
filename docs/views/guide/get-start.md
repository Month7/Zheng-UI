---
title: '快速开始'
---
## 快速开始

本节将介绍如何在项目中使用zheng-ui

引入zheng-ui

在main.js中写入以下内容

```vue
import Vue from 'vue'
import App from './App.vue'
import zheng-ui from 'zheng-ui'
import 'zheng-ui/dist/zheng-ui.css'

Vue.use(zheng-ui)

new Vue({
  render: h => h(App),
}).$mount('#app')

```

##### 开始使用

```vue
<template>
  <div id="app">
    <z-button type="primary">这是一个按钮</z-button>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>
```