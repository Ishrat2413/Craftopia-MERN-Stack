import { useLoaderData } from "react-router-dom";

const CraftsDetails = () => {
    const craftDetails = useLoaderData();
    console.log(craftDetails);
    return (
        <div className="card card-side bg-base-100 shadow-xl m-24">
            <figure><img src={craftDetails.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{craftDetails.itemName}</h2>
                <p>{craftDetails.description}</p>
                <p className="font-semibold">Category: {craftDetails.subCat}</p>
                <p className="font-semibold">Art by: {craftDetails.name}</p>
                <div className="flex gap-x-5">
                    <p>Price: {craftDetails.price}</p>
                    <p>Status: {craftDetails.stockStatus}</p>
                </div>
                <div className="flex">
                    <p>Rating: {craftDetails.rating}</p>
                    <p>Time: {craftDetails.timing}</p>
                </div>
            </div>
        </div>
    );
};

export default CraftsDetails;