import React from 'react';
// import ReactDOM from 'react-dom';
 
// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(
//         document.getElementById('mount')
//     );
// });


// Create a new component and produce some html

const APP = function() {

    return <div>Hi!</div>;
};

// take this component's html and put it on the page, in the DOM.
React.render( APP );