'use strict';

/*
 - create compontent for displaying the data
 - create wrapper compontent to display the list itself
 - modalar window functionality
  - open window and input value
  - click and update loans value
  - highlight invested state
 - total price of investments
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Loans from './components/Loans';

fetch('data/loans.json').then(function(response) {
    return response.json();
}).then(function(json) {
    let data = json.loans;
    ReactDOM.render(
    <div>
        <h1>Current Loans</h1>
        <Loans initialData={data} />
    </div>,
    document.getElementById('app')
    );
});
