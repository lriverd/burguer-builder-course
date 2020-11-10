import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/BuilderControl/BuilderControls';

const INGREDIENT_PRICES = {
	salad: .3,
	bacon: .75,
	cheese: .63,
	meat: 1.06
}

class BurgerBuilder extends Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 0,
		purchaseable: false
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		console.log("total ings : " + sum)
		this.setState({ purchaseable: sum > 0 })
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updateCount = oldCount + 1;
		const updateIngredients = {
			...this.state.ingredients
		}
		updateIngredients[type] = updateCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
		this.updatePurchaseState(updateIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updateCount = oldCount - 1;
		const updateIngredients = {
			...this.state.ingredients
		}
		updateIngredients[type] = updateCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
		this.updatePurchaseState(updateIngredients);
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<Aux>
				<Burger
					ingredients={this.state.ingredients}
				/>
				<BuilderControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					ingredients={this.state.ingredients}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder;
