import React, { Component } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Aux from '../Auxiliary/Auxiliary'
import styles from './Layout.module.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false })
	}

	sideDrawerOpenHandler = () => {
		this.setState({ showSideDrawer: true })
	}

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer }
		})
	}

	render () {
		return (
			<Aux>
				<Toolbar
					toggleSideDrawer={this.sideDrawerToggleHandler}
					openSideDrawer={this.sideDrawerOpenHandler}
				/>
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
