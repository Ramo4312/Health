import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import MainRoutes from '../MainRoutes'
import Avatar from '@mui/material/Avatar'

// app bar
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import InputLabel from '@mui/material/InputLabel'

import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// icons

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone'
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import '@fontsource/nunito/400.css'

const drawerWidth = 200

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}))

function ResponsiveDrawer(props) {
	const navigate = useNavigate()
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const { user, logout } = useAuth()

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const [anchorEl, setAnchorEl] = React.useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	const [category, setCategory] = React.useState('')

	const handleChange = (event) => {
		setCategory(event.target.value)
	}

	const menuId = 'primary-search-account-menu'
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem
				onClick={() => {
					navigate('/register')
					handleMenuClose()
				}}
			>
				Register
			</MenuItem>
			<MenuItem
				onClick={() => {
					navigate('/login')
					handleMenuClose()
				}}
			>
				Login
			</MenuItem>
			{user ? (
				<MenuItem
					onClick={() => {
						logout()
						navigate('/')
						handleMenuClose()
					}}
				>
					Logout
				</MenuItem>
			) : null}
		</Menu>
	)

	const mobileMenuId = 'primary-search-account-menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
					<Badge badgeContent={5} color='error'>
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size='large'
					aria-label='show 17 new notifications'
					color='inherit'
				>
					<Badge badgeContent={17} color='error'>
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	)

	const menuList = [
		{
			title: 'Главное',
			page: '/',
			icons: <HomeTwoToneIcon fontSize='large' />,
		},
		{
			title: 'Создать',
			page: '/create-data-person',
			icons: <AddBoxTwoToneIcon fontSize='large' />,
		},
		{
			title: 'Магазин',
			page: '/market',
			icons: <StoreTwoToneIcon fontSize='large' />,
		},
	]

	const drawer = (
		<div>
			<Toolbar
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<h2>Health</h2>
			</Toolbar>
			<Divider />
			<List>
				{menuList.map(item => (
					<ListItem
						key={item.title}
						disablePadding
						onClick={() => navigate(item.page)}
					>
						<ListItemButton>
							<ListItemIcon>{item.icons}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
				{/* <ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<AddBoxTwoToneIcon fontSize='large' style={{ color: 'black' }} />
						</ListItemIcon>
						<ListItemText
							primary='Создать'
							onClick={() => navigate('/create-data-person')}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<StoreTwoToneIcon fontSize='large' style={{ color: 'black' }} />
						</ListItemIcon>
						<ListItemText
							primary='Магазин'
							onClick={() => navigate('/market')}
						/>
					</ListItemButton>
				</ListItem> */}
			</List>
			<Divider />
			<List>
				{['Расписание', 'Изабранное', 'Чат', 'Корзина'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box sx={{ display: 'flex', background: 'transparent' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						className='menu-button'
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, ml: 1, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
						}}
					>
						{/* <Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								sx={{
									width: '30vw',
									// border: '1px solid black',
									// borderRadius: '10px',
								}}
								placeholder='Search…'
								inputProps={{ 'aria-label': 'search' }}
							/>
						</Search> */}

						<span className='span-search'>
							<input
								className='input-search'
								type='text'
								placeholder='Search'
								id='search-input'
							/>
							<span></span>
						</span>

						<Box sx={{ minWidth: 120 }} className='select-sitebar'>
							<FormControl
								sx={{ borderColor: 'red' }}
								color='secondary'
								// variant='standard'
								fullWidth
								size='small'
								className='form-select'
							>
								<InputLabel
									className='select-label'
									id='demo-simple-select-label'
								>
									Category
								</InputLabel>
								<Select
									className='select-value'
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={category}
									label='Category'
									onChange={handleChange}
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</div>
					{/* <Typography variant='h6' noWrap component='div'>
						Responsive drawer
					</Typography> */}
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size='large'
							aria-label='show 4 new mails'
							color='inherit'
						>
							<Badge badgeContent={4} color='error'>
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton
							size='large'
							aria-label='show 17 new notifications'
							color='inherit'
						>
							<Badge badgeContent={15} color='error'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							<Avatar src={user} alt={user} />
						</IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
			<Box
				component='nav'
				sx={{
					width: { sm: drawerWidth },
					flexShrink: { sm: 0 },
				}}
				aria-label='mailbox folders'
			>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<MainRoutes />
			</Box>
		</Box>
	)
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
}

export default ResponsiveDrawer
