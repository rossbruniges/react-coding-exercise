'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InvestButton = require('./InvestButton');

var _InvestButton2 = _interopRequireDefault(_InvestButton);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loans = function (_Component) {
    _inherits(Loans, _Component);

    function Loans(props) {
        _classCallCheck(this, Loans);

        var _this = _possibleConstructorReturn(this, (Loans.__proto__ || Object.getPrototypeOf(Loans)).call(this, props));

        _this.state = {
            loans: props.initialData,
            dialog: null
        };
        return _this;
    }

    _createClass(Loans, [{
        key: '_closeDialog',
        value: function _closeDialog() {
            this.setState({ dialog: null });
        }
    }, {
        key: '_saveInvestment',
        value: function _saveInvestment(action) {
            if (action === 'dismiss') {
                this._closeDialog();
            }
            console.log(action, 'inside _saveInvestment');
        }
    }, {
        key: '_viewInvestment',
        value: function _viewInvestment(loanIdx) {
            this.setState({ dialog: loanIdx });
        }
    }, {
        key: '_renderDialog',
        value: function _renderDialog() {
            if (!this.state.dialog) {
                return null;
            }
            return _react2.default.createElement(
                _Dialog2.default,
                { onAction: this._saveInvestment.bind(this) },
                _react2.default.createElement(
                    'p',
                    null,
                    'Dialog contents - this will be a form but for now am happy with anything'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'Loans' },
                _react2.default.createElement(
                    'ul',
                    null,
                    this.state.loans.map(function (loan, idx) {
                        return _react2.default.createElement(
                            'li',
                            { key: idx },
                            _react2.default.createElement(
                                'h2',
                                null,
                                loan.title
                            ),
                            _react2.default.createElement(_InvestButton2.default, { onAction: _this2._viewInvestment.bind(_this2, idx) })
                        );
                    }, this)
                ),
                this._renderDialog()
            );
        }
    }]);

    return Loans;
}(_react.Component);

Loans.propTypes = {
    initialData: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

exports.default = Loans;