import { createStore } from 'redux';
import { EVENTS } from './actions';

const initialState = {
  events: [],
  title: '',
  description: '',
  date: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOT.EVENTS':
      return {
        ...state,
        events: action.events,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;