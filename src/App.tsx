import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//引入头部组件
import Header from './components/Header/Header'
//引入足部组件
import Foot from './components/Foot/Foot'
//引入首页页面
import Index from './view/Index/Index'
//引入景区介绍页面
import introduction from './view/Introduction/Introduction'
//引入景区风光页面
import view from './view/View/View'
//引入景区动态页面
import news from './view/News/News'
//引入景区动态详情页面
import newsDetail from './view/NewsDetail/NewsDetail'
//引入游园指南页面
import guide from './view/Guide/Guide'
//引入企业风采页面
import company from './view/Company/Company'
//引入企业规划页面
import plan from './view/Plan/Plan'
//引入常见页面
import question from './view/Question/Question'
//清空浏览器自带样式
import './assets/style/reset.css';

//配置路由跳转
function Page() {
  return (
    <Switch>
      <Route exact path='/' component={Index}></Route>
      <Route path='/introduction' component={introduction}></Route>
      <Route path='/view' component={view}></Route>
      <Route path='/news' component={news}></Route>
      <Route path='/newsDetail/:index' component={newsDetail}></Route>
      <Route path='/guide' component={guide}></Route>
      <Route path='/company' component={company}></Route>
      <Route path='/plan' component={plan}></Route>
      <Route path='/question' component={question}></Route>
      <Redirect to='/'></Redirect>
    </Switch>

  )
}

//配置页面格式
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Page />
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
