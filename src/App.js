import React, { useState } from 'react';
import AppNav from './components/AppNav';
import Hero from './components/Hero';
import ReactRevelaMenu from './components/ReactRevelaMenu';
import SkeletonContainer from './components/SkeletonContainer';
import './styles/General.css';
function App() {
  
  const animationDirections = ['top', 'right', 'bottom', 'left'];
  const [anmyType, setAnmyType] = useState('Fade');
  const [navType, setNavType] = useState('Skeleton');
  const [bothListener, setBothListener] = useState(null);


  return (
    <div className="App">
      <Hero />
      <AppNav setNavType={setNavType} setBothListener={setBothListener}/>
      <div className={`appMain ${navType}`}>
        <ReactRevelaMenu setAnmyType={setAnmyType}/>
        <SkeletonContainer navType={navType} animationType = {anmyType} bothListener={bothListener} />
      </div>
    </div>
  );
}

export default App;
