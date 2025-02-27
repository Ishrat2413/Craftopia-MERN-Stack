import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UseAuth from '../Layouts/UseAuth';

const SubCatCard = ({ all }) => {
    const { user } = UseAuth();

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[200px]" src={all.image} alt="Arts" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl font-serif">{all.imgName}</h2>
                    <p className="font-semibold">Category: {all.subcategory_Name}</p>
                    <div className="card-actions mt-4">
                        <Link to={user ?
                            `/${all.subcategory_Name}`
                            : "/login"}><button className="btn btn-secondary">View Details</button ></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SubCatCard.propTypes = {
    all: PropTypes.object,
}
export default SubCatCard;