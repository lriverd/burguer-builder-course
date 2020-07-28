import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/BuilderControl/BuilderControls';

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 0
	}

	addIngredient = (ingredient) => {
		const updateIngredients = {
			...this.state.ingredients
		}
		updateIngredients[ingredient] += 1;

		this.setState({ingredients: updateIngredients})
	}

	render() {
		return (
			<Aux>
				<Burger
					ingredients={this.state.ingredients}
				/>
				<p>$ {this.state.totalPrice}</p>
				<BuilderControls
					addIngredient={this.addIngredient}
					ingredients={this.state.ingredients}
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder;
