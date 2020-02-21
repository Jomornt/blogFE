import React, { Component } from 'react'
import {
  ArticlePageWrapper
} from '../style'

class ArticlePage extends Component {
  render() {
    return (
      <ArticlePageWrapper>
        <div className="article">
          <div className="article-top">
            <h2>祝大家新年/元旦快乐</h2>
            {/* <div className="article-top-info">2018.09.27 13:54:40 字数 573 阅读 17,575</div> */}
          </div>
          <p>
          Nunc dignissim volutpat enim, non sollicitudin purus dignissim id. Nam sit amet urna eu velit lacinia eleifend. Proin auctor rhoncus ligula nec aliquet. Donec sodales molestie lacinia. Curabitur dictum faucibus urna at convallis. Aliquam in lectus at urna rutrum porta. In lacus arcu, molestie ut vestibulum ut, rhoncus sed eros. Sed et elit vitae risus pretium consectetur vel in mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus turpis quis lectus rhoncus adipiscing. Proin pulvinar placerat suscipit. Maecenas imperdiet, quam vitae varius auctor, enim mauris vulputate sapien, nec laoreet neque diam non quam.
          Nunc dignissim volutpat enim, non sollicitudin purus dignissim id. Nam sit amet urna eu velit lacinia eleifend. Proin auctor rhoncus ligula nec aliquet. Donec sodales molestie lacinia. Curabitur dictum faucibus urna at convallis. Aliquam in lectus at urna rutrum porta. In lacus arcu, molestie ut vestibulum ut, rhoncus sed eros. Sed et elit vitae risus pretium consectetur vel in mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus turpis quis lectus rhoncus adipiscing. Proin pulvinar placerat suscipit. Maecenas imperdiet, quam vitae varius auctor, enim mauris vulputate sapien, nec laoreet neque diam non quam.
          Nunc dignissim volu<br /><br />
          tpat enim, non sollicitudin purus dignissim id. Nam sit amet urna eu velit lacinia eleifend. Proin auctor rhoncus ligula nec aliquet. Donec sodales molestie lacinia. Curabitur dictum faucibus urna at convallis. Aliquam in lectus at urna rutrum porta. In lacus arcu, molestie ut vestibulum ut, rhoncus sed eros. Sed et elit vitae risus pretium consectetur vel in mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus turpis quis lectus rhoncus adipiscing. Proin pulvinar placerat suscipit. Maecenas imperdiet, quam vitae varius auctor, enim mauris vulputate sapien, nec laoreet neque diam non quam.
          </p>
          <div className="article-bottom">
            <div className="article-like">👍</div><span>12人喜欢</span>
            <div className="article-share">分</div>
          </div>
        </div>


        <div className="comment">
          <div className="user-info">
            <img />
            <div className="user-detail">
              <input placeholder="您的昵称" />
              <input placeholder="您的邮箱" />
            </div>
          </div>
          <textarea className="comment-content">

          </textarea>
          <div className="submit-btn">Comment</div>
          <div className="comment-title">
            全部评论
          </div>
          <div className="vistor-comment">
            <div className="vistor-comment-item" >
              <div className="vistor-comment-item-top">
                <img />
                <div className="vistor-comment-item-top-userinfo">
                  <div className="vistor-comment-item-top-userinfo-name">安全</div>
                  <div className="vistor-comment-item-top-userinfo-time">2020-01-09 12:54</div>
                </div>
                <div className="vistor-comment-item-btn">Replay</div>
              </div>
              <div className="vistor-comment-content">
              数据库保存的是经过加密的，得到数据库也无法破解。其实这类安全软件最大的问题就是：泄漏了主密码，就等于全部密码泄露了。所以主密码也得够复杂，然后加上二步验证。
              </div>
              <div className="vistor-comment-item-replay">
              <div className="vistor-comment-item" >
                <div className="vistor-comment-item-top">
                  <img />
                  <div className="vistor-comment-item-top-userinfo">
                    <div className="vistor-comment-item-top-userinfo-name">安全</div>
                    <div className="vistor-comment-item-top-userinfo-time">2020-01-09 12:54</div>
                  </div>
                  <div className="vistor-comment-item-btn">Replay</div>
                </div>
                <div className="vistor-comment-content">
                数据库保存的是经过加密的
                </div>
              </div>
              <div className="vistor-comment-item" >
                <div className="vistor-comment-item-top">
                  <img />
                  <div className="vistor-comment-item-top-userinfo">
                    <div className="vistor-comment-item-top-userinfo-name">安全</div>
                    <div className="vistor-comment-item-top-userinfo-time">2020-01-09 12:54</div>
                  </div>
                  <div className="vistor-comment-item-btn">Replay</div>
                </div>
                <div className="vistor-comment-content">
                数据库保存的是经过加密的数据库保存的是经过加密的数据库保存的是经过加密的数据库保存的是经过加密的数据库保存的是经过加密的数据库保存的是经过加密的
                </div>
              </div>
              </div>
            </div>

            <div className="vistor-comment-item" >
              <div className="vistor-comment-item-top">
                <img />
                <div className="vistor-comment-item-top-userinfo">
                  <div className="vistor-comment-item-top-userinfo-name">安全</div>
                  <div className="vistor-comment-item-top-userinfo-time">2020-01-09 12:54</div>
                </div>
                <div className="vistor-comment-item-btn">Replay</div>
              </div>
              <div className="vistor-comment-content">
              数据库保存的是经过加密的
              </div>
            </div>
          </div>
        </div>
      </ArticlePageWrapper>
    )
  }
}

export default ArticlePage;