import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './common/footer'
import Sider from './common/sider'
import HomePage from './homepage/containers/HomePage'
import ArticlePage from './articlepage/containers/ArticlePage'
import { Globalstyle, Content } from './style'

export default () => {
  return (
    <Content>
      <BrowserRouter>
        <div className="content-left">
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/article' exact component={ArticlePage}></Route>
          <Footer />
        </div>
      </BrowserRouter>
      <Sider />
    </Content>
  );
}