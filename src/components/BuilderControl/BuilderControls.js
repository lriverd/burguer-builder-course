import React from 'react'

import IngredientControl from './IngredientControl/IngredientControl'

import styles from './BuilderControl.module.css'

const builderControls = props => {
	const ingredientsControl = Object.keys(props.ingredients).map(igKey => {
		return (
			<IngredientControl
				type={igKey}
				key={igKey}
				quantity={props.ingredients[igKey]}
				added={() => props.addIngredient(igKey)}
				removed={() => props.removeIngredient(igKey)}
				disabled={props.disabled[igKey]}
			/>
		)
	})

	return (
		<div className={styles.BuilderControls}>
			<p>
				Current Price <strong>$ {props.price.toFixed(2)}</strong>
			</p>
			{ingredientsControl}
			<button disabled={!props.purchaseable} onClick={props.ordered}>
				ORDER NOW
			</button>
		</div>
	)
}

export default builderControls
