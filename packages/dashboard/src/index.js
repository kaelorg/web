import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { unregister } from './serviceWorker';

// CSS
import 'emoji-mart/css/emoji-mart.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(<App />, document.getElementById('root'));

unregister();
