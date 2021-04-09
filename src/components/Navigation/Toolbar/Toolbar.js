import React from 'react'

import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = props => (
	<header className={styles.Toolbar}>
		<DrawerToggle click={props.toggleSideDrawer} />
		<div onClick={props.openSideDrawer}>MENU</div>
		<div className={styles.Logo}>
			<Logo />
		</div>
		<nav className={styles.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
)

export default toolbar
