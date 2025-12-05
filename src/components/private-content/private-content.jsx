import PropTypes from 'prop-types';
import { Error } from '../error/error';
import { useSelector } from 'react-redux';
import { selectUsersRole } from '../../selectors';
import { checkAccess } from '../../utils';
import { ERROR, PROP_TYPE } from '../../constants/index';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUsersRole);
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	serverError: PROP_TYPE.ERROR.ERROR,
};

