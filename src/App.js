import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.componet'

import { Route} from 'react-router-dom'


function Hat() {
  return (
    <div>
      Hat
    </div>
  )
}

function App() {
  return (
    <div className="App">

        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={false} path='/shop/hats' component={Hat}/>

      
    </div>
  );
}

export default App;
