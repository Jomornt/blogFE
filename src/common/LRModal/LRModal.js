import React, { useState, Fragment } from 'react'
import { Input, message, Button, Modal } from 'antd'
import {
  LRWrapper
} from './LRModalStyle'
import AuthStore from '../stores/AuthStore'
import { observer } from 'mobx-react';

const LRModal = observer(() => {
  const [operation, setOperation] = useState('login')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [registerPassword1, setRegisterPassword1] = useState('')
  const [registerPassword2, setRegisterPassword2] = useState('')
  

  function handleLRChange(value) {
    if (value !== operation) {
      setOperation(value)
    }
  }
  function handleLogin() {
    AuthStore.loginCheck(email, loginPassword).then((isSucceed) => {
      if (isSucceed) {
        message.success('登录成功！');
        AuthStore.login()
      } else {
        message.error('用户名或密码错误！');
        setLoginPassword('')
      }
    })
  }
  function handleRegister() {
    if(!email || !code || !registerPassword1 || !registerPassword2) {
      message.error('请检查是否完整填写信息');
      return;
    }
    if(registerPassword1 !== registerPassword2) {
      message.error('两次密码不同！');
      return;
    }
    AuthStore.register(code, email, registerPassword1)
      .then((res) => {
        if(res.status) {
          message.success("注册成功")
          setEmail("")
          setCode("")
          setRegisterPassword1("")
          setRegisterPassword2("")
          AuthStore.login()
        } else {
          if(!res.msg.data["data"]) {
            message.error("验证码错误")
            return;
          }
          message.error("注册失败，请稍后再试")
        }
      })
  }
  function sendEmailVerify() {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(email === "") {
      message.error('请输入邮箱');
      return;
    }
    if(!reg.test(email)) {
      message.error('邮箱格式不正确');
      return;
    }
    AuthStore.checkEmail(email)
      .then(() => {
        message.success('发送成功，请注意查收！');
      })
      .catch(() => {
        message.error('发送失败，请稍后再试。');
      })
  }
  return (
    <Modal
    footer={null}
    title={null}
    visible={AuthStore.LRModalVisible}
    onCancel={AuthStore.setLRModalVisible}
  >
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
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <div className="btn-base" onClick={handleLogin}>登 录</div>
          <div className="forget-password">啊呀，忘记密码了?</div>
        </Fragment> : 
        <Fragment>
          <Button className="verify-email" onClick={sendEmailVerify}>发送验证码</Button>
          <Input
            size="large"
            placeholder="请输入您的邮箱"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="large"
            placeholder="请输入验证码"
            className="code-input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Input.Password
            value={registerPassword1}
            size="large"
            placeholder="请输入您的密码"
            onChange={(e) => setRegisterPassword1(e.target.value)}
          />
          <Input.Password
            size="large"
            value={registerPassword2}
            placeholder="再输一次密码"
            onChange={(e) => setRegisterPassword2(e.target.value)}
          />
          <div className="btn-base" onClick={handleRegister}>注 册</div>
        </Fragment>
      }
    </LRWrapper>
  </Modal>
  )
})
export default LRModal;