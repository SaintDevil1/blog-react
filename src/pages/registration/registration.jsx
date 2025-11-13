import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { server } from '../../bff';
import { AuthFormError, Button, H2, Input } from '../../components';
import { useResetForm } from '../../hooks'
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { setUser } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import { selectUsersRole } from '../../selectors/index.js';
import { ROLE } from '../../constants/index.js';


const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин.Допускаются только буквы и цифры ')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются буквы и цифры и знаки # %')
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});



export const RegistrationContainer = ({ className }) => {

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const roleId = useSelector(selectUsersRole);

	useResetForm(reset)

	const onSubmit = ({ login, password }) => {
		server.register(login, password)
			.then(({ error, res }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}
				dispatch(setUser(res));
			});
	};

	if (roleId !== ROLE.GUEST) {
		return <Navigate to='/' />;
	}

	const formError = errors?.login?.message || errors?.password?.message ||  errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type='text' placeholder='Логин...'
							 {...register('login', {
								 onChange: () => setServerError(null),
							 })} />
				<Input type='password' placeholder='Пароль...'
							 {...register('password', {
								 onChange: () => setServerError(null),
							 })} />
				<Input type='password' placeholder='Повторите пароль'
							 {...register('passcheck', {
								 onChange: () => setServerError(null),
							 })} />
				<Button type='submit' disabled={!!formError}>
					Зарегистрироваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
			</form>
		</div>
	);

};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}

`;
