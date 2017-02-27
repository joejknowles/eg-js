import {
  setTypeFilter,
  setLocationFilter,
  createThrottledTitleSearch
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
  it('creates action', () => {
    expect(setLocationFilter(filter)).toEqual({
      type: 'SET_LOCATION_FILTER',
      filter
    })
  });
});

describe('createThrottledTitleSearch', () => {
  it('creates function which dispatches action', () => {
    const mockDispatch = jest.fn();
    const throttledTitleSearch = createThrottledTitleSearch(mockDispatch);
    throttledTitleSearch(filter);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_TITLE_SEARCH',
      term: filter
    })
  });
});
