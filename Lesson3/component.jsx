/*
  Lesson 3 Challenge
  - How else could you render this component in the React online compiler?
  - Try it here: https://nextleap.app/online-compiler/reactjs-programming
  - Consider different approaches: defining mock data inline, passing data as props from a parent, or managing data in state.
  - Deciding how to set up imports/exports in that environment is part of the challenge.
*/

import React from 'react';

function App() {
  return (
    <div>
      <h2 style={{ marginLeft: '16px' }}>🎬 My Movie Picks</h2>
      <div style={galleryStyle}>
        {movies.map((movie, index) => (
          <div key={index} style={cardStyle}>
            <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
            <p style={titleStyle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

 