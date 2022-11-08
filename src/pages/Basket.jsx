import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'
import '../styles/Basket.css'
import { useBasket } from '../contexts/basketContext'
import Button from '@mui/material/Button'
import ChildModal from '../components/products/OrderForm'

function createData(name, calories, fat, carbs, protein) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
	}
}

const rows = [
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Donut', 452, 25.0, 51, 4.9),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Honeycomb', 408, 3.2, 87, 6.5),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Jelly Bean', 375, 0.0, 94, 0.0),
	createData('KitKat', 518, 26.0, 65, 7.0),
	createData('Lollipop', 392, 0.2, 98, 0.0),
	createData('Marshmallow', 318, 0, 81, 2.0),
	createData('Nougat', 360, 19.0, 9, 37.0),
	createData('Oreo', 437, 18.0, 63, 4.0),
]

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index])
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0])
		if (order !== 0) {
			return order
		}
		return a[1] - b[1]
	})
	return stabilizedThis.map(el => el[0])
}

const headCells = [
	{
		id: 'name',
		numeric: false,
		disablePadding: true,
		label: 'Dessert (100g serving)',
	},
	{
		id: 'calories',
		numeric: true,
		disablePadding: false,
		label: 'Calories',
	},
	{
		id: 'fat',
		numeric: true,
		disablePadding: false,
		label: 'Fat (g)',
	},
	{
		id: 'carbs',
		numeric: true,
		disablePadding: false,
		label: 'Carbs (g)',
	},
	{
		id: 'protein',
		numeric: true,
		disablePadding: false,
		label: 'Protein (g)',
	},
]

function EnhancedTableHead(props) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props
	const createSortHandler = property => event => {
		onRequestSort(event, property)
	}

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						color='primary'
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all desserts',
						}}
					/>
				</TableCell>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component='span' sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
}

function EnhancedTableToolbar(props) {
	const { numSelected } = props

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: theme =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: '1 1 100%' }}
					color='inherit'
					variant='subtitle1'
					component='div'
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					sx={{ flex: '1 1 100%' }}
					variant='h6'
					id='tableTitle'
					component='div'
				>
					Nutrition
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title='Filter list'>
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	)
}

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
}

export default function EnhancedTable() {
	const { getBasket, basket, changePostCount, deleteProductInBasket } =
		useBasket()

	useEffect(() => {
		getBasket()
	}, [])

	const [order, setOrder] = React.useState('asc')
	const [orderBy, setOrderBy] = React.useState('calories')
	const [selected, setSelected] = React.useState([])
	const [page, setPage] = React.useState(0)
	const [dense, setDense] = React.useState(false)
	const [rowsPerPage, setRowsPerPage] = React.useState(9)

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelected = rows.map(n => n.name)
			setSelected(newSelected)
			return
		}
		setSelected([])
	}

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name)
		let newSelected = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			)
		}

		setSelected(newSelected)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleChangeDense = event => {
		setDense(event.target.checked)
	}

	const isSelected = name => selected.indexOf(name) !== -1

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

	return (
		<TableContainer className='basket' component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell sx={{ color: 'black' }} align='center'>
							Image
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Name
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Category
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Price
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Count
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Sub Price
						</TableCell>
						<TableCell sx={{ color: 'black' }} align='center'>
							Description
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{basket?.products.map(row => (
						<TableRow
							key={row.item.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align='center' style={{ marginLeft: '2vw' }}>
								<img src={row.item.image} alt='' width='100' height='100' />
							</TableCell>
							<TableCell sx={{ color: 'black' }} align='center'>
								{row.item.title}
							</TableCell>
							{/* <TableCell component='th' scope='row'>
									{row.title}
								</TableCell> */}
							<TableCell sx={{ color: 'black' }} align='center'>
								{row.item.category}
							</TableCell>
							<TableCell sx={{ color: 'black' }} align='center'>
								{row.item.price}$
							</TableCell>
							<TableCell sx={{ color: 'black' }} align='center'>
								<input
									style={{
										width: '2vw',
										textAlign: 'center',
										border: 'none',
										boxShadow: '0 2px 0 black',
									}}
									type='number'
									value={row.count}
									onChange={e => changePostCount(e.target.value, row.item.id)}
								/>
							</TableCell>
							<TableCell sx={{ color: 'black' }} align='center'>
								{row.subPrice}
							</TableCell>
							<TableCell
								sx={{ color: 'black' }}
								align='center'
								style={{ width: '15vw' }}
							>
								{row.item.description}
							</TableCell>
							<Button
								onClick={() => deleteProductInBasket(row.item.id)}
								color='error'
								variant='contained'
								sx={{ my: 6 }}
							>
								<DeleteIcon />
							</Button>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<hr
				style={{
					background: 'linear-gradient(90deg, rgb(0,0,255), rgb(255, 0,0))',
					border: ' none',
					height: '1px',
					boxShadow: ' 0 10px 20px red',
				}}
			/>

			<Typography
				style={{ margin: '2vw' }}
				variant='h6'
				component='div'
				align='right'
			>
				Total price: {basket?.totalPrice}$ <br />
				{basket ? <ChildModal /> : null}
			</Typography>
		</TableContainer>
	)
}
