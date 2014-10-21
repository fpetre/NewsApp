NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: '/api/feeds',
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var that = this;
    var model;
    if(model = this.get(id)) {
      model.fetch();
    } else {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch();
      this.add(model);
    }

    return model;
  }

});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();


