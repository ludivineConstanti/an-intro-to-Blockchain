export default (articlesData) => {
  const articlesObj = {};
  articlesData.forEach((article) => {
    if (!articlesObj[article.category_name]) {
      articlesObj[article.category_name] = {};
    }
    if (!articlesObj[article.category_name][article.quiz_title]) {
      articlesObj[article.category_name][article.quiz_title] = [];
      articlesObj[article.category_name][article.quiz_title].push(article);
    }
    else {
      articlesObj[article.category_name][article.quiz_title].push(article);
    }
  });
  return articlesObj;
};
