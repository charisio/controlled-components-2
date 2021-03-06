import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = ({items}) => {
	return(
		<div className='items-list'>
			<p className="items">Items</p>
			<ol className="item-list">
				{items.map((item, index) => <li key={index}>{item}</li>)}
			</ol>
		</div>
	);
}

ItemsList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemsList;