'use strict';

var Backbone = require('../shims/backbone');
var Collection = Backbone.Collection;
var LocalStorage = require('backbone.localstorage');
var Note = require('./note');

module.exports = Collection.extend({
    model: Note,
    localStorage: new LocalStorage("Notes-app-backbone-1"),
    comparator: 'order'
});
