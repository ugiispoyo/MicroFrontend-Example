import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Test from './components/Test';

export default () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Test} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};