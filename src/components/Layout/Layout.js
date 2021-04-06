import React, { Component } from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
	state = {
		showSideDrawer: true
	}

	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false })
	}

	sideDrawerOpenHandler = () => {
		this.setState({ showSideDrawer: true })
	}

	render () {
		return (
			<Aux>
				<Toolbar openSideDrawer={this.sideDrawerOpenHandler} />
				<SideDrawer
					closed={this.sideDrawerCloseHandler}
					open={this.state.showSideDrawer}
				/>
				<main className={styles.Content}>{this.props.children}</main>
			</Aux>
		)
	}
}

export default Layout
