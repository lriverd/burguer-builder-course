import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const ingredientControl = (props) => {
    const value = props.quantity;

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
                value={value}
                //onChange={props.change(props.key, value)}
            />
        </div>
    );
}

export default ingredientControl;