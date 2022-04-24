const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'peanutthecat',
    email: 'toebeans@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'peanutthecat',
    email: 'toebeans@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'janethecat',
    email: 'toebeans2@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'skippythecat',
    email: 'toebeans3@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'cabincatthecat',
    email: 'toebeans4@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'houdinithecat',
    email: 'toebeans5@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'gracethecat',
    email: 'toebeans6@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'emmathecat',
    email: 'toebeans7@cat.com',
    password: 'catpuccino123'
  },
  {
    username: 'kevinthecat',
    email: 'toebeans8@cat.com',
    password: 'catpuccino123'
  },
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
