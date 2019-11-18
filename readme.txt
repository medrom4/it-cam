Компонента - 	ФУНКЦИЯ, возвращающая разметку (JSX);

import React from 'react';   --- везде в файлах, стандарт
import s from './Navbar.module.css';   --- css импорт css

1. 	Node.js --- путь без русских букв

2.	npm create-react-app nazvaniePapki --- установка необходимых компонентов
	npm start

3. 	import, export

4. 	auto import - плагин для автоматического подстраивания пути к файлам

5. 	.module.css - для css
	<a className={`${s.item} ${s.colp}`} href="#s">Music</a>

6.	props --- параметры из компоненты (функции)

7.	npm i react-router-dom -save --- для пепехода на новую страницу без перезагрузки

	import { BrowserRouter, Route } from 'react-router-dom';
	import { NavLink } from 'react-router-dom';

	<BrowserRouter>
	<Route path='/profile' component={Profile} />
	</BrowserRouter>

	<NavLink></NavLink> --- вместо ссылок <a></a>
	<NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>

8.	

9.

10.


