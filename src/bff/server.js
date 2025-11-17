import { authorize, register, logout, fetchUsers, fetchRoles, updateUserRole, removeUser} from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
