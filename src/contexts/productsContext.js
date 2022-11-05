import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

export const productContext = createContext()
export const useProduct = () => useContext(productContext)

let API_PRODUCTS = 'http://localhost:8000/products'

const INIT_STATE = {
	allCategories: [],
	products: [],
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return { ...state, products: action.payload }
		case 'GET_CATEGORIES':
			return { ...state, allCategories: action.payload }
		default:
			return state
	}
}

const ProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	let navigate = useNavigate()
	const location = useLocation()

	// add Post

	// async function addPost(newPost) {
	// 	await axios.post(API_PRODUCTS, newPost)

	// 	getProducts()
	// }

	async function getProducts() {
		const { data } = await axios(`${API_PRODUCTS}/${window.location.search}`)

		dispatch({
			type: 'GET_PRODUCTS',
			payload: data,
		})
	}

	async function getCategories() {
		const { data } = await axios(API_PRODUCTS)

		dispatch({
			type: 'GET_CATEGORIES',
			payload: data,
		})
	}

	const fetchByParams = (query, value) => {
		const search = new URLSearchParams(location.search)

		if (value === 'all') {
			search.delete(query)
		} else {
			search.set(query, value)
		}

		const url = `${location.pathname}?${search.toString()}`

		navigate(url)
	}

	// values

	const values = {
		// addPost,
		getProducts,
		fetchByParams,
		getCategories,

		products: state.products,
		allCategories: state.allCategories,
	}

	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	)
}

export default ProductContextProvider
