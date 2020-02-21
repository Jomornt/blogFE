import { action, observable } from "mobx";
import axios from 'axios'

class ArticleStore {
  @observable loading = false;

  @action getArticleList = () => {
    axios.get(`/article`).then(res => {
      this.offers = res.data;
    });
  }
}

export default new ArticleStore();
