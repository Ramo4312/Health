import React from 'react';
import SiteBar from '../components/SiteBar'
import '../styles/RecipesPage.css';
import Image1 from '../images/recipe1.svg';
import Image2 from '../images/recipes2.svg';
import Image3 from '../images/recipe3.svg';
import Image4 from '../images/recipe4.svg';
import Image5 from '../images/recipe5.svg';
import Image6 from '../images/recipe6.svg';
import Image7 from '../images/recipe7.svg';
import Image8 from '../images/recipe8.svg';

import arrowLeft from '../images/arrow-left.svg';
import photo1 from '../images/photo-1.svg';
import photo2 from '../images/photo-2.svg';
import photo3 from '../images/photo-3.svg';
import photo4 from '../images/photo-4.svg';
import photo5 from '../images/photo-5.svg';
import photo6 from '../images/photo-6.svg';

import recPhoto1 from '../images/rec-photo-1.svg';
import recPhoto2 from '../images/rec-photo-2.svg';
import recPhoto3 from '../images/rec-photo-3.svg';
import recPhoto4 from '../images/rec-photo-4.svg';
import serching from '../images/recipes-serch.svg';

const RecipesPage = () => {
	return (
		/*Recipes first ----------------------------*/
		<>
			<div className="recipes-container">
				<SiteBar/>
				<div className="recipes-container__recipe-parent-block">
					<div className="recipe-child-block">
						<div className="recipes">
							<h2 className='recipes-title'>Рецепты</h2>
							<p className='recipes-txt-1'>Ваша дневной прием калорий :  1507 ккал/день</p>
							<p className='recipes-txt-2'>Выберите подходящее время :</p>
							<div className="recipes-btn">
								<button className="btn-btn">Завтрак</button>
								<button className="btn-btn">Полдник</button>
								<button className="btn-btn">Обед</button>
								<button className="btn-btn">Ужин</button>
							</div>
						</div>
						
						<img src={Image1} alt="img" className='image-1'/>
						<img src={Image2} alt="img" className='image-2'/>
						<img src={Image3} alt="img" className='image-3'/>
						<img src={Image4} alt="img" className='image-4'/>
						<img src={Image5} alt="img" className='image-5'/>
						<img src={Image6} alt="img" className='image-6'/>
						<img src={Image7} alt="img" className='image-7'/>
						<img src={Image8} alt="img" className='image-8'/>

					</div>
				</div>
			</div>
     
			<div className="recipes-container-second">
				<SiteBar/>
				<div className="recipes-parent-block-second">
					<div className="recipes-child-block-second">
						<div className="recipes-title-breakf">
							Рецепты
						</div>
						<div className="recipes-serch-box">
							<div className="recipes-serching">
								<p className="recipes-serch-placehold">Найти рецепт</p>
								<img src={serching} alt="icon" />
							</div>
							<select name='select' className='select'>
								<option selected='selected'>Все рецепты</option>
								<option>Завтрак</option>
								<option>Обед</option>
								<option>Полдник</option>
								<option>Ужин</option>
							</select>
						</div>
						<div className="recipes-menu-block">
							<div className="recipes-menu-items">
								<img src={photo1} alt="img" className="photo-1" />
								<div className="recipes-menu-div-1">
									<div className="recipes-menu-kcal">
									<p className="recipes-menu-txt">ПП оладьи</p>
									<p className="recipes-menu-txt-kcal">220 ккал</p>
								</div>
								<div className="recipes-menu-prod">
									<p className='menu-prod-item'>Жиры: 50</p>
									<p className='menu-prod-item'>Белки: 50</p>
									<p className='menu-prod-item'>Углеводы: 50</p>
								</div>
								</div>
								
							</div>
							<div className="recipes-menu-items">
								<img src={photo2} alt="img" className="photo-2" />
								<div className="recipes-menu-div-2">
									<div className="recipes-menu-kcal">
									<p className="recipes-menu-txt">Греческий<br/>салат</p>
									<p className="recipes-menu-txt-kcal">220 ккал</p>
								</div>
								<div className="recipes-menu-prod">
									<p className='menu-prod-item'>Жиры: 50</p>
									<p className='menu-prod-item'>Белки: 50</p>
									<p className='menu-prod-item'>Углеводы: 50</p>
								</div>
								</div>
								
							</div>
							<div className="recipes-menu-items">
								<img src={photo3} alt="img" className="photo-3" />
								<div className="recipes-menu-div-3">
									<div className="recipes-menu-kcal">
									<p className="recipes-menu-txt">Чечевица</p>
									<p className="recipes-menu-txt-kcal">220 ккал</p>
								</div>
								<div className="recipes-menu-prod">
									<p className='menu-prod-item'>Жиры: 50</p>
									<p className='menu-prod-item'>Белки: 50</p>
									<p className='menu-prod-item'>Углеводы: 50</p>
								</div>
								</div>
								
							</div>
							<div className="recipes-menu-items">
								<img src={photo4} alt="img" className="photo-4" />
								<div className="recipes-menu-div-4">
									<div className="recipes-menu-kcal">
									<p className="recipes-menu-txt">Cалат из<br/>курицы</p>
									<p className="recipes-menu-txt-kcal">220 ккал</p>
								</div>
								<div className="recipes-menu-prod">
									<p className='menu-prod-item'>Жиры: 50</p>
									<p className='menu-prod-item'>Белки: 50</p>
									<p className='menu-prod-item'>Углеводы: 50</p>
								</div>
								</div>
								
							</div>
							<div className="recipes-menu-items">
								<img src={photo5} alt="img" className="photo-5" />
								<div className="recipes-menu-div-5">
									<div className="recipes-menu-kcal">
										<p className="recipes-menu-txt">Завтрак из<br/>шпината</p>
										<p className="recipes-menu-txt-kcal">220 ккал</p>
									</div>
									<div className="recipes-menu-prod">
										<p className='menu-prod-item'>Жиры: 50</p>
										<p className='menu-prod-item'>Белки: 50</p>
										<p className='menu-prod-item'>Углеводы: 50</p>
									</div>
								</div>
								
							</div>
							<div className="recipes-menu-items">
								<img src={photo6} alt="img" className="photo-6" />
								<div className="recipes-menu-div-6">
									<div className="recipes-menu-kcal">
										<p className="recipes-menu-txt">Легкий салат</p>
										<p className="recipes-menu-txt-kcal">220 ккал</p>
									</div>
									<div className="recipes-menu-prod">
										<p className='menu-prod-item'>Жиры: 50</p>
										<p className='menu-prod-item'>Белки: 50</p>
										<p className='menu-prod-item'>Углеводы: 50</p>
									</div>
								</div>
								
							</div>
						</div>
					</div>

					<div className="bg-ellips-1"></div>
					<div className="bg-ellips-2"></div>
					<div className="bg-ellips-3"></div>
				</div>
			</div>
			

			<div className="recipes-container-third">
				<SiteBar/>
				<div className="recipes-parent-block-third">
					<div className="recipes-child-block-third">
						<div className="recipes-arrow-break-3">
							<img src={arrowLeft} alt="img" className="arrow-left" />
							ПП оладьи
						</div>
						<p className="recipes-txt-4">Рекомендуемый прием калорий на завтрак:  250 ккал</p>
						<div className="recipes-menu-ingrid">
							<div className="recipes-ingrid-prod-kcal">
								<img src={photo1} alt="img" className="photo-ingrid" />
								<div className="recipes-ingrid-kcal">
									<div className="recipes-ingrid-catalog">
										<div className="recipes-ingrid-kcal-pargraf-1">
										<p className="recipes-menu-txt-a">ПП оладьи</p>
										<p className="recipes-menu-kcal">220 ккал</p>
									</div>
									<div className="recipes-ingrid-menu-items">
										<p className='menu-ingrid-item'>Жиры: 50</p>
										<p className='menu-ingrid-item'>Белки: 50</p>
										<p className='menu-ingrid-item'>Углеводы: 50</p>
									</div>
									</div>
									<div className="recipe-ingridients">
										<p className="ingridients-title">Ингридиенты</p>
										<div className="ingridients-box">
											<p>Кефир</p>
											<p>200 мл</p>
										</div>
										<div className="ingridients-box">
											<p>Яйца</p>
											<p>2 шт</p>
										</div>
										<div className="ingridients-box">
											<p>Рисовая мука</p>
											<p>200 мл</p>
										</div>
										<div className="ingridients-box">
											<p>Кефир</p>
											<p>200 мл</p>
										</div>
									</div>
								</div>							
							</div>
							<div className="recipes-steps-blc">
								<div className="recipes-step-cont">
									<img src={recPhoto1} alt="img" className="rec-photo-1" />
									<div className="recipes-step">
										<p className="recipes-desc-txt-1">Шаг 1</p>
										<p className="recipes-desc-txt-2">Для этого кефир возьмите нежирный, исключите сахар и масло для обжаривания. Не заменяйте соду разрыхлителем, если придерживаетесь безглютеновой диеты - разрыхлитель содержит пшеничную муку в составе.</p>
									</div>
								</div>
								<div className="recipes-step-cont">
									<img src={recPhoto2} alt="img" className="rec-photo-2" />
									<div className="recipes-step">
										<p className="recipes-desc-txt-1">Шаг 2</p>
										<p className="recipes-desc-txt-2">Кефир выньте из холодильника заранее или подогрейте его до теплого состояния. Всыпьте в кефир соду, перемешайте. В теплом кефире реакция начнется быстрее, поэтому мы его и греем. Оставьте кефир на 5 минут для реакции.</p>
									</div>
								</div>
								<div className="recipes-step-cont">
									<img src={recPhoto3} alt="img" className="rec-photo-3" />
									<div className="recipes-step">
										<p className="recipes-desc-txt-1">Шаг 3</p>
										<p className="recipes-desc-txt-2">Разбейте в кефир яйцо, добавьте соль. Перемешайте.</p>
									</div>
								</div>
								<div className="recipes-step-cont">
									<img src={recPhoto4} alt="img" className="rec-photo-4" />
									<div className="recipes-step">
										<p className="recipes-desc-txt-1">Шаг 4</p>
										<p className="recipes-desc-txt-2">Для этого кефир возьмите нежирный, исключите сахар и масло для обжаривания. Не заменяйте соду разрыхлителем, если придерживаетесь безглютеновой диеты - разрыхлитель содержит пшеничную муку в составе.</p>
									</div>
								</div>
							</div>
							
						</div>
							<div className="recipes-bg-ellips-1"></div>
							<div className="recipes-bg-ellips-2"></div>
							<div className="recipes-bg-ellips-3"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RecipesPage;