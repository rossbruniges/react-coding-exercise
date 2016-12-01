import React, {Component, PropTypes} from 'react';

import FormInput from './FormInput';

class Form extends Component {

  getData() {
    let data = {};
    this.props.fields.forEach(field => 
      data[field.id] = this.refs[field.id].getValue()
    );
    return data;
  }
  
  render() {
    return (
      <form className="Form">{this.props.fields.map(field => {
        return (
            <div className="FormRow" key={field.id}>
                <label className="FormLabel" htmlFor={field.id}>{field.label}:</label>
                <FormInput {...field} ref={field.id} />
            </div>
        );
      }, this)}</form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  initialData: PropTypes.object,
};

export default Form
