import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../Layouts/UseAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";



const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = UseAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const from = "/";

    const onSubmit = (data) => {
        const { email, password } = data
        createUser(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registered Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })

    };
    return (
        <div className=" min-h-screen ">
            <div className="hero-content flex-col bg-base-200">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Write your name" className="input input-bordered" {...register("fullName", { required: true })} required />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Write your email" name="email" className="input input-bordered" {...register("email", { required: true })} required />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Give your photo URL" className="input input-bordered" {...register("imgURL")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    placeholder="Write a Password"
                                    name="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must have at least 6 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                            message: "Password must include at least one uppercase and one lowercase letter"
                                        }
                                    })}
                                    className="w-full input input-bordered"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                                <span className="absolute top-4 left-[280px]" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary ">Register</button>
                        </div>
                        <div>
                            <h2>Already have an Account? <NavLink className="underline" to="/login">Login</NavLink> Here</h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;