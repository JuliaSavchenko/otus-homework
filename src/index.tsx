import React from "react";
import ReactDOM from "react-dom";
import Desk from './components/Desk'

setTimeout(() => {
    ReactDOM.render(<Desk shouldSaveInLocalStorage={false}/>, document.getElementById('root'));
}, 10000);
ReactDOM.render(<Desk shouldSaveInLocalStorage={true}/>, document.getElementById('root'));

const unloadCallback = (event) => { 
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
};

window.addEventListener("beforeunload", unloadCallback);