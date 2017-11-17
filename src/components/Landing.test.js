import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
  const landing = <Landing />;
  it('should render properly', () => {
    expect(landing).toMatchSnapshot();
  });
});
