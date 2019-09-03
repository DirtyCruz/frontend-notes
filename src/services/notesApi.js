export const createNote = (title, body) => {
  return fetch('https://dirty-cruz.herokuapp.com/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => {
      if(!res.ok) throw 'could not save dog';
      return res.json();
    });
};
