# 这是之前公司给天生桥景区做的官网样式，后来没有采用。我觉得设计得不错，就做成了个人的作品

## 上传时删除了依赖包
```
克隆后需要 npm install
```

### 用了react+typescript
```
都使用了.tsx文件，但是泛型还是很不熟练，需要更加努力练习

```
## 使用了react hooks开发，用函数组件代替class组件
```
并且使用useContext + useReducer代替了redux
```

### css预处理是stylus，采用flex布局，单位是rem
```
react自带的css预处理是sass，但我之前一直使用的是stylus，所以自己配置相关设置，slyus在react中不能直接使用。
自适应方面没有适配移动端，因为当时ui设计就是pc端的，所以如果想要适配移动端，可以根据像素设置rem
```

### 插件都是自己写的，没有用ui框架
```
因为主要就一个轮播图，也不是很复杂，轮播图是响应式布局，可以根据屏幕自适应
```

### demo的主要目的是学习最新的react框架
react框架本质上和vue框架相差不大，都是jsx思路来实现页面。vue是把所有东西都封装好，你需要重新学习api但学会后可以直接使用如v-if之类的指令来方便快捷实现页面。react是没有指令这个概念，一切都需要你自己通过js来实现，但只要学习理解了react的思路之后，不用react更新一次就要重新学习一次。就目前而言，我还是更喜欢vue一点，方便快捷，而学习react可以帮助我更好的理解vue的实现原理。
