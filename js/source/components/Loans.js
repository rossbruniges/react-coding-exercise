import React, {Component, PropTypes} from 'react';

class Loans extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loans: props.initialData
        }
    }

    render() {
        return(
            <ul>
                {this.state.loans.map((loan, loanidx) => {
                    return (
                        <li data-idx="{loanidx}">
                            <h2>{loan.title}</h2>
                        </li>
                    );
                }, this)}
            </ul>
        );
    }
}

export default Loans
