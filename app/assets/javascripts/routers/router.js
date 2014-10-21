NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    "feeds/:id" : "feedShow"
  },

  initialize: function(options) {
    this.$el = options.el;
    this.collection = options.collection;
  },

  feedsIndex: function() {
    var index = new NewsReader.Views.Index({collection: this.collection});
    this.$el.html(index.render().$el);
  },

  feedShow: function(id) {
    var model = this.collection.getOrFetch(id);
    var show = new NewsReader.Views.Show({model: model});
    this.$el.html(show.render().$el);
  }

})