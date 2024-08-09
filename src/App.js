import React from 'react';

function App() {
  return (
    <div>
      <h1>Hi, I'm [Your Name]</h1>
      <img 
        src="https://i.pinimg.com/236x/c1/66/a3/c166a3fbbc9d48ad0cc87da791c6f483.jpg" 
        alt="A picture of Sharon" 
        style={{ width: '150px', height: '150px' }} // Optional styling
      />
      <h2>About Me</h2>
      <p>
        I am a softaware developer. This is a brief description about me.
      </p>
      <a href="https://www.linkedin.com/in/sharon-john-0008b814a" target="_blank" rel="noopener noreferrer">My GitHub</a>
      <br />
      <a href="https://github.com/SharonMawiaJohn" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
    </div>
  );
}

export default App;
