import addNote from '../reducers/addNoteReducer';

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
});
