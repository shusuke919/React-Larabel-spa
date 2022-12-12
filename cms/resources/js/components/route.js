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
import GlobalNav from './pages/GlobalNav';



axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


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
      <GlobalNav />
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
