'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.classList.remove('DialogModalOpen');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.classList.add('DialogModalOpen');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Dialog' },
        _react2.default.createElement(
          'div',
          { className: 'DialogModalWrap' },
          _react2.default.createElement(
            'div',
            { className: 'DialogHeader' },
            'Invest in Loan'
          ),
          _react2.default.createElement(
            'div',
            { className: 'DialogBody' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'DialogFooter' },
            _react2.default.createElement(
              'span',
              {
                tabIndex: '0',
                className: 'DialogDismiss',
                onClick: this.props.onAction.bind(this, 'dismiss') },
              'Cancel'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.props.onAction.bind(this, 'confirm') },
              'Invest'
            )
          )
        )
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  onAction: _react.PropTypes.func
};

Dialog.defaultProps = {
  onAction: function onAction() {}
};

exports.default = Dialog;