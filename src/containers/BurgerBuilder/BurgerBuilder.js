import React, { Component } from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/BuilderControl/BuilderControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
	salad: 0.3,
	bacon: 0.75,
	cheese: 0.63,
	meat: 1.06,
	onion: 0.2
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
			onion: 0
		},
		totalPrice: 0,
		purchaseable: false,
		purchasing: false
	}

	updatePurchaseState (ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey]
			})
			.reduce((sum, el) => {
				return sum + el
			}, 0)
		console.log('total ings : ' + sum)
		this.setState({ purchaseable: sum > 0 })
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type]
		const updateCount = oldCount + 1
		const updateIngredients = {
			...this.state.ingredients
		}
		updateIngredients[type] = updateCount
		const priceAddition = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice + priceAddition

		this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
		this.updatePurchaseState(updateIngredients)
	}

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type]
		if (oldCount <= 0) {
			return
		}
		const updateCount = oldCount - 1
		const updateIngredients = {
			...this.state.ingredients
		}
		updateIngredients[type] = updateCount
		const priceDeduction = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceDeduction

		this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
		this.updatePurchaseState(updateIngredients)
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true })
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false })
	}

	purchaseContinuedHandler = () => {
		alert('Continuanding')
	}

	render () {
		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						purchaseContinued={this.purchaseContinuedHandler}
						purchaseCancell={this.purchaseCancelHandler}
					></OrderSummary>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuilderControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					ingredients={this.state.ingredients}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaseable={this.state.purchaseable}
					ordered={this.purchaseHandler}
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder
