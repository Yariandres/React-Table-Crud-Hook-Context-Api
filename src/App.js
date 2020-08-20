import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home-component';
import { AddUser } from './components/addUser/AddUser-component';
import { EditUser } from './components/editUser/EditUser-component';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <div style={{ maxWidth: '30rem', margin: '4rem auto'}}>
        <Router>   
          <Switch>          
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={AddUser}/>
            <Route path='/edit/:id' component={EditUser}/>          
          </Switch>        
        </Router>      
      </div>
    </GlobalProvider>
  );
}

export default App;
