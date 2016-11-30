import React, {Component, PropTypes} from 'react';

class Dialog extends Component {

  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen');
  }
  
  componentDidMount() {
    document.body.classList.add('DialogModalOpen');
  }
  
  render() {
    return (
      <div className='Dialog'>
        <div className='DialogModalWrap'>
          <div className="DialogHeader">Invest in Loan</div>
          <div className="DialogBody">{this.props.children}</div>
          <div className="DialogFooter">
            <span
                tabIndex="0"
                className="DialogDismiss"
                onClick={this.props.onAction.bind(this, 'dismiss')}>
                Cancel
            </span>
            <button onClick={this.props.onAction.bind(this, 'confirm')}>
              Invest
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  onAction: PropTypes.func,
};

Dialog.defaultProps = {
  onAction: () => {},
};

export default Dialog
