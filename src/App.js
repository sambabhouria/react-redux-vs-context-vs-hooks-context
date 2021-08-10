import React, { useState, useMemo  } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';

import ProductsPageContext from './pages/ProductsContext';
import CartPageContext from './pages/CartContext';
import { UserContext } from "./context/UserContext";

import {About} from './pages/about';
import {Index} from './pages/index';


import './App.css';

function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/productcontext" component={ProductsPageContext} exact />
            <Route path="/cartcontext" component={CartPageContext} exact />
              {/* component i wrapped to be able to acces the context index and about */}
             {/* <UserContext.Provider value="Hello I am from the contextw"> */}
             {/* The adventage of the context we can access the value of the context
             no matter how deep is the children */}
             <UserContext.Provider value={value}>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
}

export default App;
