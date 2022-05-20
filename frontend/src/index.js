
import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Theme from './styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ViewportProvider from './components/Resize/Resize';

import './index.css';

ReactDOM.render(
  <ViewportProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Theme>
          <div className='bg_anim'>
            <div className="bg_gradient">
              <App />
            </div>
          </div>
        </Theme>
      </BrowserRouter>
    </React.StrictMode>
  </ViewportProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
