// Node Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Application Components
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

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
            videos: [],
            selectedVideo: null
        };

        this.videoSearch( 'surfboards' );
    };

    videoSearch( term ) {
        YTSearch({
            key: API_KEY,
            term: term
        },
        ( videos ) => {
            this.setState({
                videos: videos, //videos: videos, when key value are the same
                selectedVideo: videos[0]
            });
        });
    };

    render() {

        const videoSearch = _.debounce( ( term ) => { this.videoSearch( term ) }, 300 );

        return (
            <div>
                {/* <SearchBar onSearchTermChange = { term => this.videoSearch( term ) }  /> */}
                <SearchBar onSearchTermChange = { videoSearch }  />
                {/* <VideoDetail video = { this.state.videos[0] } /> */}
                <VideoDetail video = { this.state.selectedVideo } />
                <VideoList 
                    onVideoSelect = { selectedVideo => this.setState( { selectedVideo } ) }
                    videos = { this.state.videos } />
            </div>
        );
    };
};

// take this component's html and put it on the page, in the DOM.
ReactDOM.render( <APP />, document.querySelector( '.container' ) );