import React, { Component } from 'react';


class Fave extends Component {
   

	handleClick(e) {
		// captures event and stops bubbling up
		e.stopPropagation()
		console.log('inside handle click')
		this.props.onFaveToggle();

	}

	render() {
		const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
		return (
			<div 
				className={`film-row-fave ${isFave}`}
			    onClick={(e) => this.handleClick(e)}
			>
			  <p className="material-icons">add_to_queue</p>
			</div>
		)
	}
}

export default Fave;