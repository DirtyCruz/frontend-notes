import addNote from '../reducers/addNoteReducer';
import { updateTitle, updateBody } from '../actions/addNoteActions';

describe('addNotes tests', () => {
  it('returns default state', () => {
    const state = {
      title: '',
      body: ''
    };

    const action = {
      type: 'Nothing',
      payload: 'hmmm'
    };

    const newState = addNote(state, action);
    expect(newState).toEqual(state);
  });

  it('updates title', () => {
    const state = {
      title: 'Hello'
    };

    const action = updateTitle('WHY');

    const newState = addNote(state, action);
    expect(newState).toEqual({ title: 'WHY' });
  });

  it('updates body', () => {
    const state = {
      body: 'I am a body'
    };

    const action = updateBody('no you are NOT');

    const newState = addNote(state, action);
    expect(newState).toEqual({ body: 'no you are NOT' });
  });
});
