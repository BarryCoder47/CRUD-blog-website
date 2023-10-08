const express = require('express')
const blogConroller = require('../controller/blogController')
const router = express.Router();

router.get('/', blogConroller.blog_index);
  
  router.post('/', blogConroller.blog_create_post);
  
  router.get('/create', blogConroller.blog_create_get);

  router.get('/blogs/:id', blogConroller.blog_details);
  
  router.delete('/:id', blogConroller.blog_create_delete);


  module.exports = router;