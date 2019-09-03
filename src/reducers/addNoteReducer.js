import { UPDATE_TITLE, UPDATE_BODY } from '../actions/addNoteActions';

const initialState = {
  title: '',
  body: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_BODY:
      return { ...state, body: action.payload };
    default:
      return state;
  }
}
