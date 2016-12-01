'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InvestButton = require('./InvestButton');

var _InvestButton2 = _interopRequireDefault(_InvestButton);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

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
            var data = Array.from(this.state.loans),
                formData = this.refs.form.getData(),
                maxInvestment = parseInt(data[this.state.dialog]['available'], 10),
                userInvestment = parseInt(formData['investment_amount'], 10);

            if (isNaN(userInvestment)) {
                console.error('Investment must be a numerical value');
                return;
            }

            if (userInvestment > maxInvestment) {
                console.error('Investment can not be more than the available amount');
                return;
            }

            data[this.state.dialog]['available'] = maxInvestment - userInvestment;
            this.setState({
                dialog: null,
                loans: data
            });
        }
    }, {
        key: '_viewInvestment',
        value: function _viewInvestment(loanIdx) {
            this.setState({ dialog: loanIdx });
        }
    }, {
        key: '_renderDialog',
        value: function _renderDialog() {
            if (this.state.dialog === null) {
                return null;
            }
            var currentLoan = this.state.loans[this.state.dialog];
            return _react2.default.createElement(
                _Dialog2.default,
                { onAction: this._saveInvestment.bind(this) },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Invest in ',
                    currentLoan.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Expected Interest ',
                    currentLoan.annualised_return,
                    '%'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Investment remaining: \xA3',
                    currentLoan.available,
                    ' (of \xA3',
                    currentLoan.amount,
                    ')'
                ),
                _react2.default.createElement(_Form2.default, {
                    ref: 'form',
                    fields: this.props.schema,
                    initialData: currentLoan })
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
                            { className: 'Loan', key: idx },
                            _react2.default.createElement(
                                'h2',
                                null,
                                loan.title
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Expected Interest: ',
                                loan.annualised_return,
                                '%'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Investment remaining: \xA3',
                                loan.available,
                                ' (of \xA3',
                                loan.amount,
                                ')'
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
    initialData: _react.PropTypes.arrayOf(_react.PropTypes.object),
    schema: _react.PropTypes.arrayOf(_react.PropTypes.object)
};

exports.default = Loans;