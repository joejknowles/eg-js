const apiBasePath = process.env.NODE_ENV === 'production' ? '/api' : '';

export const fetchEvents = () => {
  return fetch(apiBaseUrl + '/events').then((response) => {
    return response.json();
  });
};
