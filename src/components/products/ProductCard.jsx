import React from 'react'
import '../../styles/ProductCard.css'

const ProductCard = () => {
	return (
		<div>
			<div class='product-card'>
				<div class='face face1'>
					<div class='content'>
						<i class='fab fa-windows'></i>
						<h3>Windows</h3>
					</div>
				</div>
				<div class='face face2'>
					<div class='content'>
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
