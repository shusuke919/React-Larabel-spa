import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';


axios.defaults.baseURL = "http://127.0.0.1:8000/";


  function App() {
    return (
        <div>
            <Switch>
             //ここに、pathと対応するコンポーネントを書いていく
             <Route path='/' exact component={Home} />
             <Route path='/register' exact component={Register} />
             <Route path='/login' exact component={Login} />
            </Switch>
            
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
