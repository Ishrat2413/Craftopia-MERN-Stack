import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UseAuth from '../Layouts/UseAuth';

const ArtsCraftCards = ({ all }) => {
    const { user } = UseAuth();

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[200px]" src={all.image} alt="Arts" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl font-serif">{all.itemName}</h2>
                    <p>{all.description}</p>
                    <p className="font-semibold">Category: {all.subCat}</p>
                    <p className="font-semibold">Art by: {all.name}</p>
                    <div className="flex gap-x-5">
                        <p>Price: {all.price}</p>
                        <p>Status: {all.stockStatus}</p>
                    </div>
                    <div className="flex">
                        <p>Rating: {all.rating}</p>
                        <p>Time: {all.timing}</p>
                    </div>
                    <div className="card-actions mt-4">
                        <Link to={user ?
                            `/allartcraft/${all._id}`
                            : "/login"}><button className="btn btn-secondary">View Details</button ></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


ArtsCraftCards.propTypes = {
    all: PropTypes.object,
}

export default ArtsCraftCards;