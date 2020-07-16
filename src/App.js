import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageinscreen from "./imageInSrc.jpg"
import './style.css'
function App() {
  return (
    <div>
    <div style={{border:'solid 1px black',maxWidth:"100vw"}}>  
 
      <h1 className="title red">Your name here </h1>  

          <img src={imageinscreen}/> 

             <img src='/imageInPublic.jpg' />  

    </div>  
{/* 
  <video width="320" height="240" controls>  

      <source src="myVideo.mp4" type="video/mp4"/>  */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4bPGxLxogvw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {/* </video>  */}
  </div>
  );
}

export default App;
