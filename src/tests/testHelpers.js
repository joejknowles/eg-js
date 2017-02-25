export const mockResponse = { response: 'test' };

export const mockFetch = () => {
  window.fetch = jest.fn((url) => (
    new Promise((resolve, reject) => (
      resolve({ status: 200, ok: true,
        json: () => (mockResponse) })
    ))
  ));
  return window.fetch;
};
