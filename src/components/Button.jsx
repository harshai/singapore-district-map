import { default as React, Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { id, labelText, handleClick } = this.props;
    return (
      <button id={id} onClick={handleClick}> {labelText} </button>
    );
  }
}

Checkbox.propTypes = {
  labelText: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
