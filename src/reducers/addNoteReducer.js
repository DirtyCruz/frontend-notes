import { UPDATE_TITLE, UPDATE_BODY, MAKE_NOTE, FETCH_NOTES, FETCH_NOTES_LOADING } from '../actions/addNoteActions';

const initialState = {
  notes: [],
  title: '',
  body: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_BODY:
      return { ...state, body: action.payload };
    case MAKE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case FETCH_NOTES_LOADING:
      return { ...state, loading: true };
    case FETCH_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}
