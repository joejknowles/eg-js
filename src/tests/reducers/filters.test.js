import { typeReducer, location, titleSearch } from '../../reducers/filters';

const filter = 'filter';

const testReducerEmptyStringDefault = (reducer) => (
  it('defaults to an empty string', () => {
    expect(reducer(undefined, {})).toEqual('');
  })
)

describe('typeReducer', () => {
  testReducerEmptyStringDefault(typeReducer);

  it('returns filter on SET_TYPE_FILTER', () => {
    expect(typeReducer(
      'other', { type: 'SET_TYPE_FILTER', filter }
    )).toEqual(filter);
  });
});

describe('location', () => {
  testReducerEmptyStringDefault(location);

  it('returns filter on SET_LOCATION_FILTER', () => {
    expect(location(
      'other', { type: 'SET_LOCATION_FILTER', filter }
    )).toEqual(filter);
  });
});

describe('titleSearch', () => {
  testReducerEmptyStringDefault(titleSearch);

  it('returns search term on SET_TITLE_SEARCH', () => {
    expect(titleSearch(
      'other', { type: 'SET_TITLE_SEARCH', term: filter }
    )).toEqual(filter);
  });
});
