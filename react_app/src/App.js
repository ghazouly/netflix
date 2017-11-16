import React, { Component } from 'react';
import Fetch from 'react-fetch'
import './App.css';

const MoviesList = (props) => (
    <ul>
        <li>{props.name}</li>
        <li>{props.rate}</li>
        <li>{props.id}</li>
    </ul>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: []};
    }
    componentDidMount() {
        fetch('http://localhost:3000/movies')

            .then(
                data => data.json()

            )
            .then((data) => {console.log("succes data: ",data);
            this.setState({ movies: data }) });
    }

    // render() {
    //     return <BookListing books={this.state.books} />;
    // }
  render() {
    return (
       <MoviesList props={this.props} movies={this.state.movies} />
    );
  }
}

export default App;