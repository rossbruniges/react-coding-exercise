import React, {Component, PropTypes} from 'react';

import InvestButton from './InvestButton';
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
        console.log(action, 'inside _saveInvestment');
    }

    _viewInvestment(loanIdx) {
        this.setState({ dialog: loanIdx});
    }

    _renderDialog() {
        if (!this.state.dialog) {
            return null;
        }
        return(
            <Dialog onAction={this._saveInvestment.bind(this)}>
                <p>Dialog contents - this will be a form but for now am happy with anything</p>
            </Dialog>
        );
    }

    render() {
        return(
            <div className="Loans">
                <ul>
                    {this.state.loans.map((loan, idx) => {
                        return (
                            <li key={idx}>
                                <h2>{loan.title}</h2>
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
    )
};

export default Loans
