import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('reddit-api');



Meteor.methods({
    getResultsFromReddit: function() {
      response = HTTP.call('GET', 'http://www.reddit.com/r/popular/.json', {});

      return response.data.data.children.map(function(item) {
        var data = item.data;
        var len = 200;
        
        var post = {
          id: data.id,
          title: data.title,
          author: data.author,
          permalink: data.permalink,
          thumbnail: false
        };

        if (data.thumbnail != "self" && Meteor.call('isUrl', data.thumbnail)) {
            post.thumbnail = data.thumbnail
        }

        return post;

      });
    },
    isUrl: function(url) {
      if (url.indexOf('http') > -1) { return true; }
      return false;
    }
  });