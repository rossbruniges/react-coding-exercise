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
                {this.state.loans.map((loan, idx) => {
                    return (
                        <li key={idx}>
                            <h2>{loan.title}</h2>
                        </li>
                    );
                }, this)}
            </ul>
        );
    }
}

Loans.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default Loans
