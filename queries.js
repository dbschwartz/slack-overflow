var knex = require('./db/knex.js');

var auth_levels = function(){
   return knex('auth_levels');
};

var users = function(){
  return knex('users');
};

var assignments = function(){
    return knex('assignments');
};

var questions = function() {
    return knex('questions');
};

var answers = function() {
    return knex('answers');
};

var answers = function() {
    return knex('user_groups');
};

var answers = function() {
    return knex('tags');
};

var subscriptions = function() {
    return knex('subscriptions');
};

var weeks = function() {
    return knex('weeks');
};
var class_info = function() {
    return knex('class_info');
};

module.exports = {

   getQuestions: function(){
        return restaurants().select();
    },
