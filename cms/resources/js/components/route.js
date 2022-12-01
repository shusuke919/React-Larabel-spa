import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

  function App() {
    return (
        <div>
            <Switch>
             //ここに、pathと対応するコンポーネントを書いていく
             <Route path='/' exact component={Home} />
             <Route path='/r' exact component={Register} />
            </Switch>
            
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
