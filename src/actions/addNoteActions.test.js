import { UPDATE_TITLE, updateTitle } from '../actions/addNoteActions';

describe('addNoteActions test', () => {
  it('returns state of title', () => {
    const action = updateTitle('title');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'title'
    });
  });
});
