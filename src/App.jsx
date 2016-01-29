import { default as React, Component } from 'react';
import DistrictList from './components/DistrictList';

export default class Checkbox extends Component {
  render() {
    return (
      <div className="outer">
        <DistrictList />
      </div>
    );
  }
}


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