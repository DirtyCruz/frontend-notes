import { UPDATE_TITLE, updateTitle, UPDATE_BODY, updateBody } from '../actions/addNoteActions';

describe('addNoteActions test', () => {
  it('returns state of title', () => {
    const action = updateTitle('title');

    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'title'
    });
  });

  it('returns state of body', () => {
    const action = updateBody('body');

    expect(action).toEqual({
      type: UPDATE_BODY,
      payload: 'body'
    });
  });
});
