export const imgNotFound =
  "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg";

export const newsDataAPI_URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=25405f8e540947ac943d372472eade78";

export const fetcher = (url) => fetch(url).then((res) => res.json());
