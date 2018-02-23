import React from 'react';
import ReactDOM from 'react-dom';

import MultiSelector from './MultiSelector';
import {users} from './data/userdata.js';

ReactDOM.render( <MultiSelector list = {users} />, document.getElementById('App'));

