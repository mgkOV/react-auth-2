import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';

describe('SignIn', () => {
  const signIn = shallow(<SignIn />);

  it('should render properly', () => {
    expect(signIn).toMatchSnapshot();
  });
});
