NewsReader.Views.Index = Backbone.View.extend({
  template: JST["index"],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var template = this.template({collection: this.collection});
    this.$el.html(template);
    return this;
  }
});