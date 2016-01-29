export const SELECT_DISTRICT = 'SELECT_DISTRICT';
export const UNSELECT_DISTRICT = 'UNSELECT_DISTRICT';
export const SELECT_ALL = 'SELECT_ALL';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_ALL_EXCEPT = 'CLEAR_ALL_EXCEPT';

export function selectDistrict(districtId) {
  return {
    type: SELECT_DISTRICT,
    districtId,
  };
}

export function unselectDistrict(districtId) {
  return {
    type: UNSELECT_DISTRICT,
    districtId,
  };
}

export function selectAll() {
  return {
    type: SELECT_ALL,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}

export function clearAllExcept(districtId) {
  return {
    type: CLEAR_ALL_EXCEPT,
    districtId,
  };
}
