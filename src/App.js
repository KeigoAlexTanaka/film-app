import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './components/FilmListing.js';
import FilmDetails from './components/FilmDetails.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			films: TMDB.films,
			faves:[],
			current:{}
		};
		this.handleFaveToggle=this.handleFaveToggle.bind(this);
		this.handleDetailsClick=this.handleDetailsClick.bind(this);
	}

	handleFaveToggle(film){
		const faves=this.state.faves.slice();
		const filmIndex=this.state.faves.indexOf(film);
		if(filmIndex>=0){
			faves.splice(filmIndex,1);
		}
		else{
			faves.push(film);
		}
		this.setState({faves});
	}

	handleDetailsClick(current){
    console.log(`fetching details for ${current.title}`);
    const url = `https://api.themoviedb.org/3/movie/${current.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
  	fetch(url)
  	.then(response => {
		  return response.json();
		})
		.then(current => {
		    console.log(current);
		    this.setState({current});
	  })
  }


  render() {
  	const {films,faves,current}=this.state;
    return (
      <div className="film-library">
        <FilmListing
        films={films}
        faves={faves}
        onFavToggle={this.handleFaveToggle}
        handleDetailsClick={this.handleDetailsClick}
        />
        <FilmDetails
        film={current}
        />
      </div>
    )
  }
}

export default App