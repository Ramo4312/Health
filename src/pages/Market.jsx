import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useProduct } from '../contexts/productsContext'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/Market.css'
import Pagination from '@mui/material/Pagination'
import { motion } from 'framer-motion'

const Market = () => {
	const { getProducts, products } = useProduct()

	useEffect(() => {
		getProducts()
	}, [])

	const [page, setPage] = useState(1)

	const itemsOnPage = 6

	const count = Math.ceil(products.length / itemsOnPage)

	const handlePage = (e, p) => {
		setPage(p)
	}

	function currentData() {
		const begin = (page - 1) * itemsOnPage
		const end = begin + itemsOnPage

		return products.slice(begin, end)
	}

	return (
		<div className='market-list'>
			<div
				style={{
					width: '90%',
					margin: ' auto',
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
				}}
			>
				{currentData()?.map((item, i) => (
					<ProductCard key={item.id} item={item} i={i} />
				))}
			</div>
			<Pagination
				className='pagination'
				count={count}
				page={page}
				onChange={handlePage}
				variant='outlined'
				style={{ marginTop: '20px' }}
			/>
		</div>
	)
}

export default Market
