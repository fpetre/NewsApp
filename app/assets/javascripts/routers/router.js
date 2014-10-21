NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/:id" : "feedShow"
  },

  initialize: function(options) {
    this.$el = options.el;
  },

  feedsIndex: function() {
    var collection = NewsReader.Collections.feeds;
    collection.fetch();
    var index = new NewsReader.Views.Index({collection: collection});
    this.$el.html(index.render().$el);
  },

  feedShow: function() {alert("feed show");}

})