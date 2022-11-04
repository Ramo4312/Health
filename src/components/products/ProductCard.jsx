import React from 'react'
import '../../styles/ProductCard.css'

const ProductCard = () => {
	return (
		<div>
			<div className='product-card'>
				<div className='face face1'>
					<div className='content'>
						<i className='fab fa-windows'></i>
						<h3>Windows</h3>
					</div>
				</div>
				<div className='face face2'>
					<div className='content'>
						<p className='product-description'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
							repudiandae, explicabo voluptate et hic cum ratione a.
						</p>
						<a className='detail-btn' href='#' type='button'>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
