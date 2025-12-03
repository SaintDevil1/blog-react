import { Error } from '../error/error';
import { useSelector } from 'react-redux';
import { selectUsersRole } from '../../selectors';
import { checkAccess } from '../../utils';
import { ERROR} from '../../constants/index';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUsersRole);
	const accessError = checkAccess(access,userRole) ? null : ERROR.ACCESS_DENIED;
const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

