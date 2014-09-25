'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,

  render: function () {
    this.$el.html(this.template());

    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = newView.pageTitle || 'Notes App';
        window.scrollTo(0, 0);

        app.currentPage = newView;
      }
    });
    return this;
  },

  setPage: function (view) {
    this.pageSwitcher.set(view);
  }
});
