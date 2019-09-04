import { connect } from 'react-redux';
import Notes from '../components/noteList/Notes';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllNotes, getLoading } from '../selectors/addNoteSelectors';
import { fetchNotes } from '../actions/addNoteActions';

class ViewNotes extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired, 
    notes: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, notes } = this.props;
    if(loading) return <h1>LOADING</h1>;
    return (
      <Notes notes={notes} />
    );
  }
}

const mapStateToProps = state => ({
  notes: getAllNotes(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewNotes);
