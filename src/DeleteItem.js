import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = ({items, deleteLastItem}) => {
  	const noItemsFound = () => {
    	return items.length === 0;
  	};

    return(
		<button onClick={(e) => deleteLastItem(e)} disabled={noItemsFound()}>
			Delete Last Item
		</button>
  );
}

DeleteItem.propTypes = {
	items: PropTypes.array.isRequired,
  	deleteLastItem: PropTypes.func.isRequired,
};

export default DeleteItem;