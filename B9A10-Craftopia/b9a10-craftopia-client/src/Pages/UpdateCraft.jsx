import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {

    const { _id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        fetch(`https://b9a10-craftopia-server.vercel.app/updateCraft/${_id}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
    }, [_id])

    const handleUpdate = (e) => {
        e.preventDefault()

        const itemName = e.target.itemName.value;
        const subCat = e.target.subCat.value;
        const price = e.target.price.value;
        const customization = e.target.customization.value;
        const image = e.target.photoURL.value;
        const description = e.target.description.value;
        const name = e.target.fullName.value;

        const info = { itemName, subCat, price, customization, image, description, name }
        fetch(`https://b9a10-craftopia-server.vercel.app/updateItems/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="pt-2 pb-14">
            <div className="shadow-lg p-5 border rounded-xl bg-[#e0f4e3e6]">
                <div className="mt-1 mb-2">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="text-2xl font-bold">
                            Update your Arts & Crafts Here
                        </span>
                    </p>
                </div>

                <form onSubmit={handleUpdate}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2" htmlFor="name">
                                Item Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md"
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="itemName"
                                defaultValue={items.itemName}
                            />

                            <label
                                className="block mt-4 mb-2"
                                htmlFor="brand">
                                Sub-Category Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md"
                                type="text"
                                placeholder="Select Sub Category"
                                id="subCat"
                                name="subCat"
                                defaultValue={items.subCat}
                            />
                            <label
                                className="block mt-4 mb-2"
                                htmlFor="price">
                                Price
                            </label>
                            <input
                                className="w-full p-2 border rounded-md"
                                type="text"
                                placeholder="Enter Price"
                                id="Price"
                                name="price"
                                defaultValue={items.price}
                            />

                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md "
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                name="photoURL"
                                defaultValue={items.image}
                            />
                            <label className="block mb-2 mt-4" htmlFor="type">
                                Short Description
                            </label>
                            <input
                                className="w-full p-2 border rounded-md "
                                type="text"
                                placeholder="Enter type"
                                id="type"
                                name="description"
                                defaultValue={items.description}
                            />
                            <label
                                className="block mt-4 mb-2"
                                htmlFor="price">
                                Customization
                            </label>
                            <input
                                className="w-full p-2 border rounded-md"
                                type="text"
                                placeholder="Select Ans"
                                id="customization"
                                name="customization"
                                defaultValue={items.customization}
                            />


                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-center pt-4">Personal Information</h2>
                        <div className="flex gap-8 ">
                            <div className="flex-1">
                                <label className="block mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md"
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    name="fullName"
                                    defaultValue={items.name}
                                />
                            </div>
                        </div>
                    </div>
                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6c696a] text-white bg-[#123c15] duration-200 cursor-pointer font-semibold"
                        type="submit"
                        value="UPDATE Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;