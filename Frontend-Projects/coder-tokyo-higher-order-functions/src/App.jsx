import React from 'react';
import './App.css';
import AwesomeImage from './components/AwesomeImage';
import withHoverEffect from './components/withHoverEffect';

function App() {
  const src = "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const width = 300;
  const height = 200;
  const opacity = 0.6;
  const HoveredImage = withHoverEffect(AwesomeImage, opacity);

  return (
    <div className="App">
      <HoveredImage src={src} width={width} height={height} />
    </div>
  );
}

export default App;
