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

describe('fetchEventDetails', () => {
  let fetch;
  beforeEach(() => {
    fetch = mockFetch();
  });

  it('calls fetch with correct path', () => {
    const mockId = '9826';
    return apiClients.fetchEventDetails(mockId).then((response) => {
      expect(fetch).toHaveBeenCalledWith(`/events/${mockId}`);
    });
  });

  it('returns response as json', () => {
    return apiClients.fetchEvents().then((response) => {
      expect(response).toEqual(mockResponse);
    });
  });
});
