import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './common/footer'
import Sider from './common/sider'
import HomePage from './homepage/containers/HomePage'
import ArticlePage from './articlepage/containers/ArticlePage'
import MessagePage from './messagepage/containers/MessagePage'
import { Content } from './style'
import Header from './common/header'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Content>
        <div className="content-left">
          <Route path='/' exact component={HomePage}></Route>
          {/* <Route path='/message' exact component={MessagePage}></Route> */}
          <Route path='/about' exact component={ArticlePage}></Route>
          <Route path='/download' exact component={ArticlePage}></Route>
          <Route path='/article/:id' exact component={ArticlePage}></Route>
          <Footer />
        </div>
      <Sider />
      </Content>
    </BrowserRouter>
  );
}