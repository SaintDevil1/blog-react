import { Route, Routes } from 'react-router-dom';
import { Authorization, Registration, Users, Post } from './pages';
import { Header, Footer, Modal } from './components';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import styled from 'styled-components';


const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;


const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	const dispatch = useDispatch();


	useLayoutEffect(() => {
		const currentUserDataJson = sessionStorage.getItem('userData');
		if (!currentUserDataJson) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJson);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			})
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path='/' element={<div>Главная страница</div>} />
					<Route path='/login' element={<Authorization />} />
					<Route path='/register' element={<Registration />} />
					<Route path='/users' element={<Users />} />
					<Route path='/post' element={<div>Новая статья</div>} />
					<Route path='/post/:id' element={<Post />} />
					<Route path='/post/:id/edit' element={<Post />} />
					{/*<Route path='/post/:id/*' element={<div>Ошибка</div} />*/}
					<Route path='/*' element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};

