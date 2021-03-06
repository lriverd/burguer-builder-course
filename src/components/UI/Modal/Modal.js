import React from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

import styles from './Modal.module.css'

const modal = props => {
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
			<div
				className={styles.Modal}
				style={{
					transform: props.show
						? 'translateY(0)'
						: 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}
			>
				{props.children}
			</div>
		</Aux>
	)
}

export default React.memo(
	modal,
	(prevState, nextState) => prevState.show === nextState.show
)
