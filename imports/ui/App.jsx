import React, { useEffect, useState } from 'react';
import { Post } from './Post.jsx';

export const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Meteor.call('getResultsFromReddit', (_, result) => {
      setPosts(posts.concat(result));
		});
  }, [])

  return (
    <div>
      <h1>Reddit</h1>
        <div className="thumbnails">
          {posts.map(post => {
            return <Post key={post.id} post={post}/>
          })}
        </div>
    </div>
  );
};
