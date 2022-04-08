import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { App } from 'components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

{
  /* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
}
