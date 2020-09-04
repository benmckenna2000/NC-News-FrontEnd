import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bens-news-api-2020.herokuapp.com/api",
});

export const getArticles = () => {
  return axiosInstance.get("/articles").then((articles) => {
    return articles.data.articles;
  });
};

export const getArticle = (articleId) => {
  return axiosInstance.get(`/articles/${articleId}`).then((article) => {
    return article.data.article;
  });
};

export const getTopic = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const getComments = (articleId) => {
  return axiosInstance
    .get(`/articles/${articleId}/comments`)
    .then((comments) => {
      return comments.data.comments;
    });
};

export const getUsers = (username) => {
  return axiosInstance.get(`/users/${username}`).then((user) => {
    return user.data.user;
  });
};

export const postComment = (data, articleId) => {
  console.log(articleId, data);
  return axiosInstance
    .post(`/articles/${articleId}/comments`, data)
    .then((comment) => {
      console.log(comment);
    });
};
