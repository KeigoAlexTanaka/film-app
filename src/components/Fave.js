import React from 'react';

export default function Fave(props) {

	const handleClick=(e)=>{
		e.stopPropagation();
		props.onFavToggle();
	}

	const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'

	return (
		<div 
			className={`film-row-fave ${isFave}`}
		    onClick={(e) => handleClick(e)}
		>
		  <p className="material-icons">{isFave}</p>
		</div>
	)
}