import { typeOptions, locationOptions } from '../../reducers/filters/options';

const testReducerEmptyArrayDefault = (reducer) => (
  it('defaults to an empty array', () => {
    expect(reducer(undefined, {})).toEqual([]);
  })
);

const response = {
  entities: {
    events: {
      '123': { id: '123', type: 'gig', venue: 'aaa, Manchester' },
      '321': { id: '123', type: 'party', venue: 'a2aa, Manchester' },
      '999': { id: '999' }
    }
  },
  result: ['123', '321', '999']
};

const mockAction = { type: 'FETCH_EVENTS_SUCCESS', response }

describe('typeOptions', () => {
  testReducerEmptyArrayDefault(typeOptions);

  it('returns type options on FETCH_EVENTS_SUCCESS', () => (
    expect(typeOptions([], mockAction)).toEqual(['gig', 'party'])
  ));
});

describe('locationOptions', () => {
  testReducerEmptyArrayDefault(locationOptions);

  it('returns location options on SET_LOCATION_FILTER', () => (
    expect(locationOptions([], mockAction)).toEqual([ 'Manchester' ])
  ));
});
