import React, { Component } from 'react'
import {
  FooterWrapper
} from './style'

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>Copyright © 2013-2019 Mr. Xu</div> 
        <div>本站总访问量为 24507 次</div>
      </FooterWrapper>
    )
  }
}

export default Footer;