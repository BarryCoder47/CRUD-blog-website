const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require("./models/blog");
const { result } = require("lodash");

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://demouser:test1234@cluster0.tw5jazj.mongodb.net/node-server?retryWrites=true&w=majority';
mongoose.connect(dbURI)
 .then((result) => app.listen(3000), console.log('connect to db'))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));
app.use((req,res,next)=>{
  res.locals.path = req.path;
  next();
})

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title : 'new blog 2',
    snippet : 'about my new blog',
    body : 'more about interest blogs'
  });
  blog.save()
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
})
app.get('/all-blogs', (req,res)=>{
  Blog.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
})

app.get('/single-blog', (req,res) => {
  Blog.findById('65182f8acf2e374a092e9ce8')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  });
})
app.get("/", (req, res) => {
 res.redirect('/blogs');
});

app.get("/about", (req, res) => {
  res.render('about', {title : 'About'});
});
    //blog routes

app.get('/blogs/create', (req,res)=>{
  res.render('create',  {title : 'Crteate a new Blog'});
})

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error'); // Send an error response for internal server errors
    });
});

//404 page
app.use((req, res) => {
  res.status(404).render('404', {title :'404'});
});
