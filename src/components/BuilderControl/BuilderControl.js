import React from 'react';

import IngredientControl from '../BuilderControl/IngredientControl/IngredientControl'

const builderControl = (props) => {

  const ingredientsControl = Object.keys(props.ingredients)
    .map(igKey => {
      return <IngredientControl
        type={igKey}
        key={igKey}
        quantity={props.ingredients[igKey]}/>

    });

  return (
    <div>
      {ingredientsControl}
    </div>
  );
}

export default builderControl;