import React, { createContext, useContext, useReducer } from 'react'

function getCountPostsInBasket() {
	const basket = JSON.parse(localStorage.getItem('basket'))

	return basket ? basket.posts.length : 0
}

const calcSubPrice = post => +post.count * post.item.price

const calcTotalPrice = posts => {
	return posts.reduce((prev, cur) => {
		return (prev += cur.subPrice)
	}, 0)
}

const basketContext = createContext()
export const useBasket = () => useContext(basketContext)

const INIT_STATE = {
	basket: JSON.parse(localStorage.getItem('basket')),
	basketLength: getCountPostsInBasket(),
}

function reducer(state = INIT_STATE, action) {
	switch (action.type) {
		case 'GET_BASKET':
			return { ...state, basket: action.payload }
		case 'GET_BASKET_LENGTH':
			return { ...state, basketLength: action.payload }
		default:
			return state
	}
}

const BasketContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const getBasket = () => {
		let basket = JSON.parse(localStorage.getItem('basket'))

		if (!basket) {
			localStorage.setItem(
				'basket',
				JSON.stringify({
					posts: [],
					totalPrice: 0,
				})
			)
			basket = {
				posts: [],
				totalPrice: 0,
			}
		}

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	const addPostToBasket = post => {
		let basket = JSON.parse(localStorage.getItem('basket'))

		if (!basket) {
			basket = {
				posts: [],
				totalPrice: 0,
			}
		}

		let newPost = {
			item: post,
			count: 1,
			subPrice: +post.price,
		}

		let postToFind = basket.posts.filter(elem => elem.item.id === post.id)

		if (postToFind.length === 0) {
			basket.posts.push(newPost)
		} else {
			basket.post = basket.posts.filter(elem => elem.item.id !== post.id)
		}

		basket.totalPrice = calcTotalPrice(basket.posts)

		localStorage.setItem('basket', JSON.stringify(basket))

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	function changePostCount(count, id) {
		let basket = JSON.parse(localStorage.getItem('basket'))

		basket.posts = basket.posts.map(post => {
			if (post.item.id === id) {
				post.count = count

				post.subPrice = calcSubPrice(post)
			}
			return post
		})

		basket.totalPrice = calcTotalPrice(basket.posts)

		localStorage.setItem('basket', JSON.stringify(basket))

		dispatch({
			type: 'GET_BASKET',
			payload: basket,
		})
	}

	function deletePostInBasket(id) {
		let basket = JSON.parse(localStorage.getItem('basket'))

		basket.posts = basket.posts.filter(elem => elem.item.id !== id)

		basket.totalPrice = calcTotalPrice(basket.posts)

		localStorage.setItem('basket', JSON.stringify(basket))

		getBasket()

		dispatch({
			type: 'GET_BASKET_LENGTH',
			payload: basket,
		})
	}

	const values = {
		basket: state.basket,
		basketLength: state.basketLength,

		getBasket,
		addPostToBasket,
		changePostCount,
		deletePostInBasket,
	}
	return (
		<basketContext.Provider value={values}>{children}</basketContext.Provider>
	)
}

export default BasketContextProvider
