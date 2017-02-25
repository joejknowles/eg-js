
const apiBaseUrl = process.env.NODE_ENV === 'production' ? '/events' : '';

export const fetchEvents = () => {
  return fetch(apiBaseUrl + '/events').then((response) => {
    return response.json();
  });
};
