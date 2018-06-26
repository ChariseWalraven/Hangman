import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import Hangman from '../containers/Hangman'


describe('<App>', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <App />
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  });
  it('should render a Hangman component', () => {
    const rendered = renderer.create(
      <Hangman />
    )
    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
