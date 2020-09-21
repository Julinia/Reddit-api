import React from 'react';

export const Post = ({ post }) => {
  return (
    <div className="thumbnail">
      <div className="thumbnail-content">
        <div className="image">
          { post.thumbnail ?
            <img src={post.thumbnail}>
            </img>
          : null}
        </div>
        <div className="content">
          <p className="author">
            Author: {post.author}
          </p>
          <p className="title">
            {post.title}
          </p>
          <a href={'https://www.reddit.com' + post.permalink}> Go to the post</a>
        </div>
      </div>
    </div>
  );
}