import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './Components/Heading/Heading';
import Images from './Components/Images/Images';
import State from './Components/State/State';
import Events from './Components/Events/Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode >
  <Heading title="Props and array-mapping" />
  <Images />
  <Heading title="States and conditional rendering" />
  <State />
  <Heading title="Events" />
  <Events />
</React.StrictMode>
</>
);

