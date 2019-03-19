import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
 
 state = {
  filter: 'all'
 }
  handleFilterClick(filter) {
    this.setState(prevState => ({
      filter
    }))
  }

  render() {
      const films = (this.state.filter === 'filter') ? this.props.faves : this.props.films
      console.log('this.state.filter is: ', this.state.filter)
      const allFilms = films.map( (film, index) => (
          <FilmRow 
          film={film} 
          key={film.id} 
          onFaveToggle={() => this.props.onFaveToggle(film)} 
          isFave={this.props.faves.includes(film)}
          /> 
      ))

      return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
              <div 
                className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                onClick={() => this.handleFilterClick('all')}
              >
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
              </div>
              <div 
                className={`film-list-filter ${this.state.filter === 'filter' ? 'is-active' : ''}`}
                onClick={() => this.handleFilterClick('filter')}
              >
                  FAVES
                  <span className="section-count">{this.props.faves.length}</span>
              </div>
          </div>

          {allFilms}
      </div>
      )
  }
}

export default FilmListing
