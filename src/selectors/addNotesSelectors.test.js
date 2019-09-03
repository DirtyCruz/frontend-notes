import { getTitle, getBody } from './addNoteSelectors';

describe('addNotesSelectors test', () => {
  it('gets title from state', () => {
    const state = {
      addNote: {
        title: 'title'
      }
    };

    const title = getTitle(state);

    expect(title).toEqual('title');
  });

  it('gets body from state', () => {
    const state = {
      addNote: {
        body: 'body'
      }
    };

    const title = getBody(state);

    expect(title).toEqual('body');
  });
});
