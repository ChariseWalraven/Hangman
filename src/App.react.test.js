import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hangman from './components/Hangman'
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

describe('<App>', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render a Hangman component',()=> {
    expect(wrapper.find(Hangman)).to.have.length(1)
  })
})
