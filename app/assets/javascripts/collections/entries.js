NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: function() {this.feed.url + '/entries'},
  model: NewsReader.Models.Entry,

  initialize: function(models, options){
    this.feed = options.feed;
  }

})