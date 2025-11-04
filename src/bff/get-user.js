import { getUsers} from './get-users.js';

export const getUser = async (loginToFind) => {
	const users =  await getUsers();
	users.find(({ login }) => login === loginToFind);
}
