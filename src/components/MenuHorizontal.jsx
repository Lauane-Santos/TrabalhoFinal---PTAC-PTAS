import React from 'react'
import { Link } from 'react-router-dom';


import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
			<Link to='/' className="item">
				<b>TOP 1</b>
			</Link>
		</div>
	)
}

export default MenuHorizontal
