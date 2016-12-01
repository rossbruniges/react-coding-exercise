'use strict';

/*
 - create wrapper compontent to display the list itself
 - create compontent for displaying the data
 - modalar window functionality
  - highlight invested state
 - total price of investments
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Loans from './components/Loans';

import schema from './schema';

fetch('data/loans.json').then(function(response) {
    return response.json();
}).then(function(json) {
    let data = json.loans;
    ReactDOM.render(
    <div>
        <h1>Current Loans</h1>
        <Loans initialData={data} schema={schema} />
    </div>,
    document.getElementById('app')
    );
});
