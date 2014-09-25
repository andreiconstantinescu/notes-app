'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'contact/': 'contact',
    'about/': 'about'
  },

  //Handlers
  home: function () {
    this.trigger('newPage', new HomePage({
    }));
  }
});
