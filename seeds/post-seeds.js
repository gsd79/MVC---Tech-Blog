const { Post } = require('../models');

const postdata = [
  {
    title: 'We love posting',
    post_body: 'this is a post or something',
    user_id: 10
  },
  {
    title: 'We love posting for real',
    post_body: 'this is a post or something',
    user_id: 10
  },
  {
    title: 'We love posting more than you',
    post_body: 'this is a post or something',
    user_id: 10
  },
  {
    title: 'We love posting infity',
    post_body: 'this is a post or something',
    user_id: 10
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
