import { List } from 'immutable';
import {
  SELECT_DISTRICT,
  UNSELECT_DISTRICT,
  SELECT_ALL,
  CLEAR_ALL,
  CLEAR_ALL_EXCEPT,
} from './actions';
import districts from './Districts';

export default function(state = new List(), action) {
  if (!(action && action.type)) return state;
  switch (action.type) {
    case SELECT_DISTRICT:
      return state.concat(districts.filter((district) =>
        district.get('districtId') === action.districtId
      ));
    case UNSELECT_DISTRICT:
      return state.filter(district => district.get('districtId') !== action.districtId);
    case SELECT_ALL:
      return districts;
    case CLEAR_ALL:
      return state.clear();
    case CLEAR_ALL_EXCEPT:
      return state.filter(district => district.get('districtId') === action.districtId);
    default:
      return state;
  }
}
