import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import MainBody from './Components/Body/MainBody';
function App() {
  return (
    <div className='main_container'>
      <Header/>
      <MainBody/>
    </div>
  );
}

export default App;
