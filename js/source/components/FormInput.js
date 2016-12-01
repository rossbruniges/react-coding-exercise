import React, {Component, PropTypes} from 'react';

class FormInput extends Component {
  
  getValue() {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const common = {
      id: this.props.id,
      ref: 'input',
    };
    return (
        <input
            {...common}
            type="number" />
        );
  }
}

FormInput.propTypes = {
  id: PropTypes.string,
};

export default FormInput
