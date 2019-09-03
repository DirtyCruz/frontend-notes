import { connect } from 'react-redux';
import AddNote from '../components/addNote/AddNote';
import { getTitle, getBody } from '../selectors/addNoteSelectors';
import { updateTitle, updateBody, makeNote } from '../actions/addNoteActions'

const mapStateToProps = state => ({
  title: getTitle(state),
  body: getBody(state)
});

const mapDispatchToProps = dispatch => ({
  handleOnChange({ target }) {
    target.name === 'title' ? 
      dispatch(updateTitle(target.value)) :
      dispatch(updateBody(target.value));
  },
  handleClick(title, body) {
    dispatch(makeNote(title, body));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
