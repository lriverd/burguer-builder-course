import React, { Component } from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BurgerControl from '../../components/BuilderControl/BuilderControl';

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger 
                    ingredients = {this.state.ingredients}
                />
                <BurgerControl />
            </Aux>
        )
    }
}

export default BurgerBuilder;