import React from 'react';

import IngredientControl from './IngredientControl/IngredientControl'

import styles from './BuilderControl.module.css'

const builderControls = (props) => {

  const ingredientsControl = Object.keys(props.ingredients)
    .map(igKey => {
      return <IngredientControl
        type={igKey}
        key={igKey}
        quantity={props.ingredients[igKey]}
        change={props.changeIngs}/>

    });

  return (
    <div className={styles.BuilderControls}>
      {ingredientsControl}
    </div>
  );
}

export default builderControls;