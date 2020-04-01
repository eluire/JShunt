import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Products from './pages/product/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component ={Main}/>
                <Route path="/products/:id" exact={true} component={Products}/>   
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;