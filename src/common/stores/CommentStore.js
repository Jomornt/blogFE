import { action, observable } from "mobx";
import {toJS} from "mobx"
import axios from 'axios'
import moment from 'moment'
import cookie from 'react-cookies';
// import qs from 'Qs'

class CommentStore {
  @observable isLogin = false;
  @observable token = "";

  @action addComment = (email, password) => {
    let postData = { "username": email, "password": password }

  }
}

export default new CommentStore();
