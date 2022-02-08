import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://gsinghg19-be-nc-news-app.herokuapp.com/api",
});

export const getAllArticles = () => {
  return newsApi.get(`/articles`).then((res) => {
    return res.data.allArticles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getAllTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getArticlesViaSingleTopic = (slug) => {
  return newsApi.get(`/topics/${slug}`).then((res) => {
    return res.data;
  });
};

export const getAllUsers = () => {
  return newsApi.get(`/users`).then((res) => {
    return res.data.allTheUsers;
  });
};

export const getSingleUser = (username) => {
  return newsApi.get(`/users/${username}`).then((res) => {
    return res.data;
  });
};

export const fetchArticleCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.commentsByArticleId;
  });
};

export const postNewComment = (article_id) => {
  return newsApi.post(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then(() => {});
};

export const patchVotes = (path, id, vote) => {
  return newsApi
    .patch(`/${path}/${id}`, {
      inc_votes: vote,
    })
    .then((res) => {
      return res.votes;
    });
};
