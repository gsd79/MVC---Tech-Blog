const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Okay! Say less!',
    user_id: 10,
    post_id: 1
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
