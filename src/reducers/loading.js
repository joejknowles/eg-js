export const eventsLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST':
      return true;
    case 'FETCH_EVENTS_SUCCESS':
      return false;
    default:
      return state;
  }
};
