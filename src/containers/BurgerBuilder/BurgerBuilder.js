import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/BuilderControl/BuilderControl';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    const changeIngredient = (ingKey, value) => {
        let newIngredients = this.state.ingredients;

        newIngredients[ingKey] = value;

        this.setState({newIngredients});
    }

    render() {
        return (
            <Aux>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BurgerControl
                    ingredients={this.state.ingredients}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;