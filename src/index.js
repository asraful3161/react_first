import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const user={
	fName: 'Md. Asraful', lName: 'Islam'
}

const span={
	color: 'green'
}

//ReactDOM.render(<App />, document.getElementById('root'));
const element=<h1>My name: <span style={span}>{user.fName}</span> {user.lName}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);

registerServiceWorker();