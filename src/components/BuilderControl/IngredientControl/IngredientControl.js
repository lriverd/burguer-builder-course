import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ingredientControl = (props) => {
	return (
		<div>
			{props.type}
			<IconButton
				color="primary"
				aria-label="add ingredient"
				onClick={props.added}>
				<AddIcon/>
			</IconButton>
			{props.quantity}
			<IconButton 
				color="primary" 
				aria-label="remove ingredient"
				onClick={props.removed}
				disabled={props.disabled}>
				<RemoveIcon/>
			</IconButton>
		</div>
	);
}

export default ingredientControl;
