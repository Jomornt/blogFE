import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './homepage/containers/HomePage'
import ArticlePage from './articlepage/containers/ArticlePage'
import MessagePage from './messagepage/containers/MessagePage'
import DownloadPage from './downloadpage/containers/DownloadPage'
import { Content } from './style'
import Header from './common/header'
import Particles from 'react-particles-js';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Particles
        style={{
          "position": "fixed",
          "z-index": "-1",
          "width": "120%"
        }}
        params={{
          "particles": {
              "number": {
                  "value": 100
              },
              "size": {
                  "value": 3
              },
              "color": {
                "value": "#000000"
              },
              "lineLinked": {
                "color": {
                  "value": "#000000"
                },
              }
          },
        }} />
      <Content>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/message' exact component={MessagePage}></Route>
        <Route path='/download' exact component={DownloadPage}></Route>
        <Route path='/article/:id' exact component={ArticlePage}></Route>
      </Content>
    </BrowserRouter>
  );
}