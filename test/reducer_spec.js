import { List, fromJS, Map } from 'immutable';
import { expect } from 'chai';
import reducer from '../src/reducer';
import {
  SELECT_DISTRICT,
  UNSELECT_DISTRICT,
  SELECT_ALL,
  CLEAR_ALL,
  CLEAR_ALL_EXCEPT,
} from '../src/actions';
import Districts from '../src/Districts';

describe('Reducer', () => {
  it('should return an empty list when called without a state', () => {
    const initialState = reducer();
    expect(initialState).to.equal(new List());
  });

  it('should return the state as it is for unknown actions', () => {
    const initialState = new List();
    const action = { type: 'BUNNIES' };
    const state = reducer(initialState, action);
    expect(state).to.equal(fromJS([]));
  });

  it('should select district', () => {
    const initialState = List.of(new Map({
      districtName: 'Bedok / Upper East Coast',
      districtId: 'D16',
    }));
    const action = {
      type: SELECT_DISTRICT,
      districtId: 'D01',
    };
    const state = reducer(initialState, action);
    expect(state).to.equal(List.of({
      districtName: 'Bedok / Upper East Coast',
      districtId: 'D16',
    }, {
      districtId: 'D01',
      districtName: 'Boat Quay / Raffles Place / Marina',
    }).map(Map));
  });

  it('should unselect a district', () => {
    const initialState = List.of(new Map({
      districtId: 'D01',
      districtName: 'Boat Quay / Raffles Place / Marina',
    }));
    const action = {
      type: UNSELECT_DISTRICT,
      districtId: 'D01',
    };

    const state = reducer(initialState, action);
    expect(state).to.equal(new List());
  });

  it('should select all districts', () => {
    const initialState = List.of(new Map({
      districtId: 'D01',
      districtName: 'Boat Quay / Raffles Place / Marina',
    }));
    const action = {
      type: SELECT_ALL,
    };
    const state = reducer(initialState, action);
    expect(state).to.equal(Districts);
  });

  it('should clear all districts', () => {
    const initialState = List.of(new Map({
      districtId: 'D01',
      districtName: 'Boat Quay / Raffles Place / Marina',
    }));
    const action = {
      type: CLEAR_ALL,
    };
    const state = reducer(initialState, action);
    expect(state).to.equal(new List());
  });

  it('should clear all districts except given district', () => {
    const initialState = List.of({
      districtName: 'Bedok / Upper East Coast',
      districtId: 'D16',
    }, {
      districtId: 'D01',
      districtName: 'Boat Quay / Raffles Place / Marina',
    }).map(Map);
    const action = {
      type: CLEAR_ALL_EXCEPT,
      districtId: 'D16',
    };
    const state = reducer(initialState, action);
    expect(state).to.equal(List.of(new Map({
      districtName: 'Bedok / Upper East Coast',
      districtId: 'D16',
    })));
  });
});
