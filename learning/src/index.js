import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Components/Heading/Heading';
import Images from './Components/Images/Images';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading />
    <Images link="https://img.icons8.com/color/48/html-5--v1.png" alt="html" />
    <Images link="https://img.icons8.com/plasticine/100/css3.png" alt="css" />
    <Images link="https://img.icons8.com/color/48/javascript--v1.png" alt="js" />
    <Images link="https://img.icons8.com/officel/16/react.png" alt="reaact" />
  </React.StrictMode>
);

