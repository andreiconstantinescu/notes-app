'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var Notes = require('../models/notes-collection');
var Note = require('../models/note');
var NoteView = require('../views/note');
var $ = require ('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Home',
  template: templates.pages.home,

  events: {
    "keypress #new-note":  "createOnEnter"
  },

  initialize: function() {
    this.$el.html(this.template());
    this.collection = new Notes();
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'all', this.render);
    //
    this.main = this.$('#main');
    //
    this.collection.fetch();
  },
  render: function () {

    if (this.collection.length) {
      this.main.show();
    } else {
      this.main.hide();
    }
    // return this;
  },

  addOne: function(note) {
    var view = new NoteView({
      model: note
    });
    this.$("#note-list").prepend(view.render().el);
  },

  addAll: function() {
    console.log(this.collection.length);
    this.collection.each(this.addOne, this);
  },

  createOnEnter: function(e) {
    var noteInput = $(e.target);
    if(e.keyCode === 13) {
      var note = new Note({
        title: noteInput.val()
      });
      this.collection.create(note);
      noteInput.val('');
    }
  }

});
