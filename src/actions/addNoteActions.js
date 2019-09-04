import { createNote, getNotes } from '../services/notesApi';

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const UPDATE_BODY = 'UPDATE_BODY';
export const updateBody = body => ({
  type: UPDATE_BODY,
  payload: body
});

export const MAKE_NOTE = 'MAKE_NOTE';
export const makeNote = (title, body) => ({
  type: MAKE_NOTE,
  payload: createNote(title, body)
});

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_LOADING = 'FETCH_NOTES_LOADING';
export const fetchNotes = () => ({
  type: FETCH_NOTES,
  payload: getNotes(),
  pending: FETCH_NOTES_LOADING
});
