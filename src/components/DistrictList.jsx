import { default as React, Component } from 'react';
import { default as districts } from '../Districts';
import { selectDistrict, unselectDistrict, clearAll } from '../actions';
import { createStore } from 'redux';
import reducer from '../reducer';
import Checkbox from './Checkbox';
import Button from './Button';

export default class DistrictList extends Component {
  render() {
    return (
      <form>
        <Button id="clearAll" labelText="Clear all" handleClick={ this.props.clearAllDistricts } />
        {this.props.districts.map(district =>
          <Checkbox
            name="district"
            id={district.get('districtId')}
            value={district.get('districtId')}
            labelText={`${district.get('districtId')} ( ${district.get('districtName')} )`}
            handleChange={ this.props.toggleDistrict }
            checked={ this.props.isChecked(district.get('districtId')) }
          />)}
      </form>
    );
  }
}
