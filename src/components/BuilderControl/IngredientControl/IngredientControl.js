import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const ingredientControl = (props) => {

    return (
        <div>
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Ingrediente : {props.type}
            </Typography>
            <Slider
                defaultValue={props.quantity}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={0}
                max={5}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export default ingredientControl;