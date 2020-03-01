import React, { useState, Fragment } from 'react'
import { Input, message } from 'antd'
import {
  LRWrapper
} from './LRContainerStyle'
import AuthStore from '../stores/AuthStore'


function LRContainer(props) {
  const [operation, setOperation] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLRChange(value) {
    if (value !== operation) {
      setOperation(value)
    }
  }
  function handleLogin() {
    AuthStore.login(email, password).then((isSucceed) => {
      if (isSucceed) {
        message.success('登录成功！');
        // console.log(AuthStore.login(email, password))
        props.visibleChange()
      } else {
        // console.log(isSucceed)
        message.error('用户名或密码错误！');
        setPassword('')
      }
    })
  }
  return (
    <LRWrapper>
      <div>
        <span
          className={`title-base ${operation === 'login' ? 'title-active': ''}`}
          onClick = {() => handleLRChange('login')}
        >
          登录
        </span>
        <b>·</b>
        <span
          className={`title-base ${operation === 'register' ? 'title-active': ''}`}
          onClick = {() => handleLRChange('register')}
        >
          注册
        </span>
      </div>
      {
        operation === 'login' ?
        <Fragment>
          <Input
            size="large"
            placeholder="请输入您的邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            size="large"
            placeholder="请输入您的密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-base" onClick={() => handleLogin()}>登 录</div>
          <div className="forget-password">啊呀，忘记密码了?</div>
        </Fragment> : 
        <Fragment>
          <Input size="large" placeholder="请输入您的邮箱" />
          <Input.Password size="large" placeholder="请输入您的密码" />
          <Input.Password size="large" placeholder="再输一次密码" />
          <div className="btn-base">注 册</div>
        </Fragment>
      }
    </LRWrapper>
  )
}
export default LRContainer;