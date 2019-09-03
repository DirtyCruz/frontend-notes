import React from 'react';
import PropTypes from 'prop-types';

function AddNote({ title, handleOnChange, body, handleClick }) {
  return (
    <>
      <input type='text' name='title' value={title} onChange={handleOnChange} />
      <input type='text' name='body' value={body} onChange={handleOnChange} />
      <button onClick={() => handleClick(title, body)}>Create Note</button>
    </>
  );
}

AddNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default AddNote;
