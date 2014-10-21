window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.$el = options.el;
    var collection = NewsReader.Collections.feeds;
    collection.fetch();
    new NewsReader.Routers.Router({el: this.$el, collection: collection});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize({el: $("div.content")});
});
