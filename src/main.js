// Node Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Application Components
import SearchBar from './Components/search_bar'

// ---------------
const API_KEY = 'AIzaSyBzGahfgQoWXYa9uenNg2ZBVRT6PPH46b0';
// package : npm install --save youtube-api-search
// ---------------
// YTSearch({
//     key: API_KEY,
//     term: 'surfboards'
// },
// function( data ) {
//     console.log( data );
// });

// downwards data flow
 
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(
//         document.getElementById('mount')
//     );
// });

// Create a new component and produce some html
// const APP = () => {

//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };

class APP extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        },
        ( videos ) => {
            this.setSate({
                videos //videos: videos, when key value are the same
            });
        });
    };

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    };
};

// take this component's html and put it on the page, in the DOM.
ReactDOM.render( <APP />, document.querySelector( '.container' ) );