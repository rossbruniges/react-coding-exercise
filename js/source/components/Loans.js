import React, {Component, PropTypes} from 'react';

import InvestButton from './InvestButton';
import Form from './Form';
import Dialog from './Dialog';


class Loans extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loans: props.initialData,
            dialog: null,
        }
    }

    _closeDialog() {
        this.setState({ dialog: null});
    }

    _saveInvestment(action) {
        if (action === 'dismiss') {
            this._closeDialog();
        }
        let data = Array.from(this.state.loans),
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
            loans: data,
        });
    }

    _viewInvestment(loanIdx) {
        this.setState({ dialog: loanIdx});
    }

    _renderDialog() {
        if (this.state.dialog === null) {
            return null;
        }
        let currentLoan = this.state.loans[this.state.dialog];
        return(
            <Dialog onAction={this._saveInvestment.bind(this)}>
                <h2>Invest in {currentLoan.title}</h2>
                <p>Expected Interest {currentLoan.annualised_return}%</p>
                <p>Investment remaining: £{currentLoan.available} (of £{currentLoan.amount})</p>
                <Form
                    ref="form"
                    fields={this.props.schema}
                    initialData={currentLoan} />
            </Dialog>
        );
    }

    render() {
        return(
            <div className="Loans">
                <ul>
                    {this.state.loans.map((loan, idx) => {
                        return (
                            <li className="Loan" key={idx}>
                                <h2>{loan.title}</h2>
                                <p>Expected Interest: {loan.annualised_return}%</p>
                                <p>Investment remaining: £{loan.available} (of £{loan.amount})</p>
                                <InvestButton onAction={this._viewInvestment.bind(this, idx)}/>
                            </li>
                        );
                    }, this)}
                </ul>
                {this._renderDialog()}
            </div>
        );
    }
}

Loans.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.object
    ),
    schema: PropTypes.arrayOf(
        PropTypes.object
    ),
};

export default Loans
