import React from 'react';
import BlogPost from './BlogPost';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen p-4" style={{backgroundImage: "url('images/background.jpg')", backgroundAttachment: "fixed"}}>
      <div className="container mx-auto">
        <BlogPost />
      </div>
    </div>
  );
}

export default App;
