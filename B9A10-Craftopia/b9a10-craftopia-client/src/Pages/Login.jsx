import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UseAuth from "../Layouts/UseAuth";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, googleLogin, githubLogin } = UseAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data
        logIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged In Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                console.log(result);
                data.target.reset();
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged In with Google Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        githubLogin()
            .then(result => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged In with Github Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=" min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Write your email" name="email" className="input input-bordered" {...register("email", { required: true })} required />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input placeholder="Write a Password" name="password" {...register("password", { required: true })}
                                    className="w-full input input-bordered"
                                    type={showPassword ? "text" : "password"} required />
                                <span className="absolute top-4 left-[280px]" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-success"><FaGoogle className="text-xl"></FaGoogle>Login</button>
                        </div>
                        <div>
                            <h2>Did not Register yet? <NavLink className="underline" to="/register">Register</NavLink> Here</h2>
                        </div>
                    </form>
                    {/* <SocialLogin></SocialLogin> */}
                    <div>
                        <div className="form-control mt-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-secondary"><FaGoogle className="text-xl"></FaGoogle>Login with Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGithubSignIn} className="btn btn-primary"><FaGithub className="text-xl"></FaGithub>Login with Github</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;