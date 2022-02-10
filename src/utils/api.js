// import axios from "axios";

// const newsApi = axios.create({
//   baseURL: "https://nc-news-gsinghg19.herokuapp.com/api",
// });

// export const getAllArticles = () => {
//   return newsApi.get(`/articles`).then((res) => {
//     return res.data.allArticles;
//   });
// };

// export const getSingleArticle = (article_id) => {
//   return newsApi.get(`/articles/${article_id}`).then((res) => {
//     return res.data;
//   });
// };

// export const getAllTopics = () => {
//   return newsApi.get(`/topics`).then((res) => {
//     return res.data.topics;
//   });
// };

// export const getArticlesViaSingleTopic = (slug) => {
//   return newsApi.get(`/topics/${slug}`).then((res) => {
//     return res.data;
//   });
// };

// export const getAllUsers = () => {
//   return newsApi.get(`/users`).then((res) => {
//     return res.data.allTheUsers;
//   });
// };

// export const getSingleUser = (username) => {
//   return newsApi.get(`/users/${username}`).then((res) => {
//     return res.data;
//   });
// };

// export const fetchArticleCommentsByArticleId = (article_id) => {
//   return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
//     return res.data.commentsByArticleId;
//   });
// };

// export const postNewComment = (article_id) => {
//   return newsApi.post(`/articles/${article_id}/comments`).then((res) => {
//     return res.data;
//   });
// };

// export const deleteComment = (comment_id) => {
//   return newsApi.delete(`/comments/${comment_id}`).then(() => {});
// };

// export const patchVotes = (path, id, vote) => {
//   return newsApi
//     .patch(`/${path}/${id}`, {
//       inc_votes: vote,
//     })
//     .then((res) => {
//       return res.votes;
//     });
// };

const { ConstructionOutlined } = require("@mui/icons-material");
const axios = require("axios");

exports.getAllArticles = (articles) => {
  return axios
    .get("https://nc-news-gsinghg19.herokuapp.com/api/articles")
    .then(({ data: { allArticles } }) => {
      return allArticles;
    });
};

exports.getSingleArticle = (article_id) => {
  return axios
    .get(`https://nc-news-gsinghg19.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: res }) => {
      return res;
    });
};

exports.getAllTopics = () => {
  return axios
    .get("https://nc-news-gsinghg19.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

exports.getArticlesViaSingleTopic = (slug) => {
  return axios
    .get(`https://nc-news-gsinghg19.herokuapp.com/topics/${slug}`)
    .then(({ data: { slug } }) => {
      return slug;
    });
};

exports.postNewComment = (article_id, comment) => {
  return axios
    .post(
      `https://nc-news-gsinghg19.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

exports.deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://nc-news-gsinghg19.herokuapp.com/api/comments/${comment_id}`
    )
    .then(() => {});
};

exports.patchVotes = (path, id, vote) => {
  return axios
    .patch(`https://nc-news-gsinghg19.herokuapp.com/api/${path}/${id}`, {
      inc_votes: vote,
    })
    .then(({ data: { votes } }) => {
      return votes;
    });
};

exports.fetchArticleCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://nc-news-gsinghg19.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      console.log(res.data.commentsByArticleId);
      return res.data.commentsByArticleId;
    });
};

exports.getSingleUser = (username) => {
  return axios
    .get(`https://nc-news-gsinghg19.herokuapp.com/api/users/${username}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
