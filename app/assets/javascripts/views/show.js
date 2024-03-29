NewsReader.Views.Show = Backbone.View.extend({
  template: JST["show"],

  events: {
    "click a.refresh" : "refresh"
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var template = this.template({feed: this.model});
    this.$el.html(template);
    return this;
  },

  refresh: function() {
    this.model.fetch();
  }

});