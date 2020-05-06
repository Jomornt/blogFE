import { action, observable } from "mobx";
import qs from 'qs'
import cookies from 'react-cookies';
import axios from '../../utils/axios'

class ArticleStore {
  @observable loading = false;
  @observable articleList = [];
  @observable articleDetail = null;
  @observable tags = []
  @observable count = 0;
  @observable categories = [];
  @observable isLiked = false;


  @action getArticleList = (page = 1) => {
    this.loading = true;
    axios.get(`/articles/?page=${page}`).then(res => {
      this.articleList = res.data.results;
      this.count = res.data.count;
      this.loading = false;
    });
  }

  @action getArticleDetail = (id) => {
    this.loading = true;
    axios.get(`/articles/${id}`).then(res => {
      this.articleDetail = res.data;
      this.loading = false;
    });
  }
  @action updateArticleList = (params) => {
    this.loading = true;
    axios.get(`/articles/?${qs.stringify(params)}`).then(res => {
      this.articleList = res.data.results;
      this.count = res.data.count;
      this.loading = false;
    });
  }
  @action getArticleTags = () => {
    this.loading = true;
    axios.get(`/tags`).then(res => {
      this.tags = res.data;
      this.loading = false;
    });
  }
  @action getArticleCategories = () => {
    this.loading = true;
    axios.get(`/categories/`).then(res => {
      this.categories = res.data;
      this.loading = false;
    });
  }
  @action addArticleFav = (article) => {
    let postData = { "article": article }
    axios.post(`/userfavs/`, postData)
  }
  @action getArticleFav = (article) => {
    let token = cookies.load('token')
    this.isLiked = false;
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      axios.defaults.headers.common["Authorization"] = `JWT ${token}`;;
    }
    axios.get(`/userfavs/${article}`)
    .then((res) => {
      this.isLiked = true;
    })
    .catch(() => {
      this.isLiked = false;
    })
  }
  @action addFav = (id) => {
    let postData = { "articles": id }
    return axios.post(`/userfavs/`, postData)
  }
}

export default new ArticleStore();
