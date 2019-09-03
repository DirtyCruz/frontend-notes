import React from 'react';
import PropTypes from 'prop-types';

function Note({ title, body }) {
  return (
    <>
      <h4>{title}</h4>
      <p>{body}</p>
    </>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
