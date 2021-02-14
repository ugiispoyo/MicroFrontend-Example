import React from 'react';

import ReactApp from './components/ReactApp';
import VueApp from './components/VueApp';

export default () => {
    return <div>
        <h1>Hallo ini contoh microfrontend</h1>
        <hr/>
        <ReactApp />
        <VueApp />
    </div>
};