import { Mongo } from 'meteor/mongo';

Meteor.methods({
    getResultsFromReddit: function() {
      var response = HTTP.call('GET', 'http://www.reddit.com/r/popular/.json', {});
      var trim = response["data"];
      return trim["data"]["children"];
    }
  });