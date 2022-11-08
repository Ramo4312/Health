import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBasket } from '../../contexts/basketContext'
import { useFav } from '../../contexts/favotiteContext'
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone'
import BookmarksTwoToneIcon from '@mui/icons-material/BookmarksTwoTone'
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import '../../styles/Product2.css'
import '../../styles/ProductCard.css'

// import Like from './Like'
// import CommentsModal from '../posts/PostComments'
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
// import BootstrapButton from './CardButton'

const ProductCard = ({ item, i }) => {
	const { addProductToBasket, deleteProductInBasket } = useBasket()
	const { addProductToFavorite, deleteProductInFavorite } = useFav()

	const [basket, setBasket] = useState(false)
	const [favorite, setFavorite] = useState(false)

	const navigate = useNavigate()

	return (
		<motion.div
			initial={{ opacity: 0, translateX: -50 }}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.3, delay: i * 0.5 }}
			style={{
				boxShadow: 'none',
				background: 'rgba(122, 122, 122, 0.8)',
				width: '400px',
				borderRadius: '20px',
				color: 'white',
				marginBottom: '2vw',
			}}
		>
			<div className='card__inner'>
				<CardMedia
					className='card__inner-image'
					style={{
						borderRadius: '1vw',
						background: '#000',
						// width: '23vw',
						// height: '20vw',
						margin: '0 auto',
					}}
					component='img'
					alt={item.image}
					// height='140'
					image={item.image}
				/>
				<div className='card__inner2'>
					<div className='card__inner-text'>
						<div className='author-text'>{item.author}</div>

						<div>Title: {item.title}</div>

						<div>Price: {item.price}$</div>
					</div>
					<div className='card-icons'>
						{/* <Like />
						<CommentsModal item={item} /> */}
						<div
							style={{ color: 'black' }}
							onClick={() => setFavorite(!favorite)}
						></div>
					</div>
				</div>

				<div className='btn-block'>
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
					{/* <BootstrapButton /> */}
				</div>
			</div>
		</motion.div>
	)
}

export default ProductCard
