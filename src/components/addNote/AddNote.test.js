import React from 'react';
import { shallow } from 'enzyme';
import AddNote from './AddNote';

describe('AddNote component', () => {
  it('renders AddNote', () => {
    const wrapper = shallow(<AddNote title='title' body='body' handleOnChange={() => { }} handleClick={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
