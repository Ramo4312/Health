import React from 'react'
import SiteBar from '../../components/SiteBar'
import { motion } from 'framer-motion'
import '../../styles/DishesCalc.css'
import arrowBack from '../../images/arrow_back_ios_new.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Circle_background from '../../components/Circle_background'

export default function DishesCalc() {
    const navigate = useNavigate()

    return (
        <div className='main-container'>
            <SiteBar />
            <div className='dishes-parent-block'>
                <motion.div
                    initial={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='dishes-child-block'
                >
                    <div className='block-1'>
                        <img src={arrowBack} onClick={() => navigate('/calc')} /> Завтрак
                    </div>

                    <div className='block-2'>
                        <Paper
                            component="form"
                            sx={{ display: 'flex', alignItems: 'center', width: '100%', background: '#F1F3FF' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>

                    <div className='table-block'>
                        <div className='table-block-desc-first'>
                            <p>Продукт</p>
                            <div></div>
                        </div>
                        <Divider color={'#909CFF'} orientation="vertical" />

                        <div className='table-block-desc'>
                            <p>Белки</p>
                            <div></div>
                        </div>
                        <Divider color={'#909CFF'} orientation="vertical" />

                        <div className='table-block-desc'>
                            <p>Жиры</p>
                            <div></div>
                        </div>
                        <Divider color={'#909CFF'} orientation="vertical" />

                        <div className='table-block-desc'>
                            <p>Углеводы</p>
                            <div></div>
                        </div>
                        <Divider color={'#909CFF'} orientation="vertical" />

                        <div className='table-block-desc'>
                            <p>Калории</p>
                            <div></div>
                        </div>

                    </div>

                    <Button desc='Добавить продукт' className='bt'/>

                </motion.div>
                <Circle_background/>

            </div>
        </div>
    )
}
