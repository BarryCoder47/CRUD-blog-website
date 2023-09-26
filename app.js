const express = require("express");

// express app
const app = express();

//listen for request
app.listen(3000);
//index page

app.get("/", (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});
//about page
app.get("/about", (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});
//redirect about page
app.get("/about-us", (req, res) => {
  res.redirect('/about');
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
