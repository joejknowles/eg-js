import { typeReducer } from '../../reducers/filters';

describe('typeReducer', () => {
  it('defaults to an empty string', () => {
    expect(typeReducer(undefined, {})).toEqual('');
  });

  it('returns filter on SET_TYPE_FILTER', () => {
    expect(typeReducer(
      'other', { type: 'SET_TYPE_FILTER', typeFilter: 'filter' }
    )).toEqual('filter');
  });
});
