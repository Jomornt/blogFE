import { action, observable } from "mobx";
import {toJS} from "mobx"
import axios from '../../utils/axios'
import moment from 'moment'
import cookies from 'react-cookies';
// import qs from 'Qs'

class AuthStore {
  @observable isLogin = Boolean(cookies.load('token'));
  @observable token = "";
  @observable name = "";
  @observable username = cookies.load('username')
  @observable firstname = cookies.load('firstname')
  @observable LRModalVisible = false;

  @action setLRModalVisible = () => {
    this.LRModalVisible = !this.LRModalVisible
    console.log(this.LRModalVisible)
  }
  @action setIsLogin = () => {
    this.isLogin = true
  }
  @action login = () => {
    this.isLogin = true;
    this.LRModalVisible = !this.LRModalVisible;
    this.firstname = cookies.load('firstname');
    this.username = decodeURIComponent(cookies.load('username'));
    console.log(this.username)
  }
  @action loginout = () => {
    console.log(1111)
    cookies.remove("token")
    this.isLogin = false;
  }
  @action loginCheck = (email, password) => {
    let postData = { "username": email, "password": password }
    return axios.post(`/login/`, postData)
      .then(res => {
        this.token = res.data.token
        if(!cookies.load('token')) {
          cookies.save('token', res.data.token, {
            expires: moment().add(7, 'days')._d,
            path: '/'
          });
        }
        cookies.save('firstname', res.data.user.first_name, {
          expires: moment().add(7, 'days')._d,
          path: '/'
        });
        cookies.save('username', encodeURIComponent(res.data.user.username), {
          expires: moment().add(7, 'days')._d,
          path: '/'
        });
        axios.defaults.headers.common['Authorization'] = `JWT ${this.token}`
        return true
      }).catch(err => {
        return false
      });
  }
  @action register = (code, email, password) => {
    let postData = { 
      "username": email,
      "code": code,
      "password": password
    }
    return axios.post(`/register/`, postData)
      .then((res) => {
        this.token = res.data.token
        cookies.save('token', res.data.token, {
          expires: moment().add(7, 'days')._d,
          path: '/'
        });
        cookies.save('firstname', res.data.first_name, {
          expires: moment().add(7, 'days')._d,
          path: '/'
        });
        axios.defaults.headers.common['Authorization'] = `JWT ${this.token}`
        return {
          status: true,
          msg: res.data
        };
      }).catch(err => {
        return {
          status: false,
          msg: err.response
        }
      });
  }
  @action checkEmail = (email) => {
    let postData = { "email": email }
    return axios.post(`/codes/`, postData)
  }
}

export default new AuthStore();
