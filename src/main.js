// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Application Components
import SearchBar from './Components/search_bar'

// ---------------
const API_KEY = 'AIzaSyBzGahfgQoWXYa9uenNg2ZBVRT6PPH46b0';
// package : npm install --save youtube-api-search
// ---------------
 
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(
//         document.getElementById('mount')
//     );
// });

// Create a new component and produce some html
const APP = () => {

    return (
        <div>
            <SearchBar />
        </div>
    );
};

// take this component's html and put it on the page, in the DOM.
ReactDOM.render( <APP />, document.querySelector( '.container' ) );