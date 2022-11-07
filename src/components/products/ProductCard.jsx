import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBasket } from '../../contexts/basketContext'
import { useFav } from '../../contexts/favotiteContext'
import '../../styles/ProductCard.css'
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone'
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone'
import Button from '@mui/material/Button'
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const ProductCard = ({ item }) => {
	const { addProductToBasket, deleteProductInBasket } = useBasket()
	const { addProductToFavorite, deleteProductInFavorite } = useFav()

	const [basket, setBasket] = useState(false)
	const [favorite, setFavorite] = useState(false)

	const navigate = useNavigate()

	return (
		<div className='product-card'>
			<div className='face face1'>
				<div className='content'>
					<img
						className='card-image'
						src={item.image}
						alt=''
						style={{
							marginTop: '7px',
							width: '300px',
							height: '200px',
							// zIndex: 10,
							opacity: '100',
						}}
					/>
				</div>
			</div>
			<div className='face face2'>
				<div className='content'>
					<h3>{item.title}</h3>
					<p className='product-description'>{item.description}</p>
					<h4>{item.price}$</h4>
					<h4 style={{ width: '100px', margin: 'auto' }}>Добавить в </h4>
					<div className='card_btn-block'>
						{basket ? (
							<ShoppingBasketIcon
								className='basket-btn'
								onClick={() => {
									setBasket(!basket)
									deleteProductInBasket(item.id)
								}}
							/>
						) : (
							<ShoppingBasketTwoToneIcon
								className='basket-btn'
								onClick={() => {
									setBasket(!basket)
									addProductToBasket(item)
								}}
							/>
						)}
						{favorite ? (
							<BookmarksTwoToneIcon
								className='favorite-btn'
								onClick={() => {
									setFavorite(!favorite)
									deleteProductInFavorite(item)
								}}
							/>
						) : (
							<BookmarkTwoToneIcon
								className='favorite-btn'
								onClick={() => {
									setFavorite(!favorite)
									addProductToFavorite(item)
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
