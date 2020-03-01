import { action, observable } from "mobx";
import {toJS} from "mobx"
import axios from 'axios'
import moment from 'moment'
import cookies from 'react-cookies';
// import qs from 'Qs'

class AuthStore {
  @observable isLogin = false;
  @observable token = "";
  @observable name = "";

  @action login = (email, password) => {
    let postData = { "username": email, "password": password }
    return axios.post(`http://localhost:8000/login/`, postData)
      .then(res => {
        this.token = res.data.token
        if(!cookies.load('token')) {
          cookies.save('token', res.data.token, {
            expires: moment().add(7, 'days')._d
          });
        }
        axios.defaults.headers.common['Authorization'] = `JWT ${this.token}`
        return true
      }).catch(err => {
        return false
      });
  }
}

export default new AuthStore();
