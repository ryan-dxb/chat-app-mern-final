import React from 'react';
import { NextPage } from 'next'

interface HomeProps {
  // Add your prop types here
}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* Add your page content here */}
    </div>
  );
};

export default Home;