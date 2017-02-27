import {
  setTypeFilter,
  setLocationFilter,
  setTitleSearch
} from '../../actions';

const filter = "test filter";

describe('setTypeFilter', () => {
  it('creates action', () => {
    expect(setTypeFilter(filter)).toEqual({
      type: 'SET_TYPE_FILTER',
      filter
    })
  });
});

describe('setLocationFilter', () => {
  it('creates action', () => (
    expect(setLocationFilter(filter)).toEqual({
      type: 'SET_LOCATION_FILTER',
      filter
    })
  ));
});

describe('setTitleSearch', () => {
  it('creates action', () => {
    expect(setTitleSearch(filter)).toEqual({
      type: 'SET_TITLE_SEARCH',
      term: filter
    })
  });
});
