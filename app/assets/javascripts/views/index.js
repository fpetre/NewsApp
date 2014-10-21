NewsReader.Views.Index = Backbone.View.extend({
  template: JST["index"],

  events: {
    "click a.delete": "confirmDelete",
    "click a.new-feed" : "newFeedForm"
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

  form: function(){
    // if (!this._form) {
      console.log("made a new form");
      this._form = new NewsReader.Views.Form({collection: this.collection});
    // }

    return this._form;
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
  },

  newFeedForm: function(event) {
    event.preventDefault();
    this.$el.append(this.form().render().$el);
  }

});