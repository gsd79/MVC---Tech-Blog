const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_body: 'this is a post or something',
    user_id: 10
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
