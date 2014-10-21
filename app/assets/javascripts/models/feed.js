NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  validate: function(attributes) {
    console.log(attributes);
    if (NewsReader.Collections.feeds.where({url: attributes.feed.url}).length > 0) {
      console.log("validates");
      return "that already exists";
    }
  },

  entries: function() {
    if(!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {feed: this});
    }

    return this._entries;
  },

  parse: function(jsonResp) {
    if(jsonResp.latest_entries) {
      this.entries().set(jsonResp.latest_entries, {parse: true});
      delete jsonResp.latest_entries;
    }

    return jsonResp;
  }
})