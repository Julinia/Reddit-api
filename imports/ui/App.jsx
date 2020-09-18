import React, { useEffect } from 'react';
import { Post } from './Post.jsx';



export const App = () => {

  useEffect(() => {
    Meteor.call('getResultsFromReddit', (_, result) => {
			console.log(result);
		});
  }, [])


  return (
    <div>
      <h1>Welcome to Meteor!</h1>
    </div>
  );
};
