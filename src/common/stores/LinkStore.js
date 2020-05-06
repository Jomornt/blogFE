import { action, observable } from "mobx";
import axios from '../../utils/axios'
class CommentStore {
  @observable LinksList = []
  @observable loading = false;

  @action getLinks = () => {
    this.loading = true;
    axios.get(`/links`)
    .then(res => {
      this.LinksList = res.data;
    });
  }
}

export default new CommentStore();
