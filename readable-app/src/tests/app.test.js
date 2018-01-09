import React from 'react';
import ReactDOM from 'react-dom';
import ReadableApp from './components/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReadableApp />, div);
});
