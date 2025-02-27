import { useEffect, useState } from "react";
import UseAuth from "../Layouts/UseAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = UseAuth();
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://b9a10-craftopia-server.vercel.app/mylist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data);
            })
    }, [user, control])

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this! Just reload the page.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-craftopia-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            setControl(!control)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h2 className="text-center font-bold text-red-900 text-3xl m-10">Your total Added Items: {item.length}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    item?.map(p => (
                        <div key={p._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className="h-[200px]" src={p.image} alt="Arts" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl font-serif">{p.itemName}</h2>
                                <p>{p.description}</p>
                                <p className="font-semibold">Category: {p.subCat}</p>
                                <p className="font-semibold">Art by: {p.name}</p>
                                <div className="flex gap-x-5">
                                    <p>Price: {p.price}</p>
                                    <p>Status: {p.stockStatus}</p>
                                </div>
                                <div className="flex">
                                    <p>Rating: {p.rating}</p>
                                    <p>Time: {p.timing}</p>
                                </div>
                                <div className="card-actions mt-3 flex">
                                    <Link to={`/mylist/${p._id}`}><button className="btn bg-red-200">Update</button></Link>
                                    <button onClick={() => handleDelete(p._id)} className="btn bg-red-200 ">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyList;