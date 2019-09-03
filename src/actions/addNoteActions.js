import { createNote } from '../services/notesApi';

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
