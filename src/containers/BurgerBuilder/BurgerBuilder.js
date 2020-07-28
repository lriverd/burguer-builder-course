import React, { Component } from 'react';

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

    changeIngredient = (ingKey, value) => {
        let newIngredients = { ...this.state.ingredients };

        newIngredients[ingKey] = value;

        this.setState({ ingredients: newIngredients });
    }

    calculateTotalPrice = () => {
        let total = Math.random() * 3 + 5;
        this.setState({totalPrice: total})
    }

    render() {
        return (
            <Aux>
                <Burger
                    ingredients={this.state.ingredients}
                    change={this.changeIngredient}
                />
                <p>$ {this.state.totalPrice}</p>
                <BuilderControls
                    changeIngs={this.changeIngredient}
                    ingredients={this.state.ingredients}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;