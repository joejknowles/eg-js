import * as apiClients from '../apiClients';
import { mockFetch, mockResponse } from './testHelpers';


describe('fetchEvents', () => {
  let fetch;
  beforeEach(() => {
    fetch = mockFetch();
  });

  it('calls fetch with correct path', () => {
    return apiClients.fetchEvents().then((response) => {
      expect(fetch).toHaveBeenCalledWith('/events');
    });
  });

  it('returns response as json', () => {
    return apiClients.fetchEvents().then((response) => {
      expect(response).toEqual(mockResponse);
    });
  });
});
