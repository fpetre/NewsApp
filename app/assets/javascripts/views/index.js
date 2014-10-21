NewsReader.Views.Index = Backbone.View.extend({
  template: JST["index"],

  events: {
    "click a.delete": "confirmDelete"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function() {
    var template = this.template({collection: this.collection});
    this.$el.html(template);
    return this;
  },

  confirmDelete: function(event) {
    event.preventDefault();
    var model = this.collection.getOrFetch($(event.currentTarget).attr("id"));

    if (window.confirm("This will delete the " + model.escape("title") + "feed.")) {
      this.deleteFeed(model);
    }
  },

  deleteFeed: function(model) {
    model.destroy();
  }


});