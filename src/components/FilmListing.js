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
      const filterList = this.state.filter==='all' ? this.props.films : this.props.faves;
      const allFilms = filterList.map( (film, index) =>(
          <FilmRow
          film={film}
          key={film.id}
          isFave={this.props.faves.includes(film)}
          onFavToggle={this.props.onFavToggle}
          handleDetailsClick={this.props.handleDetailsClick}
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
                onClick={() => this.handleFilterClick('faves')}
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
