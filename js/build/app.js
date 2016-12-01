'use strict';

/*
 - create wrapper compontent to display the list itself
 - create compontent for displaying the data
 - modalar window functionality
  - highlight invested state
 - total price of investments
*/

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Loans = require('./components/Loans');

var _Loans2 = _interopRequireDefault(_Loans);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

fetch('data/loans.json').then(function (response) {
    return response.json();
}).then(function (json) {
    var data = json.loans;
    _reactDom2.default.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Current Loans'
        ),
        _react2.default.createElement(_Loans2.default, { initialData: data, schema: _schema2.default })
    ), document.getElementById('app'));
});