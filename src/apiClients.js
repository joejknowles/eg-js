const apiBasePath = process.env.NODE_ENV === 'production' ? '/api' : '';

export const fetchEvents = () => {
  return fetch(apiBasePath + '/events').then((response) => {
    return response.json();
  });
};

export const fetchEventDetails = (id) => {
  return fetch(apiBasePath + `/events/${ id }`).then((response) => {
    return response.json();
  });
};
