import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import registerAnimation from '../../../assets/lottieAnimation/register.json'

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const avatar = [
        "https://img.icons8.com/?size=96&id=81120&format=png",
        "https://img.icons8.com/?size=96&id=80989&format=png",
        "https://img.icons8.com/?size=96&id=80615&format=png",
        "https://img.icons8.com/?size=96&id=81026&format=png",
        "https://img.icons8.com/?size=96&id=81802&format=png",
    ];
    const [activeAvatar, setActiveAvater] = useState(avatar[0]);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        reset();

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log('LoggedUser', loggedUser);

                //After user creation, update their profile
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Updated Successfully.')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Profile Updated Successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/");
                    })
                    .catch((error) => {
                        console.error('Error updating user profile:', error);
                    })
            })
            .catch((error) => {
                console.error('error', error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row-reverse w-full px-10">
                <div className="w-1/2">
                    <Lottie animationData={registerAnimation} loop={true}></Lottie>
                </div>

                <div className="w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center mb-4 heading-font">Sign Up!</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* {Name field} */}
                            <div className="form-control all-font">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="flex w-full">
                                {/* {email field} */}
                                <div className="form-control all-font w-1/2 me-4">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>

                                {/* {Contact Number field} */}
                                <div className="form-control all-font w-1/2">
                                    <label className="label">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input type="number"
                                        {...register('number', { required: true })}
                                        placeholder="Enter Phone Number" className="input input-bordered" />
                                    {errors.number && <p className='text-red-500'>Phone Number is required.</p>}
                                </div>
                            </div>

                            {/* {Choose Avatar Field} */}
                            <div className="form-control all-font">
                                <label className="label">
                                    <span className="label-text">Choose an Avatar</span>
                                </label>
                                <div className="flex flex-wrap gap-2 ">
                                    {avatar.map((imgLink, index) => (
                                        <div key={index}>
                                            <img
                                                onClick={() => {
                                                    setActiveAvater(avatar[index]);
                                                }}
                                                src={`${imgLink}`}
                                                className={`max-w-[60px] cursor-pointer ${activeAvatar == imgLink &&
                                                    "border-green-500 p-px  border-2 rounded-full"
                                                    }`}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                    <div className="rounded-full cursor-pointer  bg-base-200 flex items-center justify-center w-16 h-16">
                                        <img
                                            src="https://img.icons8.com/?size=96&id=8ax09IWlr80n&format=png"
                                            alt=""
                                            className="max-w-[40px] "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* {NID Field} */}
                            <div className="form-control all-font">
                                <label className="label">
                                    <span className="label-text">NID Number</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter NID"
                                    className="input input-bordered"
                                    {...register("nid", {
                                        required: true,
                                         pattern: /^\d{10}$/ ,
                                    })}
                                />{" "}
                                {errors.nid && (
                                    <span className="text-sm text-red-600 p-2">
                                        Insert a Valid NID
                                    </span>
                                )}
                            </div>

                            <div className="flex me-4 all-font w-full">
                                {/* {password field} */}
                                <div className="form-control me-4 w-1/2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/,
                                        })}
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered"
                                    />
                                    {errors.password && (
                                        <span className="text-red-600">
                                            Password: 6+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special.
                                        </span>
                                    )}

                                </div>

                                {/* {confirm password field} */}
                                <div className="form-control all-font w-1/2">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirm password")} name="confirm password" placeholder="Confirm Password" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='text-[#D1A054] font-medium text-xl text-center all-font'><small>Already have an account? <Link to={'/login'}>LOG IN</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;