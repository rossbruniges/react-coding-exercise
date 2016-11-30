import React, {PropTypes} from 'react';

const InvestButton = props =>  
  <div className="InvestButton">
    <button 
      onClick={props.onAction.bind(this)}>Invest in Loan</button>
  </div>

InvestButton.propTypes = {
  onAction: PropTypes.func,
};

InvestButton.defaultProps = {
  onAction: () => {},
};

export default InvestButton
