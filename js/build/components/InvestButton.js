"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvestButton = function InvestButton(props) {
  return _react2.default.createElement(
    "div",
    { className: "InvestButton" },
    _react2.default.createElement(
      "button",
      {
        onClick: props.onAction.bind(undefined) },
      "Invest in Loan"
    )
  );
};

InvestButton.propTypes = {
  onAction: _react.PropTypes.func
};

InvestButton.defaultProps = {
  onAction: function onAction() {}
};

exports.default = InvestButton;