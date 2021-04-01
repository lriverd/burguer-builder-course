import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout