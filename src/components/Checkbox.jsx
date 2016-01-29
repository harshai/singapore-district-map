import { default as React, Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { id, labelText, value, checked, handleChange } = this.props;

    return (
      <label htmlFor={id}>
        <input
          name={name}
          type="checkbox"
          value={value}
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        {labelText}
      </label>
    );
  }
}


Checkbox.propTypes = {
  labelText: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  handleChange: React.PropTypes.func.isRequired,
};
