import Swal from "sweetalert2";
import UseAuth from "../Layouts/UseAuth";


const AddCraft = () => {

    const { user } = UseAuth();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const itemName = e.target.itemName.value;
        const subCat = e.target.subCat.value;
        const price = e.target.price.value;
        const customization = e.target.customization.value;
        const stockStatus = e.target.stockStatus.value;
        const image = e.target.photoURL.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const timing = e.target.timing.value;
        const name = e.target.fullName.value;
        const email = user.email;

        const info = { itemName, subCat, price, customization, stockStatus, image, description, rating, timing, name, email }

        fetch("https://b9a10-craftopia-server.vercel.app/addcraft", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(info);
    }
    return (
        <div className="pt-2 pb-14">
            <div className="shadow-lg p-5 border rounded-xl bg-[#fbd3d09c]">
                <div className="mt-1 mb-2">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="text-2xl font-bold">
                            Add new Art & Crafts Here
                        </span>
                    </p>
                </div>

                <form onSubmit={handleAddProduct}>
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
                            />

                            <label
                                className="block mt-4 mb-2"
                                htmlFor="brand">
                                Sub-Category Name
                            </label>
                            <select
                                name="subCat"
                                id="subCat"
                                className="w-full p-2 border rounded-md "
                                type="text"
                                placeholder="Select Sub Category">
                                <option value="Landscape" selected>
                                    Landscape
                                </option>
                                <option value="Portrait" selected>
                                    Portrait
                                </option>
                                <option value="WaterColor" selected>
                                    WaterColor
                                </option>
                                <option value="Oil Painting" selected>
                                    Oil Painting
                                </option>
                                <option value="Charcoal" selected>
                                    Charcoal
                                </option>
                                <option value="Cartoon" selected>
                                    Cartoon
                                </option>
                            </select>
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
                            />
                            <label
                                className="block mt-4 mb-2"
                                htmlFor="price">
                                Customization
                            </label>
                            <select
                                name="customization"
                                id="customization"
                                className="w-full p-2 border rounded-md "
                                type="text"
                                placeholder="Select Ans">
                                <option value="Yes" selected>
                                    Yes
                                </option>
                                <option value="No" selected>
                                    No
                                </option>
                            </select>
                            <label
                                className="block mt-4 mb-2"
                                htmlFor="price">
                                Stock Status
                            </label>
                            <select
                                name="stockStatus"
                                id="stockStatus"
                                className="w-full p-2 border rounded-md "
                                type="text"
                                placeholder="Select Ans">
                                <option value="In Stock" selected>
                                    In Stock
                                </option>
                                <option value="Made to Order" selected>
                                    Made to Order
                                </option>
                            </select>
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
                            />

                            <label
                                className="block mt-4 mb-2"
                                htmlFor="rating">
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md "
                                maxLength={5}
                                max={5}
                                min={0}
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
                            />
                            <label
                                className="block mt-4 mb-2"
                                htmlFor="rating">
                                Processing Time
                            </label>
                            <input
                                className="w-full p-2 border rounded-md "
                                maxLength={5}
                                max={5}
                                min={0}
                                type="number"
                                placeholder="Enter Rating in hours"
                                id="timing"
                                name="timing"
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
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2" htmlFor="image">
                                    Email
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md "
                                    type="email"
                                    placeholder="Email"
                                    id="image"
                                    name="email"
                                />

                            </div>
                        </div>
                    </div>
                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#6c696a] text-white bg-[#252e6a] duration-200 cursor-pointer font-semibold"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddCraft;