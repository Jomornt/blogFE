import { action, observable } from "mobx";
import {toJS} from "mobx"
import axios from 'axios'

class ArticleStore {
  @observable loading = false;
  @observable articleList = [];
  @observable articleDetail = null;
  @observable tags = []
  @observable count = 0;


  @action getArticleList = (page = 1) => {
    this.loading = true;
    axios.get(`http://localhost:8000/articles/?page=${page}`).then(res => {
      this.articleList = res.data.results;
      this.count = res.data.count;
      this.loading = false;
    });
  }

  @action getArticleDetail = (id) => {
    this.loading = true;
    axios.get(`http://localhost:8000/articles/${id}`).then(res => {
      this.articleDetail = res.data;
      this.loading = false;
    });
  }
  @action getArticleSearchResult = (key) => {
    this.loading = true;
    axios.get(`http://localhost:8000/articles/?search=${key}`).then(res => {
      this.articleList = res.data.results;
      this.count = res.data.count;
      this.loading = false;
    });
  }
  @action getArticleTags = () => {
    this.loading = true;
    axios.get(`http://localhost:8000/tags`).then(res => {
      this.tags = res.data;
      console.log(toJS(this.tags))
      this.loading = false;
    });
  }
}

export default new ArticleStore();
