const initialState = {
  city: 'Please Select',
  jobs: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SWITCH_LOCATION') {
    return {
      city: action.city,
      jobs: action.jobs
    }
  }
  return state;
};

export default reducer;
