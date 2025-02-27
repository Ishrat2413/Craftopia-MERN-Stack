import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../Layouts/UseAuth";

const SubCategoryDetails = () => {
    const { user } = UseAuth();
    const craftDetails = useLoaderData();
    return (
        <div className="grid md:grid-cols-2">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[200px]" src={craftDetails.image} alt="Arts" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl font-serif">{craftDetails.itemName}</h2>
                    <p className="font-semibold">Category: {craftDetails.subCat}</p>
                </div>
                <div className="card-actions mt-4">
                    <Link to={user ?
                        `/allartcraft/${craftDetails.subCat}`
                        : "/login"}><button className="btn btn-secondary">View Details</button ></Link>
                </div>
            </div>
        </div >
    );
};

export default SubCategoryDetails;