// import React from 'react';
import React, { Component } from 'react';

// class component
// class SearchBar extends React.Component {
class SearchBar extends Component {

    // initializing component's state in a class base component
    constructor( props ) { // called automatically at instantiation
        super( props );
        this.state = {
            term: ''
        };
    };

    render() { // always have a render method in classes
        // return <input onChange = { this.onInputChange } />; // always return JSX
        // return <input onChange = { ( e ) => console.log( e.target.value ) } />;
        // return <input onChange = { e => console.log( e.target.value ) } />;
        return (
            <div>
                {/* <input onChange = { e => this.setState( { term: e.target.value } ) } /> */}
                <input onChange = { e => this.setState( { term: e.target.value } ) } />
                <input value = { this.state.term } /> { /* controlled component, value set by state */ }
                <br />
                Value of input: { this.state.term }
            </div>
        );
    };

    onInputChange( e ) {

        console.log( e.target.value );
    };
};

// functional component
// const SearchBar = () => {

//     return <input />; // React.createElement
// };

// handling events in React, 2 step:
/*
1 - declare even handler, func
2 - pass event handler to element we want to monitor for events
*/

export default SearchBar;