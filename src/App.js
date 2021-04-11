import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import NameList from './components/pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NameListC from './components/pages/NameListC/NameListC';


function App(){
    return (
<div>
  <BrowserRouter>
    <HeaderBar/>
    <Switch>
    <Route path="/about">
        <About/>
      </Route>
      <Route path="/namelist">
      <NameList />
      </Route>
       <Route path="/namelistc">
      <NameListC />
      </Route>
      <Route path="/">
          <Home/>
      </Route>
    </Switch>
  </BrowserRouter>

</div>
    );
}
export default App;