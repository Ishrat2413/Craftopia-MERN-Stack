import PropTypes from 'prop-types';
import UseAuth from "./UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();


    if (loading) {
        return <h1 className="text-4xl">Loading</h1>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivateRoutes.propTypes = {
    children: PropTypes.object,
}

export default PrivateRoutes;


