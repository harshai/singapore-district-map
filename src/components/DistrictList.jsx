import { default as React, Component } from 'react';
import { default as districts } from '../Districts';
import { selectDistrict, unselectDistrict, clearAll } from '../actions';
import { createStore } from 'redux';
import reducer from '../reducer';
import Checkbox from './Checkbox';
import Button from './Button';


const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState(), 'store')
);

export default class DistrictList extends Component {

  toggleDistrict(e) {
    if (e.target.checked) {
      store.dispatch(selectDistrict(e.target.value));
    } else {
      store.dispatch(unselectDistrict(e.target.value));
    }
  }

  clearAllDistricts(e) {
    e.preventDefault();
    store.dispatch(clearAll());
  }

  isChecked(id) {
    return store.getState().find((district) => {
      return district.get('districtId') === id;
    });
  }

  render() {
    return (
      <form>
        <Button id="clearAll" labelText="Clear all" handleClick={ this.clearAllDistricts } />
        {districts.map(district =>
          <Checkbox
            name="district"
            id={district.get('districtId')}
            value={district.get('districtId')}
            labelText={`${district.get('districtId')} ( ${district.get('districtName')} )`}
            handleChange={ this.toggleDistrict }
            checked={ this.isChecked(district.get('districtId')) }
          />)}
      </form>
    );
  }
}
