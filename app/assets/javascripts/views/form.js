NewsReader.Views.Form = Backbone.View.extend({
  template: JST["form"],

  events: {
    "submit form" : "createNewFeed"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  createNewFeed: function(event) {
    event.preventDefault();
    var that = this;
    var form = $(event.currentTarget);
    var formData = form.serializeJSON();
    var newFeed = this.collection.create(formData, {
      success: function() {
        that.remove();
      },

      error: function (data, response) {
        console.log("gosh that didn't work");
      }
    })
  }

});