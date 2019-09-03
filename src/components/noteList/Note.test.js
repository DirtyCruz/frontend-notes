import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note component', () => {
  it('renders Note', () => {
    const wrapper = shallow(<Note title='title' body='body' />);
    expect(wrapper).toMatchSnapshot();
  });
});
