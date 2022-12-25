import React, { useState } from 'react'
import '../styles/Weather.css'
// import '../styles/form.style.css'
import 'weather-icons/css/weather-icons.css'
import { motion } from 'framer-motion'
import SiteBar from '../components/SiteBar'
import toggler from '../images/menu.svg'

const Api_Key = '429736441cf3572838aa10530929f7cd'

const WeatherPage = () => {
	const [city, setCity] = useState(undefined)
	const [country, setCountry] = useState(undefined)
	const [icon, setIcon] = useState(undefined)
	const [main, setMain] = useState(undefined)
	const [celsius, setCelsius] = useState(undefined)
	const [temp_max, setTemp_max] = useState(null)
	const [temp_min, setTemp_min] = useState(null)
	const [description, setDescription] = useState('')
	const [error, setError] = useState(false)
	const [open, setOpen] = useState(false)

	const weatherIcon = {
		Thunderstorm: 'wi-thunderstorm',
		Drizzle: 'wi-sleet',
		Rain: 'wi-storm-showers',
		Snow: 'wi-snow',
		Atmosphere: 'wi-fog',
		Clear: 'wi-day-sunny',
		Clouds: 'wi-day-fog',
	}

	const Weather = ({
		cityname,
		weatherIcon,
		temp_celsius,
		temp_min,
		temp_max,
		description,
	}) => {
		function maxminTemp(min, max) {
			if (max && min) {
				return (
					<>
						<h3>
							<span className=' min px-4'>Минимум: {min}&deg;</span>
							<br />
							<span className=' max px-4'>Максимум: {max}&deg;</span>
						</h3>
						<br />
					</>
				)
			}
		}

		return (
			<div className='weather-block'>
				<h1 className='text-white weather-h1 py-3'>{cityname}</h1>
				<div className='Card'>
					<h5 className=' iconClouds py-4'>
						<i id='cloudsIcons' className={`wi ${weatherIcon} display-1`} />
					</h5>

					<div>
						{temp_celsius ? (
							<h1 className='py-2 celcium'>{temp_celsius}&deg;</h1>
						) : null}
						{maxminTemp(temp_min, temp_max)}

						<h4 className='py-3 clouds'>
							{description.charAt(0).toUpperCase() + description.slice(1)}
						</h4>
					</div>
				</div>
			</div>
		)
	}

	function get_WeatherIcon(icons, rangeId) {
		switch (true) {
			case rangeId >= 200 && rangeId < 232:
				setIcon(icons.Thunderstorm)
				break
			case rangeId >= 300 && rangeId <= 321:
				setIcon(icons.Drizzle)
				break
			case rangeId >= 500 && rangeId <= 521:
				setIcon(icons.Rain)
				break
			case rangeId >= 600 && rangeId <= 622:
				setIcon(icons.Snow)
				break
			case rangeId >= 701 && rangeId <= 781:
				setIcon(icons.Atmosphere)
				break
			case rangeId === 800:
				setIcon(icons.Clear)
				break
			case rangeId >= 801 && rangeId <= 804:
				setIcon(icons.Clouds)
				break
			default:
				setIcon(icons.Clouds)
		}
	}

	function calCelsius(temp) {
		let cell = Math.floor(temp - 273.15)
		return cell
	}

	const getWeather = async e => {
		e.preventDefault()

		const country = e.target.elements.country.value
		const city = e.target.elements.city.value

		if (country && city) {
			const api_call = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
			)

			const response = await api_call.json()

			setCity(`${response.name}, ${response.sys.country}`)
			setCountry(response.sys.country)
			setMain(response.weather[0].main)
			setCelsius(calCelsius(response.main.temp))
			setTemp_max(calCelsius(response.main.temp_max))
			setTemp_min(calCelsius(response.main.temp_min))
			setDescription(response.weather[0].description)
			setError(false)

			get_WeatherIcon(weatherIcon, response.weather[0].id)
		} else {
			setError(true)
		}
	}

	const Form = ({ loadweather, error }) => {
		return (
			<div className='weather-form-container h-100'>
				<form onSubmit={loadweather}>
					{error ? (
						<div style={{ color: 'black', fontSize: '1.6rem' }} role='alert'>
							Please Enter City and Country...!
						</div>
					) : null}
					{/* <div className='col-md-3'> */}
					<input
						type='text'
						className='form-control'
						placeholder='Страна'
						name='country'
						autoComplete='off'
					/>
					<input
						type='text'
						className='form-control'
						placeholder='Город'
						name='city'
						autoComplete='off'
					/>
					<button
						className='btn btn-warning'
						color='warning'
						variant='contained'
					>
						Узнать погоду
					</button>
					{/* </div> */}
				</form>
			</div>
		)
	}

	return (
		<div className='weather-main-container'>
			<SiteBar open={open} setOpen={setOpen} />

			<div className='weather-container'>
				<img
					src={toggler}
					className='siteBar-toggler-weather'
					onClick={() => setOpen(true)}
				/>
				<motion.div
					onClick={() => setOpen(false)}
					className='App'
					initial={{ opacity: 0, translateX: -50 }}
					animate={{ opacity: 1, translateX: 0 }}
					transition={{ duration: 0.3, delay: 0.5 }}
				>
					<Form loadweather={getWeather} error={error} />
					<Weather
						cityname={city}
						weatherIcon={icon}
						temp_celsius={celsius}
						temp_max={temp_max}
						temp_min={temp_min}
						description={description}
					/>
				</motion.div>
				<div className='back-ellipse-1'></div>
				<div className='back-ellipse-2'></div>
				<div className='back-ellipse-3'></div>
				<div className='back-ellipse-4'></div>
				<div className='back-ellipse-5'></div>
			</div>
		</div>
	)
}

export default WeatherPage
