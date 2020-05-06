import { action, observable } from "mobx";
import axios from '../../utils/axios'
import cookies from 'react-cookies';
class CommentStore {
  @observable commentsList = []
  @observable loading = false;

  @action addComment = (type, content, article) => {
    let postData = { "type": type, "content": content, "article": article, "username": decodeURIComponent(cookies.load("username"))}
    return axios.post(`comments/`, postData)
      .then(res => {
        this.getComments(type, article)
        return true
      }).catch(err => {
        console.log(4321)
        return false
      });
  }
  @action addReply = (content, parent, replyto, type, article) => {
    let postData = { "content": content, "parent": parent, "reply_to": replyto}
    return axios.post(`reply/`, postData)
      .then(res => {
        this.getComments(type, article)
        return true
      }).catch(err => {
        return false
      });
  }
  @action getComments = (type, article) => {
    this.loading = true;
    axios.get(`comments/?type=${type}&article=${article}`)
    .then(res => {
      this.commentsList = res.data;
      console.log(res.data)
      this.loading = false;
    });
  }
}

export default new CommentStore();
