window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.$el = options.el;
    new NewsReader.Routers.Router({el: this.$el});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize({el: $("div.content")});
});
